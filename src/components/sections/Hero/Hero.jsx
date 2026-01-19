import { useEffect, useRef } from 'react'
import './Hero.css'

const Hero = ({ onOpenBooking, onNavigate }) => {
  const heroImageRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      // Apply a parallax effect by moving the image down as the user scrolls down, creating a depth effect.
      if (heroImageRef.current) {
        heroImageRef.current.style.transform = `translateY(${scrollY * 0.3}px)`
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <section id="home" className="hero-section">
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

      <div
        className="scroll-down-indicator"
        onClick={() =>
          window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })
        }
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </section>
  )
}

export default Hero
