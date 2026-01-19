import './Specials.css'
import CountdownTimer from '../../ui/CountdownTimer/CountdownTimer'

export const specialsData = [
    {
      title: "Valentine's Special",
      originalPrice: 280000,
      specialPrice: 220000,
      description:
        "Exclusive Valentine's package for couples. Massage, facials, and private jacuzzi.",
      validity: 'Valid through February',
      image:
        'https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=600&h=400&fit=crop',
    },
    {
      title: 'New Client Special',
      originalPrice: 75000,
      specialPrice: 50000,
      description:
        'Get 30% off your first facial treatment! Perfect for trying our signature services.',
      validity: 'Valid for first-time clients only',
      image:
        'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&h=400&fit=crop',
    },
    {
      title: 'Birthday Month Package',
      originalPrice: 120000,
      specialPrice: 90000,
      description:
        'Celebrate your birthday with a complete pampering package including facial, massage, and complimentary gift.',
      validity: 'Valid during your birth month with ID',
      image:
        'https://images.unsplash.com/photo-1560750588-73207b1ef5b8?w=600&h=400&fit=crop',
    },
    {
      title: 'Midweek Refresh',
      originalPrice: 60000,
      specialPrice: 45000,
      description:
        'Beat the midweek blues! 25% off all treatments Tuesday through Thursday.',
      validity: 'Tuesday - Thursday only',
      image:
        'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=600&h=400&fit=crop',
    },
    {
      title: 'Bridal Glow Package',
      originalPrice: 250000,
      specialPrice: 200000,
      description:
        'Complete pre-wedding skincare regimen. 6 sessions of customized facials and treatments.',
      validity: 'Book at least 3 months before wedding',
      image:
        'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=400&fit=crop',
    },
    {
      title: 'Refer a Friend',
      originalPrice: 0,
      specialPrice: 0,
      description:
        'Refer a friend and you both get ₦10,000 credit towards your next treatment!',
      validity: 'Unlimited referrals',
      image:
        'https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=600&h=400&fit=crop',
      isReferral: true,
    },
    {
      title: 'Student Discount',
      originalPrice: 50000,
      specialPrice: 40000,
      description: '20% off all services for students with valid ID.',
      validity: 'Valid student ID required',
      image:
        'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=600&h=400&fit=crop',
    },
]

const Specials = ({ onOpenBooking }) => {

  return (
    <div className="specials-page">
      <div className="specials-hero">
        <h1>Special Offers</h1>
        <p>Exclusive deals and promotions for our valued clients</p>
      </div>

      <section className="specials-section">
        <div className="specials-container">
          <div className="specials-grid">
            {specialsData.map((special, index) => (
              <div key={index} className="special-card">
                <div className="special-image-wrapper">
                  <img
                    src={special.image}
                    alt={special.title}
                    className="special-image"
                  />
                  {!special.isReferral && (
                    <div className="special-badge">
                      Save ₦
                      {(
                        special.originalPrice - special.specialPrice
                      ).toLocaleString()}
                    </div>
                  )}
                </div>
                <div className="special-content">
                  <h3>{special.title}</h3>
                  {special.title === "Valentine's Special" && (
                    <CountdownTimer />
                  )}
                  <p className="special-description">{special.description}</p>

                  {!special.isReferral && (
                    <div className="special-pricing">
                      <span className="original-price">
                        ₦{special.originalPrice.toLocaleString()}
                      </span>
                      <span className="special-price">
                        ₦{special.specialPrice.toLocaleString()}
                      </span>
                    </div>
                  )}

                  <p className="special-validity">{special.validity}</p>

                  <button
                    className="book-special-btn"
                    onClick={() => onOpenBooking(special.title)}
                  >
                    {special.isReferral ? 'Learn More' : 'Book Now'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Specials
