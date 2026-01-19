import React, { useState } from 'react'
import { serviceData } from '../../sections/Services/Services'
import { specialsData } from '../../sections/Specials/Specials'
import './GiftCertificateModal.css'

const GiftCertificateModal = ({ isOpen, onClose }) => {
  const [giftType, setGiftType] = useState('amount') // 'amount' or 'service'
  const [selectedService, setSelectedService] = useState('')
  const [customAmount, setCustomAmount] = useState('')
  const [recipientName, setRecipientName] = useState('')
  const [recipientEmail, setRecipientEmail] = useState('')
  const [senderName, setSenderName] = useState('')
  const [message, setMessage] = useState('')
  const [showPreview, setShowPreview] = useState(false)

  // Reset state when modal opens
  // State resets automatically on remount due to key change in parent

  if (!isOpen) return null

  const handleSubmit = (e) => {
    e.preventDefault()
    const giftDetails = {
      type: giftType,
      value: giftType === 'amount' ? customAmount : selectedService,
      recipient: { name: recipientName, email: recipientEmail },
      sender: senderName,
      message,
    }
    console.log('Processing Gift Certificate:', giftDetails)
    alert(`Gift Certificate for ${recipientName} has been added to cart!`)
    onClose()
  }

  // Calculate price for display if a service is selected
  const getSelectedServicePrice = () => {
    if (!selectedService) return null

    // Check specials first
    const special = specialsData.find((s) => s.title === selectedService)
    if (special) return special.specialPrice

    // Check services
    for (const category of serviceData) {
      const service = category.items.find((s) => s.title === selectedService)
      if (service) {
        // Handle range prices or single price
        if (service.price) return service.price
        if (service.prices) return Object.values(service.prices)[0] // Default to first price option
      }
    }
    return null
  }

  const currentPrice = getSelectedServicePrice()

  const togglePreview = (e) => {
    e.preventDefault()
    // Basic validation before preview
    if (!recipientName || !senderName) {
      alert('Please fill in the recipient and sender names to preview.')
      return
    }
    if (giftType === 'amount' && !customAmount) {
      alert('Please enter an amount.')
      return
    }
    if (giftType === 'service' && !selectedService) {
      alert('Please select a service.')
      return
    }
    setShowPreview(!showPreview)
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          &times;
        </button>
        <h2 className="modal-title">
          {showPreview ? 'Certificate Preview' : 'Give the Gift of Glow'}
        </h2>
        {!showPreview && (
          <p className="modal-subtitle">
            Purchase a gift certificate for a loved one.
          </p>
        )}

        {showPreview ? (
          <div className="certificate-preview">
            <div
              style={{
                border: '4px double #e0218a',
                padding: '2rem',
                borderRadius: '10px',
                background: '#fff0f5',
                textAlign: 'center',
                marginBottom: '1.5rem',
                boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
              }}
            >
              <h3
                style={{
                  fontFamily: 'Dancing Script',
                  fontSize: '2.5rem',
                  color: '#e0218a',
                  marginBottom: '1rem',
                }}
              >
                Gift Certificate
              </h3>
              <p style={{ fontSize: '1.1rem', margin: '0.5rem 0' }}>
                <strong>To:</strong> {recipientName}
              </p>
              <p style={{ fontSize: '1.1rem', margin: '0.5rem 0' }}>
                <strong>From:</strong> {senderName}
              </p>
              <div
                style={{
                  margin: '1.5rem 0',
                  fontSize: '1.3rem',
                  fontWeight: 'bold',
                  color: '#333',
                }}
              >
                {giftType === 'amount'
                  ? `Value: ₦${Number(customAmount).toLocaleString()}`
                  : `Treatment: ${selectedService}`}
              </div>
              {message && (
                <p
                  style={{
                    fontStyle: 'italic',
                    marginTop: '1rem',
                    color: '#666',
                  }}
                >
                  "{message}"
                </p>
              )}
            </div>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <button
                className="book-btn modal-submit-btn"
                onClick={togglePreview}
                style={{ backgroundColor: '#666', flex: 1 }}
              >
                Back to Edit
              </button>
              <button
                className="book-btn modal-submit-btn"
                onClick={handleSubmit}
                style={{ flex: 1 }}
              >
                Confirm
              </button>
            </div>
          </div>
        ) : (
          <form className="booking-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Gift Type</label>
              <div
                style={{ display: 'flex', gap: '1rem', marginBottom: '0.5rem' }}
              >
                <label
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    fontWeight: 'normal',
                    cursor: 'pointer',
                  }}
                >
                  <input
                    type="radio"
                    name="giftType"
                    value="amount"
                    checked={giftType === 'amount'}
                    onChange={(e) => setGiftType(e.target.value)}
                  />
                  Monetary Amount
                </label>
                <label
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    fontWeight: 'normal',
                    cursor: 'pointer',
                  }}
                >
                  <input
                    type="radio"
                    name="giftType"
                    value="service"
                    checked={giftType === 'service'}
                    onChange={(e) => setGiftType(e.target.value)}
                  />
                  Specific Treatment
                </label>
              </div>
            </div>

            {giftType === 'amount' ? (
              <div className="form-group">
                <label htmlFor="amount">Amount (₦)</label>
                <input
                  type="number"
                  id="amount"
                  min="5000"
                  step="1000"
                  placeholder="e.g. 50000"
                  value={customAmount}
                  onChange={(e) => setCustomAmount(e.target.value)}
                  required={giftType === 'amount'}
                />
              </div>
            ) : (
              <div className="form-group">
                <label htmlFor="service-select">Select Treatment</label>
                <select
                  id="service-select"
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  required={giftType === 'service'}
                >
                  <option value="">-- Choose a Service --</option>
                  <optgroup label="Special Offers">
                    {specialsData.map((special, idx) => (
                      <option key={`special-${idx}`} value={special.title}>
                        {special.title} - ₦
                        {special.specialPrice.toLocaleString()}
                      </option>
                    ))}
                  </optgroup>
                  {serviceData.map((category, idx) => (
                    <optgroup key={idx} label={category.category}>
                      {category.items.map((service, sIdx) => (
                        <option key={sIdx} value={service.title}>
                          {service.title}
                        </option>
                      ))}
                    </optgroup>
                  ))}
                </select>
                {currentPrice && (
                  <div
                    style={{
                      marginTop: '0.5rem',
                      fontSize: '0.9rem',
                      color: 'var(--primary)',
                      fontWeight: 'bold',
                    }}
                  >
                    Price: ₦{currentPrice.toLocaleString()}
                  </div>
                )}
              </div>
            )}

            <div className="form-group">
              <label htmlFor="recipient-name">Recipient Name</label>
              <input
                type="text"
                id="recipient-name"
                value={recipientName}
                onChange={(e) => setRecipientName(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="recipient-email">Recipient Email</label>
              <input
                type="email"
                id="recipient-email"
                value={recipientEmail}
                onChange={(e) => setRecipientEmail(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="sender-name">Your Name</label>
              <input
                type="text"
                id="sender-name"
                value={senderName}
                onChange={(e) => setSenderName(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Personal Message (Optional)</label>
              <textarea
                id="message"
                rows="3"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Write a sweet note..."
              ></textarea>
            </div>

            <div style={{ display: 'flex', gap: '1rem' }}>
              <button
                type="button"
                className="book-btn modal-submit-btn"
                onClick={togglePreview}
                style={{
                  backgroundColor: '#fff',
                  color: '#e0218a',
                  border: '1px solid #e0218a',
                  flex: 1,
                }}
              >
                Preview
              </button>
              <button
                type="submit"
                className="book-btn modal-submit-btn"
                style={{ flex: 1 }}
              >
                Proceed to Payment
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  )
}

export default GiftCertificateModal
