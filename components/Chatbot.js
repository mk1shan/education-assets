import { useState, useEffect, useRef } from 'react';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      text: "Hello! 👋 I'm here to help you find educational resources. How can I assist you today?",
      sender: 'bot'
    }
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const botResponses = {
    'hi': 'Hello! How can I help you find resources today?',
    'hello': 'Hello! How can I help you find resources today?',
    'help': 'I can help you:\n• Find resources by grade (Primary, Middle School, O/L, A/L)\n• Navigate to specific subjects\n• Answer questions about the website\n• Find past papers and notes',
    'grade': 'We have resources for:\n• Primary (Grades 1-5)\n• Middle School (Grades 6-9)\n• O/L (Ordinary Level)\n• A/L (Advanced Level)\n\nWhich grade are you looking for?',
    'primary': 'For Primary grades, click on "Primary (Grades 1–5)" on the homepage. You\'ll find resources for Grade 1, 2, 3, and 4.',
    'middle': 'For Middle School, click on "Middle School (Grades 6–9)" on the homepage. You\'ll find resources for Grade 6, 7, 8, and 9.',
    'ol': 'For O/L resources, click on "O/L (Ordinary Level)" on the homepage. You\'ll find subjects like Mathematics, Science, Sinhala, English, and more.',
    'al': 'For A/L resources, click on "A/L (Advanced Level)" on the homepage. You\'ll find streams like Science, Commerce, Arts, and Technology.',
    'subject': 'We have many subjects available!\n\n📚 O/L Subjects:\nArt, Buddhism, Citizenship Education, Commerce, English, English Literature, History, ICT, Mathematics, Music, Science, Sinhala, Sinhala Literature, Tamil, Geography, Health & Physical Education, Dancing, Drama\n\n🔬 A/L Science Stream:\nPhysics, Chemistry, Biology, Combined Maths\n\n💼 A/L Commerce Stream:\nAccounting, Business Studies, Economics\n\n💻 A/L Technology Stream:\nIT, Engineering Tech, SFT, BST\n\n🎨 A/L Arts Stream:\nMedia Studies, Geography, Political Science, Sinhala, Japanese, History, Music, French, GRC, ICT Notes, Home Science\n\n📖 Other:\nGeneral English, GIT, General Knowledge\n\nWhich subject are you interested in?',
    'list': 'Here are ALL subjects available on our website:\n\n📚 O/L (Ordinary Level):\n• Art\n• Buddhism\n• Citizenship Education\n• Commerce\n• English\n• English Literature\n• History\n• ICT\n• Mathematics\n• Music\n• Science\n• Sinhala\n• Sinhala Literature\n• Tamil\n• Geography\n• Health & Physical Education\n• Dancing\n• Drama\n\n🔬 A/L Science Stream:\n• Physics (with Term Test Papers)\n• Chemistry (with Term Test Papers)\n• Biology (with Term Test Papers)\n• Combined Maths (with Term Test Papers)\n\n💼 A/L Commerce Stream:\n• Accounting\n• Business Studies\n• Economics\n\n💻 A/L Technology Stream:\n• IT\n• Engineering Tech\n• SFT (Science for Technology)\n• BST (Biosystems Technology)\n\n🎨 A/L Arts Stream:\n• Media Studies\n• Geography\n• Political Science\n• Sinhala\n• Japanese\n• History\n• Music\n• French\n• GRC (Government & Religious Knowledge)\n• ICT Notes\n• Home Science\n\n📖 Other A/L:\n• General English\n• GIT (General Information Technology)\n• General Knowledge\n\nJust ask me about any subject to get directions!',
    'all subjects': 'Here are ALL subjects available on our website:\n\n📚 O/L (Ordinary Level):\n• Art\n• Buddhism\n• Citizenship Education\n• Commerce\n• English\n• English Literature\n• History\n• ICT\n• Mathematics\n• Music\n• Science\n• Sinhala\n• Sinhala Literature\n• Tamil\n• Geography\n• Health & Physical Education\n• Dancing\n• Drama\n\n🔬 A/L Science Stream:\n• Physics (with Term Test Papers)\n• Chemistry (with Term Test Papers)\n• Biology (with Term Test Papers)\n• Combined Maths (with Term Test Papers)\n\n💼 A/L Commerce Stream:\n• Accounting\n• Business Studies\n• Economics\n\n💻 A/L Technology Stream:\n• IT\n• Engineering Tech\n• SFT (Science for Technology)\n• BST (Biosystems Technology)\n\n🎨 A/L Arts Stream:\n• Media Studies\n• Geography\n• Political Science\n• Sinhala\n• Japanese\n• History\n• Music\n• French\n• GRC (Government & Religious Knowledge)\n• ICT Notes\n• Home Science\n\n📖 Other A/L:\n• General English\n• GIT (General Information Technology)\n• General Knowledge\n\nJust ask me about any subject to get directions!',
    'what subjects': 'Here are ALL subjects available on our website:\n\n📚 O/L (Ordinary Level):\n• Art\n• Buddhism\n• Citizenship Education\n• Commerce\n• English\n• English Literature\n• History\n• ICT\n• Mathematics\n• Music\n• Science\n• Sinhala\n• Sinhala Literature\n• Tamil\n• Geography\n• Health & Physical Education\n• Dancing\n• Drama\n\n🔬 A/L Science Stream:\n• Physics (with Term Test Papers)\n• Chemistry (with Term Test Papers)\n• Biology (with Term Test Papers)\n• Combined Maths (with Term Test Papers)\n\n💼 A/L Commerce Stream:\n• Accounting\n• Business Studies\n• Economics\n\n💻 A/L Technology Stream:\n• IT\n• Engineering Tech\n• SFT (Science for Technology)\n• BST (Biosystems Technology)\n\n🎨 A/L Arts Stream:\n• Media Studies\n• Geography\n• Political Science\n• Sinhala\n• Japanese\n• History\n• Music\n• French\n• GRC (Government & Religious Knowledge)\n• ICT Notes\n• Home Science\n\n📖 Other A/L:\n• General English\n• GIT (General Information Technology)\n• General Knowledge\n\nJust ask me about any subject to get directions!',
    'past paper': 'Yes! We have past papers for many subjects. Navigate to your grade level and subject to find past papers. For A/L Science subjects, we also have Term Test Papers from various schools.',
    'download': 'To download files:\n1. Click on your grade level\n2. Select your subject\n3. Click "View" next to any file\n4. You\'ll be taken to Google Drive where you can download',
    'free': 'Yes! All resources on this website are 100% free. No login required, no payment needed.',
    'contact': 'If you have feedback or questions, you can use the Feedback page from the navigation menu.',
    'tamil': 'For Tamil resources, go to O/L section and select Tamil. We have Tamil lessons, grammar notes, and more.',
    'sinhala': 'For Sinhala resources, go to O/L section and select Sinhala or Sinhala Literature. We also have audio files for literature. For A/L, we also have Sinhala in Arts Stream.',
    'math': 'For Mathematics, we have resources for:\n• O/L Mathematics\n• A/L Combined Maths\n• Grade 1-9 Mathematics\n\nWe also have Term Test Papers for Combined Maths!',
    'science': 'For Science resources:\n• O/L Science\n• A/L Physics, Chemistry, Biology\n• We have Term Test Papers for Physics, Chemistry, and Biology!',
    'physics': 'For Physics, go to A/L → Science Stream → Physics. We have past papers, notes, and Term Test Papers from various schools!',
    'chemistry': 'For Chemistry, go to A/L → Science Stream → Chemistry. We have past papers, notes, and Term Test Papers from various schools!',
    'biology': 'For Biology, go to A/L → Science Stream → Biology. We have past papers, notes, and Term Test Papers from various schools!',
    'combined maths': 'For Combined Maths, go to A/L → Science Stream → Combined Maths. We have notes, past papers, and Term Test Papers!',
    'accounting': 'For Accounting, go to A/L → Commerce Stream → Accounting. We have resources in both Sinhala and English medium.',
    'business studies': 'For Business Studies, go to A/L → Commerce Stream → Business Studies.',
    'economics': 'For Economics, go to A/L → Commerce Stream → Econ. We have past papers, notes, and additional resources.',
    'econ': 'For Economics, go to A/L → Commerce Stream → Econ. We have past papers, notes, and additional resources.',
    'it': 'For IT, go to A/L → Technology Stream → IT.',
    'engineering tech': 'For Engineering Technology, go to A/L → Technology Stream → Engineering Tech.',
    'sft': 'For SFT (Science for Technology), go to A/L → Technology Stream → SFT.',
    'bst': 'For BST (Biosystems Technology), go to A/L → Technology Stream → BST.',
    'media studies': 'For Media Studies, go to A/L → Arts Stream → Media Studies. We have past papers and notes.',
    'geography': 'For Geography:\n• O/L Geography (Note Kokka resources)\n• A/L Geography (Arts Stream)',
    'political science': 'For Political Science, go to A/L → Arts Stream → Political Science.',
    'japanese': 'For Japanese, go to A/L → Arts Stream → Japanese.',
    'history': 'For History:\n• O/L History (with Note Kokka resources)\n• A/L History (Arts Stream)',
    'music': 'For Music:\n• O/L Music\n• A/L Music (Arts Stream)',
    'french': 'For French, go to A/L → Arts Stream → French.',
    'grc': 'For GRC (Government & Religious Knowledge), go to A/L → Arts Stream → GRC.',
    'home science': 'For Home Science, go to A/L → Arts Stream → Home Science (Note Kokka resources).',
    'art': 'For Art, go to O/L section and select Art. We have Note Kokka resources available.',
    'buddhism': 'For Buddhism, go to O/L section and select Buddhism. We have multiple resources and Note Kokka materials.',
    'citizenship education': 'For Citizenship Education, go to O/L section and select Citizenship Education. We have Note Kokka resources.',
    'commerce': 'For Commerce, go to O/L section and select Commerce. We have Note Kokka resources available.',
    'english': 'For English:\n• O/L English\n• O/L English Literature\n• A/L General English',
    'english literature': 'For English Literature, go to O/L section and select English Literature. We have Note Kokka resources.',
    'ict': 'For ICT:\n• O/L ICT (with Note Kokka resources)\n• A/L ICT Notes (Arts Stream)',
    'mathematics': 'For Mathematics, go to O/L section and select Mathematics. We have Note Kokka resources.',
    'dancing': 'For Dancing, go to O/L section and select Dancing. We have Note Kokka resources.',
    'drama': 'For Drama, go to O/L section and select Drama. We have Note Kokka resources.',
    'health': 'For Health & Physical Education, go to O/L section and select Health & Physical Education. We have Note Kokka resources.',
    'physical education': 'For Health & Physical Education, go to O/L section and select Health & Physical Education. We have Note Kokka resources.',
    'general knowledge': 'For General Knowledge, go to A/L → Common Test → General Knowledge. We have past papers from 2015-2024.',
    'general english': 'For General English, go to A/L → General English section.',
    'git': 'For GIT (General Information Technology), go to A/L → GIT section.',
    'who': 'This website was created by Kishan Imayanga. All the resources are provided by students and teachers in Sri Lanka. 🇱🇰\n\nWe are grateful to all the contributors who share their knowledge and materials to help fellow students!',
    'made': 'This website was created by Kishan Imayanga. All the resources are provided by students and teachers in Sri Lanka. 🇱🇰\n\nWe are grateful to all the contributors who share their knowledge and materials to help fellow students!',
    'create': 'This website was created by Kishan Imayanga. All the resources are provided by students and teachers in Sri Lanka. 🇱🇰\n\nWe are grateful to all the contributors who share their knowledge and materials to help fellow students!',
    'creator': 'This website was created by Kishan Imayanga. All the resources are provided by students and teachers in Sri Lanka. 🇱🇰\n\nWe are grateful to all the contributors who share their knowledge and materials to help fellow students!',
    'author': 'This website was created by Kishan Imayanga. All the resources are provided by students and teachers in Sri Lanka. 🇱🇰\n\nWe are grateful to all the contributors who share their knowledge and materials to help fellow students!',
    'kishan': 'Yes! Kishan Imayanga created this website. All resources are provided by students and teachers in Sri Lanka. 🇱🇰',
    'default': 'I can help you find resources by grade or subject! Try asking about:\n• "Primary resources" or "Middle School"\n• "O/L subjects" or "A/L subjects"\n• Specific subjects like "Physics", "Chemistry", "Tamil", "Accounting", etc.\n• "Past papers" or "Term test papers"\n• "How to download?"\n• Or any other question you have!'
  };

  // Comprehensive list of all subjects in the website
  const allSubjects = {
    // O/L Subjects
    'art': { level: 'O/L', stream: null, response: 'For Art, go to O/L section and select Art. We have Note Kokka resources available.' },
    'buddhism': { level: 'O/L', stream: null, response: 'For Buddhism, go to O/L section and select Buddhism. We have multiple resources and Note Kokka materials.' },
    'citizenship education': { level: 'O/L', stream: null, response: 'For Citizenship Education, go to O/L section and select Citizenship Education. We have Note Kokka resources.' },
    'civic': { level: 'O/L', stream: null, response: 'For Citizenship Education, go to O/L section and select Citizenship Education. We have Note Kokka resources.' },
    'commerce': { level: 'O/L', stream: null, response: 'For Commerce, go to O/L section and select Commerce. We have Note Kokka resources available.' },
    'english': { level: 'O/L', stream: null, response: 'For English, go to O/L section and select English. We also have English Literature with Note Kokka resources.' },
    'english literature': { level: 'O/L', stream: null, response: 'For English Literature, go to O/L section and select English Literature. We have Note Kokka resources.' },
    'history': { level: 'O/L', stream: null, response: 'For History, go to O/L section and select History. We have Note Kokka resources. For A/L History, go to Arts Stream.' },
    'ict': { level: 'O/L', stream: null, response: 'For ICT, go to O/L section and select ICT. We have Note Kokka resources. For A/L ICT Notes, go to Arts Stream.' },
    'mathematics': { level: 'O/L', stream: null, response: 'For Mathematics, go to O/L section and select Mathematics. We have Note Kokka resources. For A/L Combined Maths, go to Science Stream.' },
    'math': { level: 'O/L', stream: null, response: 'For Mathematics, go to O/L section and select Mathematics. We have Note Kokka resources. For A/L Combined Maths, go to Science Stream.' },
    'music': { level: 'O/L', stream: null, response: 'For Music, go to O/L section and select Music. For A/L Music, go to Arts Stream.' },
    'science': { level: 'O/L', stream: null, response: 'For Science, go to O/L section and select Science. We have Note Kokka resources. For A/L Science subjects (Physics, Chemistry, Biology), go to Science Stream.' },
    'sinhala': { level: 'O/L', stream: null, response: 'For Sinhala, go to O/L section and select Sinhala or Sinhala Literature. We also have audio files for literature. For A/L Sinhala, go to Arts Stream.' },
    'sinhala literature': { level: 'O/L', stream: null, response: 'For Sinhala Literature, go to O/L section and select Sinhala Literature. We have notes, papers, and audio files (MP3).' },
    'tamil': { level: 'O/L', stream: null, response: 'For Tamil, go to O/L section and select Tamil. We have Tamil lessons, grammar notes, and resources from Shashini.' },
    'geography': { level: 'O/L', stream: null, response: 'For Geography, go to O/L section and select Geography. We have Note Kokka resources. For A/L Geography, go to Arts Stream.' },
    'health': { level: 'O/L', stream: null, response: 'For Health & Physical Education, go to O/L section and select Health & Physical Education. We have Note Kokka resources.' },
    'physical education': { level: 'O/L', stream: null, response: 'For Health & Physical Education, go to O/L section and select Health & Physical Education. We have Note Kokka resources.' },
    'dancing': { level: 'O/L', stream: null, response: 'For Dancing, go to O/L section and select Dancing. We have Note Kokka resources.' },
    'dance': { level: 'O/L', stream: null, response: 'For Dancing, go to O/L section and select Dancing. We have Note Kokka resources.' },
    'drama': { level: 'O/L', stream: null, response: 'For Drama, go to O/L section and select Drama. We have Note Kokka resources.' },
    
    // A/L Science Stream
    'physics': { level: 'A/L', stream: 'Science', response: 'For Physics, go to A/L → Science Stream → Physics. We have past papers, notes, and Term Test Papers from various schools!' },
    'chemistry': { level: 'A/L', stream: 'Science', response: 'For Chemistry, go to A/L → Science Stream → Chemistry. We have past papers, notes, and Term Test Papers from various schools!' },
    'biology': { level: 'A/L', stream: 'Science', response: 'For Biology, go to A/L → Science Stream → Biology. We have past papers, notes, and Term Test Papers from various schools!' },
    'combined maths': { level: 'A/L', stream: 'Science', response: 'For Combined Maths, go to A/L → Science Stream → Combined Maths. We have notes, past papers, and Term Test Papers!' },
    'combined mathematics': { level: 'A/L', stream: 'Science', response: 'For Combined Maths, go to A/L → Science Stream → Combined Maths. We have notes, past papers, and Term Test Papers!' },
    
    // A/L Commerce Stream
    'accounting': { level: 'A/L', stream: 'Commerce', response: 'For Accounting, go to A/L → Commerce Stream → Accounting. We have resources in both Sinhala and English medium, plus Note Kokka materials.' },
    'business studies': { level: 'A/L', stream: 'Commerce', response: 'For Business Studies, go to A/L → Commerce Stream → Business Studies.' },
    'economics': { level: 'A/L', stream: 'Commerce', response: 'For Economics, go to A/L → Commerce Stream → Econ. We have past papers, notes, and additional resources from Chenuri Rajasinghe.' },
    'econ': { level: 'A/L', stream: 'Commerce', response: 'For Economics, go to A/L → Commerce Stream → Econ. We have past papers, notes, and additional resources from Chenuri Rajasinghe.' },
    
    // A/L Technology Stream
    'it': { level: 'A/L', stream: 'Technology', response: 'For IT, go to A/L → Technology Stream → IT.' },
    'engineering tech': { level: 'A/L', stream: 'Technology', response: 'For Engineering Technology, go to A/L → Technology Stream → Engineering Tech.' },
    'engineering technology': { level: 'A/L', stream: 'Technology', response: 'For Engineering Technology, go to A/L → Technology Stream → Engineering Tech.' },
    'et': { level: 'A/L', stream: 'Technology', response: 'For Engineering Technology (ET), go to A/L → Technology Stream → Engineering Tech.' },
    'sft': { level: 'A/L', stream: 'Technology', response: 'For SFT (Science for Technology), go to A/L → Technology Stream → SFT.' },
    'science for technology': { level: 'A/L', stream: 'Technology', response: 'For SFT (Science for Technology), go to A/L → Technology Stream → SFT.' },
    'bst': { level: 'A/L', stream: 'Technology', response: 'For BST (Biosystems Technology), go to A/L → Technology Stream → BST.' },
    'biosystems technology': { level: 'A/L', stream: 'Technology', response: 'For BST (Biosystems Technology), go to A/L → Technology Stream → BST.' },
    
    // A/L Arts Stream
    'media studies': { level: 'A/L', stream: 'Arts', response: 'For Media Studies, go to A/L → Arts Stream → Media Studies. We have past papers and Note Kokka resources.' },
    'political science': { level: 'A/L', stream: 'Arts', response: 'For Political Science, go to A/L → Arts Stream → Political Science.' },
    'japanese': { level: 'A/L', stream: 'Arts', response: 'For Japanese, go to A/L → Arts Stream → Japanese.' },
    'french': { level: 'A/L', stream: 'Arts', response: 'For French, go to A/L → Arts Stream → French.' },
    'grc': { level: 'A/L', stream: 'Arts', response: 'For GRC (Government & Religious Knowledge), go to A/L → Arts Stream → GRC.' },
    'government': { level: 'A/L', stream: 'Arts', response: 'For GRC (Government & Religious Knowledge), go to A/L → Arts Stream → GRC.' },
    'home science': { level: 'A/L', stream: 'Arts', response: 'For Home Science, go to A/L → Arts Stream → Home Science. We have Note Kokka resources.' },
    
    // Other A/L
    'general english': { level: 'A/L', stream: 'General', response: 'For General English, go to A/L → General English section.' },
    'git': { level: 'A/L', stream: 'General', response: 'For GIT (General Information Technology), go to A/L → GIT section.' },
    'general information technology': { level: 'A/L', stream: 'General', response: 'For GIT (General Information Technology), go to A/L → GIT section.' },
    'general knowledge': { level: 'A/L', stream: 'Common Test', response: 'For General Knowledge, go to A/L → Common Test → General Knowledge. We have past papers from 2015-2024.' },
    'gk': { level: 'A/L', stream: 'Common Test', response: 'For General Knowledge, go to A/L → Common Test → General Knowledge. We have past papers from 2015-2024.' },
  };

  const findResponse = (userInput) => {
    const lowerInput = userInput.toLowerCase().trim();
    
    // First check exact matches in botResponses
    for (const [key, response] of Object.entries(botResponses)) {
      if (key !== 'default' && lowerInput.includes(key)) {
        return response;
      }
    }
    
    // Then check all subjects for matches
    for (const [subjectKey, subjectInfo] of Object.entries(allSubjects)) {
      if (lowerInput.includes(subjectKey)) {
        return subjectInfo.response;
      }
    }
    
    // Check for partial matches in subject names
    const subjectKeys = Object.keys(allSubjects);
    for (const key of subjectKeys) {
      const words = key.split(' ');
      if (words.some(word => word.length > 3 && lowerInput.includes(word))) {
        return allSubjects[key].response;
      }
    }
    
    return botResponses.default;
  };

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = {
      text: input,
      sender: 'user'
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');

    // Simulate bot thinking
    setTimeout(() => {
      const botMessage = {
        text: findResponse(input),
        sender: 'bot'
      };
      setMessages(prev => [...prev, botMessage]);
    }, 500);
  };

  const quickActions = [
    'Find O/L resources',
    'Find A/L resources',
    'How to download?',
    'Past papers'
  ];

  const handleQuickAction = (action) => {
    const userMessage = {
      text: action,
      sender: 'user'
    };
    setMessages(prev => [...prev, userMessage]);
    setInput('');

    setTimeout(() => {
      const botMessage = {
        text: findResponse(action),
        sender: 'bot'
      };
      setMessages(prev => [...prev, botMessage]);
    }, 500);
  };

  return (
    <>
      <style jsx>{`
        .chatbot-container {
          position: fixed;
          bottom: 20px;
          right: 20px;
          z-index: 1000;
          font-family: var(--font-sans);
        }

        .chatbot-button {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: linear-gradient(135deg, #10b981 0%, #059669 100%);
          border: none;
          color: white;
          font-size: 24px;
          cursor: pointer;
          box-shadow: 0 4px 12px rgba(16, 185, 129, 0.4);
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .chatbot-button:hover {
          transform: scale(1.1);
          box-shadow: 0 6px 16px rgba(16, 185, 129, 0.5);
        }

        .chatbot-window {
          position: absolute;
          bottom: 80px;
          right: 0;
          width: 350px;
          height: 500px;
          background: white;
          border-radius: 20px;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
          display: flex;
          flex-direction: column;
          overflow: hidden;
          animation: slideUp 0.3s ease;
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .chatbot-header {
          background: linear-gradient(135deg, #10b981 0%, #059669 100%);
          color: white;
          padding: 1rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .chatbot-header h3 {
          margin: 0;
          font-size: 1rem;
          font-weight: 600;
        }

        .close-button {
          background: rgba(255, 255, 255, 0.2);
          border: none;
          color: white;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          line-height: 1;
        }

        .chatbot-messages {
          flex: 1;
          overflow-y: auto;
          padding: 1rem;
          background: #f9fafb;
        }

        .message {
          margin-bottom: 1rem;
          display: flex;
          flex-direction: column;
        }

        .message.user {
          align-items: flex-end;
        }

        .message.bot {
          align-items: flex-start;
        }

        .message-bubble {
          max-width: 80%;
          padding: 0.75rem 1rem;
          border-radius: 18px;
          word-wrap: break-word;
          white-space: pre-line;
        }

        .message.user .message-bubble {
          background: linear-gradient(135deg, #10b981 0%, #059669 100%);
          color: white;
          border-bottom-right-radius: 4px;
        }

        .message.bot .message-bubble {
          background: white;
          color: #374151;
          border: 1px solid #e5e7eb;
          border-bottom-left-radius: 4px;
        }

        .chatbot-input-area {
          padding: 1rem;
          background: white;
          border-top: 1px solid #e5e7eb;
        }

        .quick-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 0.75rem;
        }

        .quick-action-button {
          padding: 0.4rem 0.8rem;
          background: #f3f4f6;
          border: 1px solid #e5e7eb;
          border-radius: 12px;
          font-size: 0.75rem;
          cursor: pointer;
          transition: all 0.2s;
          color: #374151;
        }

        .quick-action-button:hover {
          background: #e5e7eb;
        }

        .chatbot-form {
          display: flex;
          gap: 0.5rem;
        }

        .chatbot-input {
          flex: 1;
          padding: 0.75rem;
          border: 1px solid #e5e7eb;
          border-radius: 12px;
          font-size: 0.9rem;
          outline: none;
        }

        .chatbot-input:focus {
          border-color: #10b981;
        }

        .chatbot-send {
          padding: 0.75rem 1.25rem;
          background: linear-gradient(135deg, #10b981 0%, #059669 100%);
          color: white;
          border: none;
          border-radius: 12px;
          cursor: pointer;
          font-weight: 600;
          transition: all 0.2s;
        }

        .chatbot-send:hover {
          transform: translateY(-1px);
          box-shadow: 0 4px 8px rgba(16, 185, 129, 0.3);
        }

        @media (max-width: 768px) {
          .chatbot-window {
            width: calc(100vw - 40px);
            right: -10px;
            bottom: 90px;
          }
        }
      `}</style>

      <div className="chatbot-container">
        {isOpen && (
          <div className="chatbot-window">
            <div className="chatbot-header">
              <h3>💬 Need Help?</h3>
              <button className="close-button" onClick={() => setIsOpen(false)}>
                ×
              </button>
            </div>
            <div className="chatbot-messages">
              {messages.map((msg, idx) => (
                <div key={idx} className={`message ${msg.sender}`}>
                  <div className="message-bubble">{msg.text}</div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>
            <div className="chatbot-input-area">
              <div className="quick-actions">
                {quickActions.map((action, idx) => (
                  <button
                    key={idx}
                    className="quick-action-button"
                    onClick={() => handleQuickAction(action)}
                  >
                    {action}
                  </button>
                ))}
              </div>
              <form className="chatbot-form" onSubmit={handleSend}>
                <input
                  type="text"
                  className="chatbot-input"
                  placeholder="Type your question..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                />
                <button type="submit" className="chatbot-send">
                  Send
                </button>
              </form>
            </div>
          </div>
        )}
        <button className="chatbot-button" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? '✕' : '💬'}
        </button>
      </div>
    </>
  );
};

export default Chatbot;

