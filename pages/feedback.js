import Head from "next/head";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Feedback() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [feedback, setFeedback] = useState([]);
  const [loading, setLoading] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Fetch feedback on component mount
  useEffect(() => {
    fetchFeedback();
  }, []);

  const fetchFeedback = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/feedback');
      const data = await response.json();
      if (data.success) {
        setFeedback(data.feedback);
      } else {
        console.error('Failed to fetch feedback:', data.error);
      }
    } catch (error) {
      console.error('Error fetching feedback:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!message.trim()) {
      setSubmitStatus({ type: 'error', message: 'Please enter a message' });
      return;
    }

    setSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/api/feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, message }),
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus({ type: 'success', message: 'Thank you for your feedback! It will appear below shortly.' });
        setName("");
        setMessage("");
        // Refresh feedback list after a short delay
        setTimeout(() => {
          fetchFeedback();
        }, 1000);
      } else {
        setSubmitStatus({ type: 'error', message: data.error || 'Failed to submit feedback. Please try again.' });
      }
    } catch (error) {
      setSubmitStatus({ type: 'error', message: 'Network error. Please check your connection and try again.' });
    } finally {
      setSubmitting(false);
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <>
      <Head>
        <title>Feedback - EduRelief SL</title>
        <meta
          name="description"
          content="Share your feedback about EduRelief SL. Help us improve!"
        />
      </Head>

      <div className="page-wrapper">
        <nav className="nav">
          <div className="nav-content">
            <Link href="/" className="brand">
              <div className="brand-icon">
                <svg viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="0">
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <span className="brand-name">EduRelief SL</span>
            </Link>
            <div className="nav-links">
              <Link href="/" className="nav-link">Home</Link>
              <Link href="/#grades" className="nav-link">Grades</Link>
              <Link href="/feedback" className="nav-link active">Feedback</Link>
            </div>
            <button 
              className="mobile-menu-btn"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
          
          {/* Mobile Menu */}
          <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
            <Link href="/" className="nav-link" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link href="/#grades" className="nav-link" onClick={() => setIsMenuOpen(false)}>Grades</Link>
            <Link href="/feedback" className="nav-link active" onClick={() => setIsMenuOpen(false)}>Feedback</Link>
          </div>
        </nav>

        <main style={{ paddingTop: '80px', minHeight: 'calc(100vh - 80px)' }}>
          <div className="container" style={{ maxWidth: '900px', margin: '0 auto', padding: '2rem 1.5rem' }}>
            {/* Header */}
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <h1 style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '1rem', color: 'var(--dark)' }}>
                Share Your Feedback
              </h1>
              <p style={{ fontSize: '1.1rem', color: 'var(--gray)', maxWidth: '600px', margin: '0 auto' }}>
                Your thoughts help us improve EduRelief SL. Share your suggestions, report issues, or let us know what you love!
              </p>
            </div>

            {/* Feedback Form */}
            <div className="feedback-card" style={{ 
              background: 'white', 
              borderRadius: '12px', 
              padding: '2rem', 
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
              marginBottom: '3rem'
            }}>
              <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--dark)' }}>
                Submit Feedback
              </h2>
              
              <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '1.5rem' }}>
                  <label htmlFor="name" style={{ 
                    display: 'block', 
                    marginBottom: '0.5rem', 
                    fontWeight: '500',
                    color: 'var(--dark)'
                  }}>
                    Name (Optional)
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name (optional)"
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      border: '2px solid #e5e7eb',
                      borderRadius: '8px',
                      fontSize: '1rem',
                      transition: 'border-color 0.2s'
                    }}
                    onFocus={(e) => e.target.style.borderColor = 'var(--primary)'}
                    onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                  />
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                  <label htmlFor="message" style={{ 
                    display: 'block', 
                    marginBottom: '0.5rem', 
                    fontWeight: '500',
                    color: 'var(--dark)'
                  }}>
                    Your Feedback <span style={{ color: '#ef4444' }}>*</span>
                  </label>
                  <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Share your thoughts, suggestions, or report any issues..."
                    required
                    rows={6}
                    maxLength={1000}
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      border: '2px solid #e5e7eb',
                      borderRadius: '8px',
                      fontSize: '1rem',
                      fontFamily: 'inherit',
                      resize: 'vertical',
                      transition: 'border-color 0.2s'
                    }}
                    onFocus={(e) => e.target.style.borderColor = 'var(--primary)'}
                    onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                  />
                  <div style={{ 
                    textAlign: 'right', 
                    marginTop: '0.5rem', 
                    fontSize: '0.875rem', 
                    color: 'var(--gray)' 
                  }}>
                    {message.length}/1000 characters
                  </div>
                </div>

                {submitStatus && (
                  <div style={{
                    padding: '1rem',
                    borderRadius: '8px',
                    marginBottom: '1rem',
                    backgroundColor: submitStatus.type === 'success' ? '#d1fae5' : '#fee2e2',
                    color: submitStatus.type === 'success' ? '#065f46' : '#991b1b',
                    border: `1px solid ${submitStatus.type === 'success' ? '#10b981' : '#ef4444'}`
                  }}>
                    {submitStatus.message}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={submitting || !message.trim()}
                  className="btn btn-primary"
                  style={{
                    width: '100%',
                    padding: '0.875rem',
                    fontSize: '1rem',
                    fontWeight: '600',
                    cursor: submitting || !message.trim() ? 'not-allowed' : 'pointer',
                    opacity: submitting || !message.trim() ? 0.6 : 1
                  }}
                >
                  {submitting ? 'Submitting...' : 'Submit Feedback'}
                </button>
              </form>
            </div>

            {/* Feedback Display */}
            <div className="feedback-list" style={{ marginTop: '3rem' }}>
              <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--dark)' }}>
                Recent Feedback
                <button
                  onClick={fetchFeedback}
                  disabled={loading}
                  style={{
                    marginLeft: '1rem',
                    padding: '0.5rem 1rem',
                    fontSize: '0.875rem',
                    background: 'var(--primary)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '6px',
                    cursor: loading ? 'not-allowed' : 'pointer',
                    opacity: loading ? 0.6 : 1
                  }}
                >
                  {loading ? 'Loading...' : '🔄 Refresh'}
                </button>
              </h2>

              {loading && feedback.length === 0 ? (
                <div style={{ textAlign: 'center', padding: '3rem', color: 'var(--gray)' }}>
                  Loading feedback...
                </div>
              ) : feedback.length === 0 ? (
                <div style={{ 
                  textAlign: 'center', 
                  padding: '3rem', 
                  background: 'white',
                  borderRadius: '12px',
                  color: 'var(--gray)',
                  boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                }}>
                  No feedback yet. Be the first to share your thoughts!
                </div>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {feedback.map((item) => (
                    <div
                      key={item.id}
                      style={{
                        background: 'white',
                        borderRadius: '12px',
                        padding: '1.5rem',
                        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                        borderLeft: '4px solid var(--primary)'
                      }}
                    >
                      <div style={{ 
                        display: 'flex', 
                        justifyContent: 'space-between', 
                        alignItems: 'flex-start',
                        marginBottom: '0.75rem'
                      }}>
                        <div>
                          <strong style={{ color: 'var(--dark)', fontSize: '1rem' }}>
                            {item.name}
                          </strong>
                        </div>
                        <span style={{ 
                          fontSize: '0.875rem', 
                          color: 'var(--gray)',
                          whiteSpace: 'nowrap'
                        }}>
                          {formatDate(item.date)}
                        </span>
                      </div>
                      <p style={{ 
                        color: '#374151', 
                        lineHeight: '1.6',
                        margin: 0,
                        whiteSpace: 'pre-wrap',
                        wordBreak: 'break-word'
                      }}>
                        {item.message}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

