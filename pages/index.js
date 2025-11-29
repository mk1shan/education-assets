import Head from "next/head";
import Link from "next/link";

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
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <span className="brand-name">EduRelief SL</span>
            </div>
            <div className="nav-links">
              <a href="#" className="nav-link active">Home</a>
              <a href="#grades" className="nav-link">Grades</a>
            </div>
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
            <h1>Keep learning,<br/>come rain or shine.</h1>
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
                <div className="safety-box">
                  <p><strong>⚠️ Emergency Note:</strong> Please follow official weather guidelines and help your neighbors.</p>
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

        <footer className="site-footer">
          <p>© 2025 EduRelief SL. Built with ❤️ for our students.</p>
        </footer>
      </div>
    </>
  );
}
