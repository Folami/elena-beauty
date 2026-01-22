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

  useEffect(() => {
    const checkHash = () => {
      const hash = decodeURIComponent(window.location.hash.substring(1))
      const availableCategories = serviceData.map((cat) => cat.category)
      if (hash && availableCategories.includes(hash)) {
        setSelectedCategory(hash)
      }
    }

    checkHash()
    window.addEventListener('hashchange', checkHash)
    return () => window.removeEventListener('hashchange', checkHash)
  }, [])

  const categories = ['All', ...serviceData.map((cat) => cat.category)]

  const filteredServices =
    selectedCategory === 'All'
      ? serviceData
      : serviceData.filter((cat) => cat.category === selectedCategory)

  return (
    <div className="services-page">
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .services-container {
          animation: fadeInUp 0.5s ease-out;
        }

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

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 2rem;
          margin-bottom: 3rem;
        }

        .service-card {
          background: white;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 5px 15px rgba(0,0,0,0.05);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          display: flex;
          flex-direction: column;
          border: 1px solid #eee;
        }

        .service-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(0,0,0,0.1);
        }

        .service-image {
          width: 100%;
          height: 250px;
          object-fit: cover;
        }

        .service-content {
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        .service-title {
          font-size: 1.4rem;
          color: var(--primary-dark);
          margin-bottom: 0.8rem;
          font-family: var(--font-heading);
        }

        .service-description {
          color: var(--text-light);
          font-size: 0.95rem;
          line-height: 1.6;
          margin-bottom: 1.5rem;
          flex-grow: 1;
        }

        .service-price {
          font-size: 1.8rem;
          font-weight: 700;
          color: var(--primary);
          margin-bottom: 0;
        }

        .service-benefits {
          text-align: left;
          margin-bottom: 1.5rem;
        }

        .service-book-btn {
          background: var(--primary);
          color: white;
          border: none;
          padding: 0.8rem 1.8rem;
          border-radius: 50px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          text-transform: uppercase;
          font-size: 0.85rem;
          letter-spacing: 0.5px;
          width: auto;
        }

        .service-book-btn:hover {
          background: var(--primary-dark);
          transform: scale(1.05);
          box-shadow: 0 6px 15px rgba(156, 39, 176, 0.4);
        }

        .service-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: auto;
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
        <div className="services-container" key={selectedCategory}>
          {filteredServices.map((cat) => (
            <div key={cat.category} className="service-category">
              {selectedCategory === 'All' && (
                <h3 className="category-title">{cat.category}</h3>
              )}

              <div className="services-grid">
                {cat.items.map((s, idx) => (
                  <div key={idx} className="service-card">
                    <img
                      src={s.image}
                      alt={s.title}
                      className="service-image"
                    />

                    <div className="service-content">
                      <h4 className="service-title">{s.title}</h4>

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

                      {s.benefits && (
                        <div className="service-benefits">
                          {s.benefits.map((benefit, i) => (
                            <span key={i} className="benefit-tag">
                              ✓ {benefit}
                            </span>
                          ))}
                        </div>
                      )}

                      <div className="service-footer">
                        {s.price ? (
                          <div className="service-price">
                            ₦{s.price.toLocaleString()}
                          </div>
                        ) : (
                          <div></div>
                        )}
                        <button
                          className="service-book-btn"
                          onClick={() => onOpenBooking(s.title)}
                        >
                          Book Now
                        </button>
                      </div>
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
