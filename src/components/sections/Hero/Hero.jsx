import { useEffect, useRef } from 'react'
import Slider from 'react-slick'
import './Hero.css'
import './Hero-gift.css'
import ExclusiveFeatures from '../ExclusiveFeatures/ExclusiveFeatures'

// Slick styles are already imported in App.jsx

const Hero = ({ onOpenBooking, onNavigate, onOpenGift }) => {
  const heroImageRef = useRef(null)

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    fade: true,
    cssEase: 'linear',
    pauseOnHover: false,
    swipe: true,
    swipeToSlide: true,
    touchMove: true,
    touchThreshold: 10
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      if (heroImageRef.current) {
        heroImageRef.current.style.transform = `translateY(${scrollY * 0.3}px)`
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section id="home" className="hero-section">
      <Slider {...settings} className="hero-slider">
        {/* Slide 1: Present Hero */}
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

        {/* Slide 2: Exclusive Features */}
        <div className="hero-slide">
          <div className="hero-exclusive-container">
            <ExclusiveFeatures onOpenBooking={onOpenBooking} isHeroSlide={true} />
          </div>
        </div>

        {/* Slide 3: Gift Certificates */}
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
      </Slider>

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
