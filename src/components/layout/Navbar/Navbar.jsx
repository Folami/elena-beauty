import { useState, useEffect } from 'react'
import {
  FacebookIcon,
  InstagramIcon,
  TiktokIcon,
  SnapchatIcon,
  PhoneIcon,
  MapPinIcon,
  CalendarIcon,
  GiftIcon,
  ChevronDownIcon,
} from '../../ui/SocialIcons/SocialIcons'
import logoImg from '../../../assets/Logo-Img.png'
import './Navbar.css'

const Navbar = ({ onOpenBooking, onOpenGift, onOpenMap, onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [isContactOpen, setIsContactOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className={`navbar-wrapper ${scrolled ? 'scrolled' : ''}`}>
      {/* Upper Bar -> Header */}
      <header className="navbar-upper">
        <div className="navbar-container upper-container">
          <div className="upper-left social-links">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
            >
              <FacebookIcon />
            </a>
            <span className="separator">|</span>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <InstagramIcon />
            </a>
            <span className="separator">|</span>
            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noreferrer"
              aria-label="TikTok"
            >
              <TiktokIcon />
            </a>
            <span className="separator">|</span>
            <a
              href="https://snapchat.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Snapchat"
            >
              <SnapchatIcon />
            </a>
          </div>
          <div className="upper-right contact-actions">
            <div
              className="contact-dropdown"
              onMouseEnter={() => setIsContactOpen(true)}
              onMouseLeave={() => setIsContactOpen(false)}
            >
              <span className="contact-trigger">
                Contact Us <ChevronDownIcon />
              </span>
              <div className={`contact-menu ${isContactOpen ? 'show' : ''}`}>
                <a href="tel:08149301253" className="contact-item">
                  <PhoneIcon /> 08149301253
                </a>
                <div onClick={onOpenMap} className="contact-item clickable">
                  <MapPinIcon /> 8 Jokit plaza, Old Olowora Road, Magodo Phase
                  1, Isheri, Lagos, Nigeria
                </div>
              </div>
            </div>
            <span className="separator">|</span>
            <span onClick={onOpenBooking} className="clickable action-item">
              <CalendarIcon /> Book Now
            </span>
            <span className="separator">|</span>
            <span
              onClick={onOpenGift}
              className="gift-link clickable action-item"
            >
              <GiftIcon /> Buy Gift Certificate
            </span>
          </div>
        </div>
      </header>

      {/* Lower Bar -> Navbar */}
      <nav className="navbar-lower">
        <div className="navbar-container lower-container">
          {/* Logo on the Left */}
          <div className="lower-left logo-container">
            <button
              onClick={() => {
                onNavigate('home')
                setIsMenuOpen(false)
              }}
              className="logo-link"
              aria-label="Elena Beauty Home"
            >
              <img src={logoImg} alt="Elena Beauty Logo" className="logo-img" />
            </button>
          </div>

          <div
            className="mobile-menu-icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? '✕' : '☰'}
          </div>

          {/* Links on the Right */}
          <div className={`lower-right nav-links ${isMenuOpen ? 'open' : ''}`}>
            <button
              className="nav-link-btn"
              onClick={() => {
                onNavigate('home')
                setIsMenuOpen(false)
              }}
            >
              Home
            </button>
            <button
              className="nav-link-btn"
              onClick={() => {
                onNavigate('services')
                setIsMenuOpen(false)
              }}
            >
              Services
            </button>
            <button
              className="nav-link-btn"
              onClick={() => {
                onNavigate('skincare')
                setIsMenuOpen(false)
              }}
            >
              Skincare Products
            </button>
            <button
              className="nav-link-btn"
              onClick={() => {
                onNavigate('specials')
                setIsMenuOpen(false)
              }}
            >
              Specials
            </button>
            <button
              className="nav-link-btn"
              onClick={() => {
                onNavigate('couples')
                setIsMenuOpen(false)
              }}
            >
              Couples
            </button>
            <button
              className="nav-link-btn"
              onClick={() => {
                onNavigate('memberships')
                setIsMenuOpen(false)
              }}
            >
              Membership Subscriptions
            </button>
            <button
              className="nav-link-btn"
              onClick={() => {
                onNavigate('about')
                setIsMenuOpen(false)
              }}
            >
              About Us
            </button>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
