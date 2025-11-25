import { useState, useEffect } from 'react'
import './App.css'

// Countdown Component
function Countdown() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const endDate = new Date('December 25, 2025 00:00:00').getTime();
      const now = new Date().getTime();
      const difference = endDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="countdown-container">
      <span className="countdown-label">Challenge ends in:</span>
      <div className="countdown-timer">
        <span className="countdown-value">{timeLeft.days}d</span>
        <span className="countdown-value">{timeLeft.hours}h</span>
        <span className="countdown-value">{timeLeft.minutes}m</span>
        <span className="countdown-value">{timeLeft.seconds}s</span>
      </div>
    </div>
  );
}

// Home Page Component
function HomePage({ onNavigate }) {
  return (
    <div className="home-container">
      <div className="hero">
        <img src="/linkimg.png" alt="Christmas Challenge" className="hero-image" />
        <div className="hero-countdown">
          <Countdown />
        </div>
      </div>

      <div className="info-card">
        <div className="info-card-icon">🏆</div>
        <h3 className="info-card-title">Challenge</h3>
        <p className="info-card-content">
          Top 3 employees with the MOST positive customer reviews win
        </p>
      </div>

      <div className="info-card">
        <div className="info-card-icon">🎁</div>
        <h3 className="info-card-title">Prizes</h3>
        <p className="info-card-content">
          Check out what you could win!
        </p>
        <button className="details-button" onClick={() => onNavigate('prizes')}>
          See Prizes
        </button>
      </div>

      <div className="info-card">
        <div className="info-card-icon">📝</div>
        <h3 className="info-card-title">How to win</h3>
        <p className="info-card-content">
          Deliver exceptional service and encourage customer feedback
        </p>
        <button className="details-button" onClick={() => onNavigate('howToWin')}>
          See Details
        </button>
      </div>

      <div className="cta">
        <h3 className="cta-title">Call to action:</h3>
        <p className="cta-text">Start collecting positive reviews today!</p>
      </div>
    </div>
  )
}

// How to Win Page Component
function HowToWinPage() {
  return (
    <div className="how-to-win-container">
      <h1 className="page-title">How to Win</h1>

      <ul className="steps-list">
        <li className="step-item">
          <div className="step-number">STEP 1</div>
          <h3 className="step-title">Deliver Exceptional Service</h3>
          <p className="step-description">
            Go above and beyond for every customer. Be professional, courteous, and handle
            packages with care. Your service quality is the foundation of positive reviews.
          </p>
        </li>

        <li className="step-item">
          <div className="step-number">STEP 2</div>
          <h3 className="step-title">Package Placement</h3>
          <p className="step-description">
            Place packages at customers' front door unless they tell you otherwise in the notes section.
            Always check for delivery instructions before leaving the package.
          </p>
        </li>

        <li className="step-item">
          <div className="step-number">STEP 3</div>
          <h3 className="step-title">Photo Documentation</h3>
          <p className="step-description">
            Take a clear photo of where you left the package. Do NOT take pictures of any sensitive
            information such as house numbers, labels, or people.
          </p>
        </li>

        <li className="step-item">
          <div className="step-number">STEP 4</div>
          <h3 className="step-title">Build Customer Connections</h3>
          <p className="step-description">
            Take a moment to greet customers warmly and ensure they're satisfied.
            A friendly interaction can turn a routine delivery into a memorable experience.
          </p>
        </li>

        <li className="step-item">
          <div className="step-number">STEP 5</div>
          <h3 className="step-title">Encourage Feedback</h3>
          <p className="step-description">
            Politely let customers know that their feedback matters. You can mention that
            reviews help us improve our service. Make it easy for them to share their experience.
          </p>
        </li>

        <li className="step-item">
          <div className="step-number">STEP 6</div>
          <h3 className="step-title">Stay Consistent</h3>
          <p className="step-description">
            Excellence is a habit! Maintain high standards every day, with every delivery.
            The more positive experiences you create, the more reviews you'll collect.
          </p>
        </li>
      </ul>
    </div>
  )
}

// Prizes Page Component
function PrizesPage() {
  return (
    <div className="prizes-container">
      <Countdown />
      <h1 className="page-title">The Prizes</h1>

      <div className="prize-card first-place">
        <div className="prize-place">1ST PLACE</div>
        <div className="prize-icon">🥇</div>
        <h2 className="prize-title">To Be Announced</h2>
        <p className="prize-description">
          Stay tuned! The 1st place prize will be revealed soon.
        </p>
      </div>

      <div className="prize-card second-place">
        <div className="prize-place">2ND PLACE</div>
        <div className="prize-icon">🥈</div>
        <h2 className="prize-title">Waterproof FedEx Jacket</h2>

        <div className="jacket-image">
          <img src="/fedexjacket.jpg" alt="FedEx Waterproof Jacket" className="jacket-img" />
        </div>

        <p className="prize-description">
          Win this premium waterproof FedEx jacket - perfect for staying dry and
          comfortable during deliveries, rain or shine!
        </p>

        <ul className="prize-features">
          <li className="prize-feature">100% Waterproof Material</li>
          <li className="prize-feature">Official FedEx Branding</li>
          <li className="prize-feature">Professional Design</li>
          <li className="prize-feature">Durable & Long-lasting</li>
          <li className="prize-feature">Perfect for All Weather Conditions</li>
          <li className="prize-feature">Comfortable Fit</li>
        </ul>
      </div>

      <div className="prize-card third-place">
        <div className="prize-place">3RD PLACE</div>
        <div className="prize-icon">🥉</div>
        <h2 className="prize-title">To Be Announced</h2>
        <p className="prize-description">
          Stay tuned! The 3rd place prize will be revealed soon.
        </p>
      </div>

      <div className="info-card">
        <h3 className="info-card-title">Winner Announcement</h3>
        <p className="info-card-content">
          The top 3 employees with the most positive customer reviews by the end of the
          challenge period will be announced as winners. Keep up the great work!
        </p>
      </div>

      <div className="info-card">
        <h3 className="info-card-title">Why This Matters</h3>
        <p className="info-card-content">
          Every positive review reflects your dedication and professionalism.
          Not only are you competing for amazing prizes, but you're also building
          a reputation for excellence that benefits everyone at 742 Logistics.
        </p>
      </div>
    </div>
  )
}

// Main App Component
function App() {
  const [currentPage, setCurrentPage] = useState('home')

  return (
    <div className="app-container">
      {/* Header */}
      <header className="app-header">
        <img src="/logo.png" alt="742 Logistics" className="logo" />
      </header>

      {/* Content Area */}
      <main className="app-content">
        {currentPage === 'home' && <HomePage onNavigate={setCurrentPage} />}
        {currentPage === 'howToWin' && <HowToWinPage />}
        {currentPage === 'prizes' && <PrizesPage />}
      </main>

      {/* Bottom Navigation */}
      <nav className="bottom-nav">
        <button
          className={`nav-button ${currentPage === 'home' ? 'active' : ''}`}
          onClick={() => setCurrentPage('home')}
        >
          <span className="nav-icon">🏠</span>
          <span>Home</span>
        </button>
        <button
          className={`nav-button ${currentPage === 'howToWin' ? 'active' : ''}`}
          onClick={() => setCurrentPage('howToWin')}
        >
          <span className="nav-icon">📋</span>
          <span>How to Win</span>
        </button>
        <button
          className={`nav-button ${currentPage === 'prizes' ? 'active' : ''}`}
          onClick={() => setCurrentPage('prizes')}
        >
          <span className="nav-icon">🎁</span>
          <span>Prizes</span>
        </button>
      </nav>
    </div>
  )
}

export default App
