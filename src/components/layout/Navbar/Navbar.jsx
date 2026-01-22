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
import { serviceData } from '../../../data/serviceData'

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
      <style>{`
        .nav-links-inner {
          display: flex;
          gap: 2rem;
          align-items: center;
        }
        
        .services-dropdown {
          position: relative;
          height: 100%;
          display: flex;
          align-items: center;
        }

        .services-menu {
          position: absolute;
          top: 100%;
          left: 50%;
          transform: translateX(-50%);
          background: white;
          min-width: 220px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          border-radius: 12px;
          padding: 0.5rem;
          opacity: 0;
          visibility: hidden;
          transition: all 0.3s ease;
          z-index: 1000;
        }

        .services-dropdown:hover .services-menu {
          opacity: 1;
          visibility: visible;
          top: 100%;
        }

        .services-item {
          padding: 0.8rem 1.2rem;
          color: var(--text-dark);
          font-size: 0.9rem;
          border-radius: 8px;
          transition: all 0.2s ease;
          cursor: pointer;
          white-space: nowrap;
          text-align: center;
        }

        .services-item:hover {
          background: var(--primary-light);
          color: var(--primary);
        }
      `}</style>
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

          {/* Links and Mobile Drawer */}
          <div className={`lower-right nav-links ${isMenuOpen ? 'open' : ''}`}>
            <div className="nav-links-inner">
              <button
                className="nav-link-btn"
                onClick={() => {
                  onNavigate('home')
                  setIsMenuOpen(false)
                }}
              >
                Home
              </button>
              <div className="services-dropdown">
                <button
                  className="nav-link-btn"
                  onClick={() => {
                    onNavigate('services')
                    setIsMenuOpen(false)
                  }}
                >
                  Services <ChevronDownIcon />
                </button>
                <div className="services-menu">
                  {serviceData.map((service, index) => (
                    <div
                      key={index}
                      className="services-item"
                      onClick={() => {
                        onNavigate('services')
                        window.location.hash = service.category
                        setIsMenuOpen(false)
                      }}
                    >
                      {service.category}
                    </div>
                  ))}
                </div>
              </div>
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
        </div>
      </nav>
    </div>
  )
}

export default Navbar
