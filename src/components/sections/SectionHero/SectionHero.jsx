import './SectionHero.css'

const SectionHero = ({
  title,
  subtitle,
  description,
  ctaText = 'Learn More',
  onPrimaryClick,
  onOpenBooking,
  showButtons = true,
}) => {
  return (
    <section className="page-hero">
      <div className="page-hero-overlay" />
      <div className="page-hero-content">
        {subtitle && <span className="hero-subtitle">{subtitle}</span>}
        {title && <h1 className="page-hero-title">{title}</h1>}
        {description && <p className="page-hero-desc">{description}</p>}

        {showButtons && (
          <div className="hero-buttons">
            <button className="primary-btn" onClick={onPrimaryClick}>
              {ctaText}
            </button>
            {onOpenBooking && (
              <button onClick={onOpenBooking} className="secondary-btn">
                Book Appointment
              </button>
            )}
          </div>
        )}
      </div>
    </section>
  )
}

export default SectionHero
