import { useEffect, useRef } from 'react'
import Slider from 'react-slick'
import './Hero.css'
import './Hero-gift.css'
import ExclusiveFeatures from '../ExclusiveFeatures/ExclusiveFeatures'
import HeroMainSlide from './HeroMainSlide'
import HeroGiftSlide from './HeroGiftSlide'

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
        {/* Slide 1: Main Hero */}
        <HeroMainSlide 
          onNavigate={onNavigate}
          onOpenBooking={onOpenBooking}
          heroImageRef={heroImageRef}
        />

        {/* Slide 2: Exclusive Features */}
        <div className="hero-slide">
          <div className="hero-exclusive-container">
            <ExclusiveFeatures onOpenBooking={onOpenBooking} isHeroSlide={true} />
          </div>
        </div>

        {/* Slide 3: Gift Certificates */}
        <HeroGiftSlide onOpenGift={onOpenGift} />
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
