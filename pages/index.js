import Head from "next/head";
import Link from "next/link";
import { useState } from "react";

const grades = [
  {
    id: "1-5",
    label: "Primary (Grades 1–5)",
    desc: "Maths, Sinhala, Tamil, Env",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "6-9",
    label: "Middle School (Grades 6–9)",
    desc: "Science, History, Geog, Civics",
    image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "ol",
    label: "O/L (Ordinary Level)",
    desc: "Past Papers, Model Papers, Notes",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "al",
    label: "A/L (Advanced Level)",
    desc: "Sci, Arts, Comm, Tech Streams",
    image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=600&q=80"
  }
];

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <Head>
        <title>EduRelief SL</title>
        <meta
          name="description"
          content="Free school documents for Sri Lankan students. Download notes and past papers."
        />
      </Head>

      <div className="page-wrapper">
        <nav className="nav">
          <div className="nav-content">
            <div className="brand">
              <div className="brand-icon">
                <svg viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="0">
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <span className="brand-name">EduRelief SL</span>
            </div>
            <div className="nav-links">
              <a href="#" className="nav-link active">Home</a>
              <a href="#grades" className="nav-link">Grades</a>
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
            <a href="#" className="nav-link active" onClick={() => setIsMenuOpen(false)}>Home</a>
            <a href="#grades" className="nav-link" onClick={() => setIsMenuOpen(false)}>Grades</a>
          </div>
        </nav>

        <header className="hero-section">
          <div className="hero-bg">
            {/* Subtle, calm study image */}
            <img 
              src="https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=2000&q=80" 
              alt="Calm study environment"
              className="hero-img"
            />
            <div className="hero-overlay" />
          </div>
          
          <div className="hero-content">
            <span className="hero-badge">For Sri Lankan Students 🇱🇰</span>
            <h1>Stay Safe.<br/>Keep Learning.</h1>
            <p className="hero-text" style={{ color: 'white' }}>
              Access essential school documents, past papers, and short notes from Grade 1 to A/L. 
              Designed to be fast and accessible, even during floods and power cuts.
            </p>
            <div className="hero-buttons">
              <a href="#grades" className="btn btn-primary">
                Find Your Grade
              </a>
              <a href="#how-it-works" className="btn btn-outline">
                How to Download
              </a>
            </div>
          </div>
        </header>

        <main className="main-content" id="grades">
          <div className="section-header">
            <h2>Select your grade</h2>
            <p>Everything is organized by grade and subject for quick access.</p>
          </div>

          <div className="grades-grid">
            {grades.map((grade) => (
              <Link href={`/grade/${grade.id}`} key={grade.id} className="grade-card">
                <div className="grade-card-image">
                  <img src={grade.image} alt={grade.label} />
                  <div className="grade-card-overlay" />
                  <span className="grade-arrow">→</span>
                </div>
                <div className="grade-card-content">
                  <h3>{grade.label}</h3>
                  <p>{grade.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </main>

        <section className="pro-section download-section" id="how-it-works">
          <div className="container">
            <div className="content-wrapper">
              <div className="text-column">
                <div className="badge">How it Works</div>
                <h2>Instant Access to Education</h2>
                <p>
                  No login required. Just click your subject and you'll be directed straight to <strong>Google Drive</strong> to view or download files.
                </p>
                <ul className="feature-list">
                  <li>⚡ Direct Download Links</li>
                  <li>📱 Mobile Optimized PDFs</li>
                  <li>🆓 100% Free Forever</li>
                </ul>
              </div>
              <div className="image-column">
                <div className="image-card" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1600&q=80)' }} />
              </div>
            </div>
          </div>
        </section>

        <section className="pro-section safe-section">
          <div className="container">
            <div className="content-wrapper reverse">
              <div className="text-column">
                <div className="badge warning">Emergency Support</div>
                <h2>Stay Safe, Sri Lanka 🇱🇰</h2>
                <p>
                  We built this platform to support students affected by the recent floods. 
                  While education is vital, your life and safety are our top priority. 
                </p>
                
                {/* Emergency Contacts Grid */}
                <div className="emergency-grid">
                    <div className="emergency-card">
                        <span className="em-icon">🚑</span>
                        <div className="em-details">
                            <strong>Suwa Seriya / සුව සැරිය</strong>
                            <span>1990</span>
                        </div>
                    </div>
                    <div className="emergency-card">
                        <span className="em-icon">🆘</span>
                        <div className="em-details">
                            <strong>Disaster Mgmt / ආපදා කළමනාකරණ</strong>
                            <span>117 / 0112 136 136</span>
                        </div>
                    </div>
                    <div className="emergency-card">
                        <span className="em-icon">⛈️</span>
                        <div className="em-details">
                            <strong>Met Dept / කාලගුණ විද්‍යා</strong>
                            <span>0112 694 841</span>
                        </div>
                    </div>
                    <div className="emergency-card">
                        <span className="em-icon">👮</span>
                        <div className="em-details">
                            <strong>Police Emergency / පොලිස් හදිසි</strong>
                            <span>119</span>
                        </div>
                    </div>
                    <div className="emergency-card">
                        <span className="em-icon">🏠</span>
                        <div className="em-details">
                            <strong>NBRO / ගොඩනැගිලි පර්යේෂණ</strong>
                            <span>0112 588 946</span>
                        </div>
                    </div>
                    <div className="emergency-card">
                        <span className="em-icon">💧</span>
                        <div className="em-details">
                            <strong>Irrigation / වාරිමාර්ග</strong>
                            <span>0112 488 505</span>
                        </div>
                    </div>
                </div>

              </div>
              <div className="image-column">
                {/* New image: Umbrella/Protection theme */}
                <div className="image-card" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1519692933481-e162a57d6721?auto=format&fit=crop&w=1600&q=80)' }} />
              </div>
            </div>
          </div>
        </section>

        <section className="pro-section thanks-section">
          <div className="container">
            <div className="content-wrapper">
              <div className="text-column">
                <div className="badge success">Community</div>
                <h2>Powered by You</h2>
                <p>
                  A heartfelt gratitude to the teachers, students, and contributors who provided 
                  the past papers and notes. Your generosity is lighting up thousands of futures.
                </p>
              </div>
              <div className="image-column">
                <div className="image-card" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=1600&q=80)' }} />
              </div>
            </div>
          </div>
        </section>

        <style jsx>{`
            .pro-section {
              padding: 6rem 0;
              position: relative;
              overflow: hidden;
            }

            .container {
              max-width: 1200px;
              margin: 0 auto;
              padding: 0 2rem;
            }

            .content-wrapper {
              display: grid;
              grid-template-columns: 1fr 1fr;
              gap: 4rem;
              align-items: center;
            }

            .content-wrapper.reverse .text-column {
              order: 2;
            }
            .content-wrapper.reverse .image-column {
              order: 1;
            }

            /* Themes */
            .download-section { background: #ffffff; }
            .safe-section { background: #f8fafc; }
            .thanks-section { background: #ffffff; }

            /* Text Styles */
            .text-column {
              display: flex;
              flex-direction: column;
              gap: 1.5rem;
            }

            .badge {
              display: inline-block;
              padding: 0.5rem 1rem;
              border-radius: 50px;
              font-size: 0.875rem;
              font-weight: 700;
              text-transform: uppercase;
              letter-spacing: 0.05em;
              background: #f3f4f6;
              color: #4b5563;
              align-self: flex-start;
            }

            .badge.warning { background: #fef2f2; color: #991b1b; }
            .badge.success { background: #f0fdf4; color: #166534; }

            h2 {
              font-size: 3rem;
              font-weight: 800;
              line-height: 1.1;
              color: #111827;
              letter-spacing: -0.02em;
            }

            p {
              font-size: 1.25rem;
              line-height: 1.6;
              color: #6b7280;
            }

            /* Feature List */
            .feature-list {
              list-style: none;
              padding: 0;
              margin: 1rem 0 0 0;
              display: flex;
              flex-direction: column;
              gap: 1rem;
            }

            .feature-list li {
              font-size: 1.1rem;
              color: #374151;
              font-weight: 500;
              display: flex;
              align-items: center;
              gap: 0.75rem;
            }

            /* Safety Box */
            .safety-box {
              background: #fee2e2;
              border-left: 4px solid #ef4444;
              padding: 1rem;
              border-radius: 0 8px 8px 0;
              margin-top: 1rem;
            }
            .safety-box p { font-size: 1rem; color: #7f1d1d; margin: 0; }

            /* Emergency Grid */
            .emergency-grid {
                display: grid;
                grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
                gap: 1rem;
                margin-top: 2rem;
            }
            
            .emergency-card {
                background: white;
                padding: 0.75rem 1rem;
                border-radius: 12px;
                display: flex;
                align-items: center;
                gap: 0.75rem;
                box-shadow: 0 2px 4px rgba(0,0,0,0.05);
                border: 1px solid rgba(0,0,0,0.05);
            }
            
            .em-icon {
                font-size: 1.5rem;
            }
            
            .em-details {
                display: flex;
                flex-direction: column;
            }
            
            .em-details strong {
                font-size: 0.8rem;
                color: #4b5563;
                text-transform: uppercase;
                letter-spacing: 0.05em;
            }
            
            .em-details span {
                font-size: 0.95rem;
                font-weight: 700;
                color: #ef4444;
            }

            /* Images */
            .image-column {
              position: relative;
            }

            .image-card {
              width: 100%;
              aspect-ratio: 4/3;
              border-radius: 24px;
              background-size: cover;
              background-position: center;
              box-shadow: 
                0 20px 25px -5px rgba(0, 0, 0, 0.1), 
                0 10px 10px -5px rgba(0, 0, 0, 0.04);
              transition: transform 0.3s ease;
            }

            .image-card:hover {
              transform: translateY(-5px);
            }

            /* Mobile */
            @media (max-width: 768px) {
              .pro-section { padding: 4rem 0; }
              
              .content-wrapper {
                grid-template-columns: 1fr;
                gap: 3rem;
              }

              .content-wrapper.reverse .text-column { order: 1; }
              .content-wrapper.reverse .image-column { order: 2; }

              h2 { font-size: 2.25rem; }
              p { font-size: 1.1rem; }
            }
          `}</style>

        <section className="pro-section disclaimer-section" style={{ background: '#fff', padding: '4rem 0', borderTop: '1px solid #eee' }}>
          <div className="container">
            <div className="disclaimer-box" style={{ 
                background: '#f9fafb', 
                padding: '2rem', 
                borderRadius: '16px', 
                border: '1px solid #e5e7eb',
                textAlign: 'center',
                maxWidth: '800px',
                margin: '0 auto'
            }}>
              <h3 style={{ fontSize: '1.2rem', color: '#374151', marginBottom: '1rem' }}>⚠️ Disclaimer</h3>
              <p style={{ fontSize: '1rem', color: '#6b7280', margin: 0 }}>
                The documents, papers, and short notes available on this website are sent by students and teachers from all over Sri Lanka. 
                We do not claim ownership of any of these materials. All rights belong to their respective owners and authors.
              </p>
            </div>
          </div>
        </section>

        <footer className="site-footer">
          <p>© 2025 EduRelief SL. Built with ❤️ for our students.</p>
          <p style={{ marginTop: '0.5rem', fontSize: '0.85rem', color: 'rgba(255,255,255,0.4)' }}>
            Contact: 076 101 3045 (Teshan)
          </p>
        </footer>
      </div>
    </>
  );
}
