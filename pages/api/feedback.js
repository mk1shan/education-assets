// API route to handle feedback using GitHub Gists
// This stores feedback in a GitHub Gist (no database needed!)

const fs = require('fs');
const path = require('path');

const GIST_ID_FILE = path.join(process.cwd(), 'data', 'gist-id.json');
const GITHUB_TOKEN = process.env.GITHUB_TOKEN || null; // Your GitHub personal access token

// Helper function to read GIST_ID from file
function getStoredGistId() {
  try {
    if (fs.existsSync(GIST_ID_FILE)) {
      const data = JSON.parse(fs.readFileSync(GIST_ID_FILE, 'utf8'));
      return data.gistId || null;
    }
  } catch (error) {
    console.error('Error reading GIST_ID file:', error);
  }
  return process.env.GITHUB_GIST_ID || null;
}

// Helper function to save GIST_ID to file
function saveGistId(gistId) {
  try {
    const dataDir = path.dirname(GIST_ID_FILE);
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }
    fs.writeFileSync(GIST_ID_FILE, JSON.stringify({ gistId }, null, 2));
  } catch (error) {
    console.error('Error saving GIST_ID file:', error);
  }
}

// Helper function to search for existing gist
async function findExistingGist() {
  if (!GITHUB_TOKEN) return null;
  
  try {
    // Search user's gists for one with our description
    const response = await fetch('https://api.github.com/gists?per_page=100', {
      headers: {
        'Authorization': `Bearer ${GITHUB_TOKEN}`,
        'Accept': 'application/vnd.github.v3+json'
      }
    });

    if (response.ok) {
      const gists = await response.json();
      const existingGist = gists.find(gist => 
        gist.description === 'EduRelief SL - User Feedback' &&
        gist.files && gist.files['feedback.json']
      );
      if (existingGist) {
        console.log('Found existing gist:', existingGist.id);
        saveGistId(existingGist.id);
        // Fetch full gist to get latest content
        const fullGistResponse = await fetch(`https://api.github.com/gists/${existingGist.id}`, {
          headers: {
            'Authorization': `token ${GITHUB_TOKEN}`,
            'Accept': 'application/vnd.github.v3+json'
          }
        });
        if (fullGistResponse.ok) {
          return await fullGistResponse.json();
        }
        return existingGist;
      }
    } else {
      console.error('Failed to fetch gists:', response.status, response.statusText);
    }
  } catch (error) {
    console.error('Error searching for existing gist:', error);
  }
  return null;
}

// Helper function to get or create the feedback gist
async function getFeedbackGist() {
  if (!GITHUB_TOKEN) {
    throw new Error('GitHub token not configured');
  }

  // ALWAYS search for existing gist first (most reliable)
  const existingGist = await findExistingGist();
  if (existingGist) {
    return existingGist;
  }

  // Try to get stored GIST_ID as fallback
  let gistId = getStoredGistId();
  if (gistId) {
    try {
      const response = await fetch(`https://api.github.com/gists/${gistId}`, {
        headers: {
          'Authorization': `token ${GITHUB_TOKEN}`,
          'Accept': 'application/vnd.github.v3+json'
        }
      });

      if (response.ok) {
        const gist = await response.json();
        // Verify it has our feedback.json file
        if (gist.files && gist.files['feedback.json']) {
          return gist;
        }
      }
    } catch (error) {
      console.error('Error fetching stored gist:', error);
    }
  }

  // If no existing gist found, create a new one
  console.log('Creating new feedback gist...');
  const response = await fetch('https://api.github.com/gists', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${GITHUB_TOKEN}`,
      'Accept': 'application/vnd.github.v3+json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      description: 'EduRelief SL - User Feedback',
      public: true, // Make it public so anyone can read
      files: {
        'feedback.json': {
          content: JSON.stringify([], null, 2)
        }
      }
    })
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`Failed to create gist: ${error}`);
  }

  const newGist = await response.json();
  console.log('Created new gist with ID:', newGist.id);
  // Save the new GIST_ID
  saveGistId(newGist.id);
  return newGist;
}

// GET - Retrieve all feedback
export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const gist = await getFeedbackGist();
      const feedbackContent = gist.files['feedback.json'].content;
      const feedback = JSON.parse(feedbackContent);
      
      // Sort by date (newest first)
      feedback.sort((a, b) => new Date(b.date) - new Date(a.date));
      
      res.status(200).json({ success: true, feedback });
    } catch (error) {
      console.error('Error fetching feedback:', error);
      res.status(500).json({ 
        success: false, 
        error: 'Failed to fetch feedback',
        message: error.message 
      });
    }
  } 
  // POST - Add new feedback
  else if (req.method === 'POST') {
    try {
      const { name, message } = req.body;

      if (!message || message.trim().length === 0) {
        return res.status(400).json({ 
          success: false, 
          error: 'Message is required' 
        });
      }

      if (message.length > 1000) {
        return res.status(400).json({ 
          success: false, 
          error: 'Message is too long (max 1000 characters)' 
        });
      }

      // Get existing feedback
      const gist = await getFeedbackGist();
      const feedbackContent = gist.files['feedback.json'].content;
      const feedback = JSON.parse(feedbackContent);

      // Add new feedback
      const newFeedback = {
        id: Date.now().toString(),
        name: name && name.trim() ? name.trim() : 'Anonymous',
        message: message.trim(),
        date: new Date().toISOString()
      };

      feedback.push(newFeedback);

      // Update the gist
      console.log('Updating gist:', gist.id, 'with', feedback.length, 'feedback items');
      const updateResponse = await fetch(`https://api.github.com/gists/${gist.id}`, {
        method: 'PATCH',
        headers: {
          'Authorization': `token ${GITHUB_TOKEN}`,
          'Accept': 'application/vnd.github.v3+json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          files: {
            'feedback.json': {
              content: JSON.stringify(feedback, null, 2)
            }
          }
        })
      });

      if (!updateResponse.ok) {
        const errorText = await updateResponse.text();
        console.error('Failed to update gist:', updateResponse.status, errorText);
        throw new Error(`Failed to update gist: ${updateResponse.status} - ${errorText}`);
      }
      
      console.log('Gist updated successfully');

      res.status(200).json({ 
        success: true, 
        message: 'Feedback submitted successfully!',
        feedback: newFeedback
      });
    } catch (error) {
      console.error('Error submitting feedback:', error);
      res.status(500).json({ 
        success: false, 
        error: 'Failed to submit feedback',
        message: error.message 
      });
    }
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).json({ success: false, error: 'Method not allowed' });
  }
}

