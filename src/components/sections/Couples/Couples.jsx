import './Couples.css'
import CountdownTimer from '../../ui/CountdownTimer/CountdownTimer'

const Couples = ({ onOpenBooking }) => {
  const couplesPackages = [
    {
      title: "Valentine's Special",
      price: 220000,
      duration: '2.5 hours',
      description:
        "Celebrate love with our exclusive Valentine's package. A complete romantic escape.",
      includes: [
        'Aromatherapy Couples Massage (75 min)',
        'Chocolate & Rose Facials',
        'Private Jacuzzi Session',
        'Complimentary Wine & Strawberries',
        'Gift Bag for Two',
      ],
      image:
        'https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=600&h=400&fit=crop',
    },
    {
      title: 'Romantic Retreat',
      price: 180000,
      duration: '2 hours',
      description:
        'Unwind together with side-by-side massages and facials in our couples suite.',
      includes: [
        'Couples massage (60 min)',
        'Hydrating facials',
        'Private suite',
        'Champagne and chocolates',
        'Aromatherapy session',
      ],
      image:
        'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=600&h=400&fit=crop',
    },
    {
      title: 'Date Night Glow',
      price: 120000,
      duration: '90 minutes',
      description:
        'Perfect pre-date pampering for couples looking to shine together.',
      includes: [
        'Express facials for two',
        'Hand and foot treatments',
        'Light refreshments',
        'Relaxation lounge access',
      ],
      image:
        'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=600&h=400&fit=crop',
    },
    {
      title: 'Anniversary Luxury',
      price: 250000,
      duration: '3 hours',
      description:
        'Celebrate your love with our ultimate couples spa experience.',
      includes: [
        'Full body massage (90 min)',
        'Signature facials',
        'Couples bath ritual',
        'Private dining experience',
        'Rose petal ceremony',
        'Complimentary gift',
      ],
      image:
        'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=600&h=400&fit=crop',
    },
    {
      title: 'Weekend Wellness',
      price: 160000,
      duration: '2 hours',
      description:
        'Start your weekend right with rejuvenating treatments for two.',
      includes: [
        'Aromatherapy massage',
        'Purifying facials',
        'Steam room access',
        'Healthy refreshments',
        'Relaxation zone',
      ],
      image:
        'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&h=400&fit=crop',
    },
  ]

  return (
    <div className="couples-page">
      <div className="couples-hero">
        <h1>Couples Packages</h1>
        <p>Share moments of relaxation and rejuvenation together</p>
      </div>

      <section className="couples-intro">
        <div className="couples-container">
          <h2>Experience Together</h2>
          <p>
            Strengthen your bond while indulging in our exclusive couples
            treatments. Our private suites offer the perfect setting for
            relaxation and romance.
          </p>
        </div>
      </section>

      <section className="couples-packages">
        <div className="couples-container">
          <div className="packages-grid">
            {couplesPackages.map((pkg, index) => (
              <div key={index} className="package-card">
                <div className="package-image-wrapper">
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    className="package-image"
                  />
                  <div className="package-duration">{pkg.duration}</div>
                </div>
                <div className="package-content">
                  <h3>{pkg.title}</h3>
                  {pkg.title === "Valentine's Special" && <CountdownTimer />}
                  <p className="package-description">{pkg.description}</p>

                  <div className="package-includes">
                    <h4>Package Includes:</h4>
                    <ul>
                      {pkg.includes.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="package-footer">
                    <span className="package-price">
                      ₦{pkg.price.toLocaleString()}
                    </span>
                    <button
                      className="book-package-btn"
                      onClick={() => onOpenBooking(pkg.title)}
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="couples-cta">
        <div className="couples-container">
          <h2>Make It Extra Special</h2>
          <p>
            Add champagne, flowers, or customize your experience. Contact us for
            personalized packages.
          </p>
          <button className="contact-btn" onClick={onOpenBooking}>
            Contact Us
          </button>
        </div>
      </section>
    </div>
  )
}

export default Couples
