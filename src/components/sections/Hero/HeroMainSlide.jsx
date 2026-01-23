const HeroMainSlide = ({ onNavigate, onOpenBooking, heroImageRef }) => {
  return (
    <div className="hero-slide">
      <div className="hero-image-container">
        <img
          ref={heroImageRef}
          className="hero-image"
          src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2070&auto=format&fit=crop"
          alt="Skincare treatment"
        />
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <span className="hero-subtitle">Elena Beauty & Skincare</span>
          <h1>Reveal Your Natural Glow</h1>
          <p>
            Premium skincare treatments designed to rejuvenate your skin and
            refresh your spirit.
          </p>

          <div className="hero-buttons">
            <button
              className="primary-btn"
              onClick={() => onNavigate && onNavigate('skincare')}
            >
              Shop for Delight
            </button>
            <button onClick={onOpenBooking} className="secondary-btn">
              Book Appointment
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroMainSlide
