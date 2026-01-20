import React from 'react'
import './ExclusiveFeatures.css'
import CountdownTimer from '../../ui/CountdownTimer/CountdownTimer'
import { specialsData } from '../Specials/Specials'

const ExclusiveFeatures = ({ onOpenBooking }) => {
  // Find the Valentine's Special from the shared data
  const valentineSpecial = specialsData.find(
    (s) => s.title === "Valentine's Special",
  )

  if (!valentineSpecial) return null

  return (
    <section className="exclusive-features-section">
      <div className="exclusive-container">
        <h2 className="section-title">Exclusive Feature</h2>
        <p className="section-subtitle">Limited Time Offers</p>

        <div className="exclusive-card">
          <div className="exclusive-image-wrapper">
            <img
              src={valentineSpecial.image}
              alt={valentineSpecial.title}
              className="exclusive-image"
            />
            <div className="exclusive-badge">
              Save ₦
              {(
                valentineSpecial.originalPrice - valentineSpecial.specialPrice
              ).toLocaleString()}
            </div>
          </div>
          <div className="exclusive-content">
            <h3>{valentineSpecial.title}</h3>
            <CountdownTimer />
            <p className="exclusive-description">
              {valentineSpecial.description}
            </p>
            <div className="exclusive-pricing">
              <span className="original-price">
                ₦{valentineSpecial.originalPrice.toLocaleString()}
              </span>
              <span className="special-price">
                ₦{valentineSpecial.specialPrice.toLocaleString()}
              </span>
            </div>
            <button
              className="book-exclusive-btn"
              onClick={() => onOpenBooking(valentineSpecial.title)}
            >
              Book This Special
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ExclusiveFeatures
