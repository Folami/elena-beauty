import { useState } from 'react'
import './App.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Navbar from './components/layout/Navbar/Navbar'
import Hero from './components/sections/Hero/Hero'
import Services from './components/sections/Services/Services'
import SkincareProducts from './components/sections/SkincareProducts/SkincareProducts'
import ExclusiveFeatures from './components/sections/ExclusiveFeatures/ExclusiveFeatures'
import About from './components/sections/About/About'
import Reviews from './components/sections/Reviews/Reviews'
import Specials from './components/sections/Specials/Specials'
import Couples from './components/sections/Couples/Couples'
import Memberships from './components/sections/Memberships/Memberships'
import Footer from './components/layout/Footer/Footer'
import BookingModal from './components/modals/BookingModal/BookingModal'
import MapModal from './components/modals/MapModal/MapModal'
import BackToTop from './components/ui/BackToTop/BackToTop'
import GiftCertificateModal from './components/modals/GiftCertificateModal/GiftCertificateModal'

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isMapOpen, setIsMapOpen] = useState(false)
  const [isGiftModalOpen, setIsGiftModalOpen] = useState(false)
  const [currentPage, setCurrentPage] = useState('home')
  const [bookingService, setBookingService] = useState(null)

  // Handle navigation
  const handleNavigate = (page) => {
    if (page === 'about' || page === 'reviews') {
      setCurrentPage('home')
      setTimeout(() => {
        const element = document.getElementById(page)
        if (element) element.scrollIntoView({ behavior: 'smooth' })
      }, 100)
      return
    }
    setCurrentPage(page)
    window.scrollTo(0, 0)
  }

  const handleOpenBooking = (service) => {
    setBookingService(typeof service === 'string' ? service : null)
    setIsModalOpen(true)
  }

  const handleCloseBooking = () => {
    setIsModalOpen(false)
    setBookingService(null)
  }

  return (
    <div className="app">
      <Navbar
        onOpenBooking={handleOpenBooking}
        onOpenMap={() => setIsMapOpen(true)}
        onOpenGift={() => setIsGiftModalOpen(true)}
        onNavigate={handleNavigate}
        currentPage={currentPage}
      />

      {currentPage === 'home' && (
        <main
          className="home-page"
          style={{
            width: '100%',
            maxWidth: '100vw',
            padding: 0,
            margin: 0,
            overflowX: 'hidden',
          }}
        >
          <Hero 
            onOpenBooking={handleOpenBooking} 
            onNavigate={handleNavigate} 
            onOpenGift={() => setIsGiftModalOpen(true)}
          />
          <About onOpenBooking={handleOpenBooking} />
          <div style={{ width: '100%' }}>
            <Reviews />
          </div>
        </main>
      )}

      {currentPage === 'skincare' && <SkincareProducts />}
      {currentPage === 'services' && (
        <Services onOpenBooking={handleOpenBooking} />
      )}
      {currentPage === 'specials' && (
        <Specials onOpenBooking={handleOpenBooking} />
      )}
      {currentPage === 'couples' && (
        <Couples onOpenBooking={handleOpenBooking} />
      )}
      {currentPage === 'memberships' && (
        <Memberships onOpenBooking={handleOpenBooking} />
      )}

      <div style={{ width: '100%' }}>
        <Footer />
      </div>
      <BackToTop />
      <button
        className="mobile-sticky-book-btn"
        onClick={() => handleOpenBooking()}
      >
        Book Now
      </button>
      <BookingModal
        isOpen={isModalOpen}
        onClose={handleCloseBooking}
        initialService={bookingService}
      />
      <MapModal isOpen={isMapOpen} onClose={() => setIsMapOpen(false)} />
      <GiftCertificateModal
        key={isGiftModalOpen ? 'open' : 'closed'}
        isOpen={isGiftModalOpen}
        onClose={() => setIsGiftModalOpen(false)}
      />
    </div>
  )
}

export default App
