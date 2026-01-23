const HeroGiftSlide = ({ onOpenGift }) => {
  return (
    <div className="hero-slide">
      <div className="hero-image-container hero-gift-container">
        <img
          className="hero-image"
          src="https://images.unsplash.com/photo-1513785033490-f0b663a547e3?q=80&w=2070&auto=format&fit=crop"
          alt="Gift giving"
        />
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <span className="hero-subtitle">Perfect Gift</span>
          <h1>Gift the Glow</h1>
          <p>
            Surprise someone special with the gift of beauty and self-care.
            Choose from flexible amounts or specific treatments.
          </p>
          
          <div className="gift-packages">
            <div className="gift-package-item">
              <span className="package-icon">💰</span>
              <h3>Custom Amount</h3>
              <p>Starting from ₦5,000</p>
            </div>
            <div className="gift-package-item">
              <span className="package-icon">✨</span>
              <h3>Spa Treatments</h3>
              <p>All services available</p>
            </div>
            <div className="gift-package-item">
              <span className="package-icon">🎁</span>
              <h3>Special Packages</h3>
              <p>Curated experiences</p>
            </div>
          </div>

          <div className="hero-buttons">
            <button className="primary-btn" onClick={onOpenGift}>
              Purchase Gift Certificate
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroGiftSlide
