import './Memberships.css'

const Memberships = ({ onOpenBooking }) => {
  const memberships = [
    {
      title: 'Elena Essentials',
      price: 30000,
      period: '/month',
      description: 'Consistency is key. Maintain your glow with our essential monthly package.',
      benefits: [
        '1 Signature Facial per month',
        '10% off all retail products',
        'Priority booking access',
        'Birthday gift'
      ],
      isPopular: false
    },
    {
      title: 'Luxe Royalty',
      price: 65000,
      period: '/month',
      description: 'The ultimate VIP experience for those who demand the best for their skin and soul.',
      benefits: [
        '2 Premium Treatments per month',
        '20% off all retail products',
        'Unlimited sauna & steam room access',
        '1 Guest pass per month',
        'Priority booking access',
        'Exclusive event invitations'
      ],
      isPopular: true
    },
    {
      title: 'Glow Getter',
      price: 45000,
      period: '/month',
      description: 'Level up your self-care routine with enhanced treatments and perks.',
      benefits: [
        '1 Advanced Treatment (HydraFacial or Peel)',
        '15% off all retail products',
        'Access to members-only specials',
        'Complimentary add-on (Eye or Lip mask)',
        'Quarterly skin analysis'
      ],
      isPopular: false
    }
  ]

  return (
    <div className="memberships-page">
      <div className="memberships-hero">
        <h1>Memberships</h1>
        <p>Join our exclusive community and prioritize your wellness journey</p>
      </div>

      <section className="memberships-intro">
        <div className="memberships-container">
          <h2>Why Become a Member?</h2>
          <p>
            Experience the transformative power of consistent care. Our membership programs are 
            designed to reward your commitment to self-love with exclusive savings, perks, and 
            VIP treatment every time you visit.
          </p>
        </div>
      </section>

      <section className="memberships-plans">
        <div className="memberships-container">
          <div className="plans-grid">
            {memberships.map((plan, index) => (
              <div key={index} className={`plan-card ${plan.isPopular ? 'popular' : ''}`}>
                {plan.isPopular && <div className="popular-badge">Most Popular</div>}
                
                <h3 className="plan-title">{plan.title}</h3>
                <div className="plan-price-wrapper">
                  <span className="plan-price">₦{plan.price.toLocaleString()}</span>
                  <span className="plan-period">{plan.period}</span>
                </div>
                
                <p className="plan-description">{plan.description}</p>
                
                <div className="plan-benefits">
                  <ul>
                    {plan.benefits.map((benefit, idx) => (
                      <li key={idx}>{benefit}</li>
                    ))}
                  </ul>
                </div>
                
                <button className="join-btn" onClick={onOpenBooking}>
                  Join Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="membership-faq">
        <div className="memberships-container">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h3>Is there a commitment period?</h3>
              <p>We ask for a 3-month initial commitment to see real results, after which you can cancel anytime with 30 days notice.</p>
            </div>
            <div className="faq-item">
              <h3>Can I roll over unused services?</h3>
              <p>Yes! Unused services roll over for up to 30 days, so you never lose out on your self-care time.</p>
            </div>
            <div className="faq-item">
              <h3>Can I share my membership?</h3>
              <p>Memberships are non-transferable, but our Luxe Royalty tier includes one guest pass per month to bring a friend!</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Memberships
