import { useState } from 'react'
import './Services.css'
import SectionHero from '../SectionHero/SectionHero'
import classicLashes from '../../../assets/classic-lashes.jpg'
import hybridLashes from '../../../assets/hybrid-lashes.jpg'
import volumeLashes from '../../../assets/volume-lashes.jpg'
import megaVolumeLashes from '../../../assets/mega-volume-lashes.jpg'
import browLamination from '../../../assets/brow-lamination.jpg'
import browTint from '../../../assets/brow-tint.jpg'
import laminationTintCombo from '../../../assets/brow-lamination-tint.jpg'
import aromatherapyMassage from '../../../assets/aromatherapy-massage.jpg'

export const serviceData = [
  {
    category: 'Lashes & Brows',
    items: [
      {
        title: 'Classic Lashes',
        price: 18000,
        description: 'A natural, classic lash set for everyday elegance.',
        image: classicLashes,
      },
      {
        title: 'Hybrid Lashes',
        price: 25000,
        description: 'A seamless blend of classic and volume for fuller depth.',
        image: hybridLashes,
      },
      {
        title: 'Volume Lashes',
        price: 30000,
        description: 'Light and fluffy multi-lash fans for dramatic volume.',
        image: volumeLashes,
      },
      {
        title: 'Mega Volume Lashes',
        price: 35000,
        description: 'Ultra-dense fans for a show-stopping look.',
        image: megaVolumeLashes,
      },
      {
        title: 'Lash Refill - Classic',
        price: 10000,
        description: 'Maintain your classic set with a refill.',
        image: classicLashes,
      },
      {
        title: 'Lash Refill - Hybrid',
        price: 12000,
        description: 'Refill for hybrid sets to keep them full and even.',
        image: hybridLashes,
      },
      {
        title: 'Lash Refill - Volume/Mega',
        price: 15000,
        description: 'Volume and Mega refills for fuller sets.',
        image: megaVolumeLashes,
      },
      {
        title: 'Brow Lamination',
        price: 10000,
        description: 'Set and shape brows for a full, brushed-up look.',
        image: browLamination,
      },
      {
        title: 'Brow Tint',
        price: 10000,
        description: 'Enhance brow color for depth and definition.',
        image: browTint,
      },
      {
        title: 'Lamination & Tint Combo',
        price: 20000,
        description: 'Full brow package for a polished finish.',
        image: laminationTintCombo,
      },
    ],
  },
  {
    category: 'Massage Therapies',
    items: [
      {
        title: 'Swedish Massage',
        prices: { '60 mins': 30000, '90 mins': 42000 },
        description:
          'Relaxing full body massage to improve circulation and reduce stress.',
        image:
          'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?q=80&w=1200&auto=format&fit=crop',
      },
      {
        title: 'Hot Stone Massage',
        prices: { '60 mins': 28500, '90 mins': 30000 },
        description:
          'Thermotherapy using warmed stones placed on key points for deep relaxation.',
        image:
          'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=1200&auto=format&fit=crop',
      },
      {
        title: 'Thai Massage',
        prices: { '60 mins': 28000, '90 mins': 30000 },
        description:
          'Dry massage with deep pressure and stretching for a vigorous reset.',
        image:
          'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=1200&auto=format&fit=crop',
      },
      {
        title: 'Aromatherapy Massage',
        prices: { '60 mins': 20000, '90 mins': 25000 },
        description: 'Soothing blends of essential oils to revive the senses.',
        image: aromatherapyMassage,
      },
      {
        title: 'Deep Tissue Massage',
        prices: { '60 mins': 30000, '90 mins': 42000 },
        description: 'Targets deeper muscle layers to relieve chronic pain.',
        image:
          'https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=1200&auto=format&fit=crop',
      },
    ],
  },
  {
    category: 'Facial Treatments',
    items: [
      {
        title: 'Softness Re-Balancing (Antiaging)',
        price: 22000,
        description: '(1hr) Smooths fine lines and improves skin texture.',
        image:
          'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=1200&auto=format&fit=crop',
      },
      {
        title: 'Deep Cleansing Facial',
        price: 15000,
        description:
          '(1hr) Cleansing, steam, extraction and revitalizing mask.',
        image:
          'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=1200&auto=format&fit=crop',
      },
      {
        title: 'High Frequency Facial',
        price: 42000,
        description:
          '(90 mins) LED/electrode therapy to tighten skin and reduce pores.',
        image:
          'https://images.unsplash.com/photo-1598440947619-2c35fc93c687?q=80&w=1200&auto=format&fit=crop',
      },
      {
        title: 'V-Facial (Turkey Fry)',
        price: 18000,
        description: '(45 mins) Steam, extraction and ingrown hair care.',
        image:
          'https://images.unsplash.com/photo-1507919909716-c8262e491cde?q=80&w=1200&auto=format&fit=crop',
      },
      {
        title: 'Back Facial',
        price: 16000,
        description: '(45 mins) Treat back acne, pimples, and blackheads.',
        image:
          'https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=1200&auto=format&fit=crop',
      },
      {
        title: 'Butt Facial',
        price: 15000,
        description:
          '(45 mins) Specialized cleansing and care for the gluteal area.',
        image:
          'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=1200&auto=format&fit=crop',
      },
      {
        title: 'Elena Brightening Treatment',
        price: 20000,
        description:
          '(1hr) Orange peel scrub rich in Vitamin C for hyperpigmentation.',
        image:
          'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=1200&auto=format&fit=crop',
      },
      {
        title: 'Photon Therapy Facial',
        price: 30000,
        description: '(90 mins) LED therapy to penetrate deep into skin.',
        image:
          'https://images.unsplash.com/photo-1598440947619-2c35fc93c687?q=80&w=1200&auto=format&fit=crop',
      },
      {
        title: 'Dermaplaning Facial',
        price: 18000,
        description:
          '(60 mins) Surgical blade to remove fine hairs and exfoliate.',
        image:
          'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=1200&auto=format&fit=crop',
      },
      {
        title: 'Vitamin C Facial',
        price: 18000,
        description:
          '(45 mins) Brightening & breakout prevention using Vitamin C.',
        image:
          'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=1200&auto=format&fit=crop',
      },
      {
        title: 'Face Lift Facial',
        price: 12000,
        description: '(90 mins) Device-assisted lifting to improve firmness.',
        image:
          'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=1200&auto=format&fit=crop',
      },
    ],
  },
  {
    category: 'Body Therapies & Skin Growth',
    items: [
      {
        title: 'Sugar Scrub',
        price: 20000,
        description: '(60 mins) Exfoliation leaving skin soft and clean.',
        image:
          'https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?q=80&w=1200&auto=format&fit=crop',
      },
      {
        title: 'Traditional Scrub',
        price: 20000,
        description: '(60 mins) Nourishing exfoliation for smoother skin.',
        image:
          'https://images.unsplash.com/photo-1555820585-c5ae44394b79?q=80&w=1200&auto=format&fit=crop',
      },
      {
        title: 'Organic Scrub',
        price: 30000,
        description:
          '(60 mins) Organic ingredients to brighten and restore skin.',
        image:
          'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=1200&auto=format&fit=crop',
      },
      {
        title: 'Skin Tag Remover',
        price: 20000,
        description: '(90 mins) Professional removal with aftercare guidance.',
        image:
          'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=1200&auto=format&fit=crop',
      },
      {
        title: 'Mole Removal (per mole)',
        price: 15000,
        description: '(Per mole) Minor mole removal and aftercare.',
        image:
          'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=1200&auto=format&fit=crop',
      },
    ],
  },
  {
    category: 'Hand and Feet Care',
    items: [
      {
        title: 'Classic Pedicure (Women)',
        price: 12500,
        description: 'Classic pedicure for women',
        image:
          'https://images.unsplash.com/photo-1519415387722-a1c3bbef716c?q=80&w=1200&auto=format&fit=crop',
      },
      {
        title: 'Classic Pedicure (Men)',
        price: 15000,
        description: 'Classic pedicure for men',
        image:
          'https://images.unsplash.com/photo-1519415387722-a1c3bbef716c?q=80&w=1200&auto=format&fit=crop',
      },
      {
        title: 'Jelly Pedicure',
        price: 15000,
        description: 'Hydrating jelly pedicure for extra moisture',
        image:
          'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=1200&auto=format&fit=crop',
      },
      {
        title: 'Manicure',
        price: 7000,
        description: 'Standard manicure to keep hands neat and polished',
        image:
          'https://images.unsplash.com/photo-1632974333956-9c740931d524?q=80&w=1200&auto=format&fit=crop',
      },
      {
        title: 'Detox Pedicure',
        price: 25000,
        description: 'Deep detox pedicure to rejuvenate tired feet',
        image:
          'https://images.unsplash.com/photo-1519415387722-a1c3bbef716c?q=80&w=1200&auto=format&fit=crop',
      },
      {
        title: 'Paraffin Wax Pedicure',
        price: 28000,
        description: 'Luxurious paraffin wax treatment for deep hydration',
        image:
          'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=1200&auto=format&fit=crop',
      },
      {
        title: 'Anti Fungal Pedicure',
        price: 30000,
        description: 'Medical-grade anti-fungal pedicure treatment',
        image:
          'https://images.unsplash.com/photo-1519415387722-a1c3bbef716c?q=80&w=1200&auto=format&fit=crop',
      },
    ],
  },
  {
    category: 'Waxing',
    items: [
      {
        title: 'Brazilian Waxing',
        price: 15000,
        description: '',
        image:
          'https://images.unsplash.com/photo-1560750588-73207b1ef5b8?q=80&w=1200&auto=format&fit=crop',
      },
      {
        title: 'Full Leg Waxing',
        price: 15000,
        description: '',
        image:
          'https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=1200&auto=format&fit=crop',
      },
      {
        title: 'Full Hand Waxing',
        price: 15000,
        description: '',
        image:
          'https://images.unsplash.com/photo-1632974333956-9c740931d524?q=80&w=1200&auto=format&fit=crop',
      },
      {
        title: 'Half Leg Waxing',
        price: 8000,
        description: '',
        image:
          'https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=1200&auto=format&fit=crop',
      },
      {
        title: 'Half Hand Waxing',
        price: 8000,
        description: '',
        image:
          'https://images.unsplash.com/photo-1632974333956-9c740931d524?q=80&w=1200&auto=format&fit=crop',
      },
      {
        title: 'Full Body Waxing',
        price: 30000,
        description: '',
        image:
          'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=1200&auto=format&fit=crop',
      },
      {
        title: 'Under Arm Waxing',
        price: 5000,
        description: '',
        image:
          'https://images.unsplash.com/photo-1560750588-73207b1ef5b8?q=80&w=1200&auto=format&fit=crop',
      },
      {
        title: 'Jaw Waxing',
        price: 4000,
        description: '',
        image:
          'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=1200&auto=format&fit=crop',
      },
    ],
  },
]

const Services = ({ onOpenBooking }) => {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredServices = serviceData
    .map((cat) => ({
      ...cat,
      items: cat.items.filter((item) =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase()),
      ),
    }))
    .filter((cat) => cat.items.length > 0)

  return (
    <div className="services-page">
      <style>{`
        @media (max-width: 768px) {
          .service-search-wrapper {
            display: flex;
            justify-content: center;
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

      <section id="services" className="section services">
        <div className="services-container">
          <div className="service-search-wrapper">
            <input
              type="text"
              className="service-search-input"
              placeholder="Search services..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {filteredServices.length > 0 ? (
            filteredServices.map((cat) => (
              <div key={cat.category} className="service-category">
                <h3 className="category-title">{cat.category}</h3>

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
            ))
          ) : (
            <div className="no-services-found">
              No services found matching "{searchTerm}"
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

export default Services
