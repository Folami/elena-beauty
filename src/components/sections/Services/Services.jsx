import { useState, useEffect } from 'react'
import './Services.css'
import SectionHero from '../SectionHero/SectionHero'
import { serviceData } from '../../../data/serviceData'

const Services = ({ onOpenBooking }) => {
  const [selectedCategory, setSelectedCategory] = useState('All')

  useEffect(() => {
    const header = document.querySelector('.category-filters')
    const sticky = header.offsetTop

    const handleScroll = () => {
      if (window.pageYOffset > sticky) {
        header.classList.add('sticky')
      } else {
        header.classList.remove('sticky')
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const categories = ['All', ...serviceData.map((cat) => cat.category)]

  const filteredServices =
    selectedCategory === 'All'
      ? serviceData
      : serviceData.filter((cat) => cat.category === selectedCategory)

  return (
    <div className="services-page">
      <style>{`
        .category-filter {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 1rem;
          margin-bottom: 2rem;
          position: sticky;
          top: 70px;
          z-index: 90;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(8px);
          padding: 1rem 0;
          box-shadow: 0 4px 20px rgba(0,0,0,0.05);
        }
        
        .filter-btn {
          padding: 0.8rem 1.5rem;
          border: 2px solid var(--primary);
          background: transparent;
          color: var(--primary);
          border-radius: 50px;
          cursor: pointer;
          font-weight: 600;
          transition: all 0.3s ease;
          font-size: 1rem;
          white-space: nowrap;
        }
        
        .filter-btn:hover,
        .filter-btn.active {
          background: var(--primary);
          color: white;
        }

        @media (max-width: 768px) {
          .category-filter {
            justify-content: flex-start;
            flex-wrap: nowrap;
            overflow-x: auto;
            padding: 1rem 5%;
            gap: 0.8rem;
            margin-left: -5%;
            width: 110%;
            -webkit-overflow-scrolling: touch;
            scrollbar-width: none;
          }
          .category-filter::-webkit-scrollbar { display: none; }
          .filter-btn {
            padding: 0.6rem 1.2rem;
            font-size: 0.9rem;
            flex: 0 0 auto;
          }
        }
      `}</style>
      <SectionHero
        title="Curated Treatments"
        subtitle="Our Menu"
        description="Explore our full range of treatments designed to rejuvenate and restore your skin."
        ctaText="Explore Treatments"
        onOpenBooking={onOpenBooking}
        showButtons={false}
      />

      <div className="category-filters">
        <div className="category-list">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`category-chip ${
                selectedCategory === cat ? 'active' : ''
              }`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <section id="services" className="section services">
        <div className="services-container">
          {filteredServices.map((cat) => (
            <div key={cat.category} className="service-category">
              {selectedCategory === 'All' && (
                <h3 className="category-title">{cat.category}</h3>
              )}

              <div className="services-grid">
                {cat.items.map((s, idx) => (
                  <div key={idx} className="service-card">
                    <div className="service-image">
                      <img src={s.image} alt={s.title} />
                    </div>

                    <div className="service-content">
                      <h4 className="service-title">{s.title}</h4>

                      {s.price && (
                        <div className="service-price">
                          ₦{s.price.toLocaleString()}
                        </div>
                      )}

                      {s.prices && (
                        <div className="service-prices">
                          {Object.entries(s.prices).map(([k, v]) => (
                            <div key={k} className="service-price-line">
                              {k}: ₦{v.toLocaleString()}
                            </div>
                          ))}
                        </div>
                      )}

                      {s.description && (
                        <p className="service-description">{s.description}</p>
                      )}

                      <button
                        className="service-book-btn"
                        onClick={() => onOpenBooking(s.title)}
                      >
                        Book Now
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Services
