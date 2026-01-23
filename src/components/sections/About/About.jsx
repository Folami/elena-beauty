import { useState } from 'react'
import ceo2 from '../../../assets/ceo-2.jpg'
import './About.css'
import SectionHero from '../SectionHero/SectionHero'

const About = ({ onOpenBooking }) => {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div id="about" className="about-page" style={{ width: '100%' }}>
      <SectionHero
        title="Intentional Beauty Meets Elegance"
        subtitle="About Us"
        description="At Elena Beauty Skincare, our philosophy is that skincare should be a ritual — personalized, thoughtful, and transformative."
        ctaText="Our Philosophy"
        onOpenBooking={onOpenBooking}
        showButtons={false}
      />
      <section
        id="about-content"
        className="section about-section"
        style={{ width: '100%' }}
      >
        <div className="about-container">
          <div className="ceo-photos">
            <div className="about-image ceo-small" style={{ height: '350px' }}>
              <img src={ceo2} alt="Elena CEO portrait" />
            </div>
          </div>
          <div className="about-text-content">
            <p className="ceo-paragraph">
              Elena, our founder and CEO, is passionate about empowering women
              to be intentional about their beauty. Through expert skincare
              guidance and thoughtful treatments, she inspires clients to
              prioritize self-care and confidence as part of their everyday
              routine.
            </p>
          </div>
          <div className="about-image" style={{ height: '350px' }}>
            {/* Placeholder for about image */}
            <img
              src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=2070&auto=format&fit=crop"
              alt="Skincare professional"
            />
          </div>
          <div className="about-text-content">
            <p>
              At Elena Beauty Skincare, we believe that healthy skin is the
              foundation of confidence. With a personalized approach to every
              treatment, we are dedicated to helping you achieve your skincare
              goals using the highest quality products and techniques.
            </p>
            {isExpanded && (
              <>
                <p>
                  Our philosophy is rooted in the belief that skincare should be
                  a ritual, not a routine. We invite you to experience the
                  transformative power of professional care.
                </p>
                <div className="signature">Elena Beauty</div>
              </>
            )}
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              style={{
                background: 'transparent',
                border: 'none',
                color: '#e0218a',
                cursor: 'pointer',
                fontWeight: '600',
                marginTop: '1rem',
                padding: '0.5rem 0',
                fontSize: '1rem',
                textDecoration: 'underline',
              }}
            >
              {isExpanded ? 'Read Less' : 'Read More'}
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
