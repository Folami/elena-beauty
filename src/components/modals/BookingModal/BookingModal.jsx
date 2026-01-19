import React, { useState, useEffect } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

const BookingModal = ({ isOpen, onClose, initialService }) => {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    date: null,
  })

  useEffect(() => {
    if (isOpen) {
      setStep(1)
      if (initialService) {
        setFormData((prev) => ({ ...prev, service: initialService }))
      }
    }
  }, [isOpen, initialService])

  const handleChange = (e) => {
    const { id, value } = e.target
    setFormData((prev) => ({ ...prev, [id]: value }))
  }

  const handleDateChange = (date) => {
    setFormData((prev) => ({ ...prev, date }))
  }

  const handleReview = (e) => {
    e.preventDefault()
    setStep(2)
  }

  const handleConfirm = () => {
    // In a real app, you would handle form submission here
    alert("Thanks for booking! We'll be in touch to confirm your appointment.")
    onClose()
    setFormData({ name: '', email: '', service: '', date: null })
  }

  if (!isOpen) return null

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          &times;
        </button>
        <h2 className="modal-title">
          {step === 1 ? 'Book Your Appointment' : 'Confirm Booking'}
        </h2>
        <p className="modal-subtitle">
          {step === 1 ? 'Ready to glow?' : 'Please review your details'}
        </p>

        {step === 1 ? (
          <form className="booking-form" onSubmit={handleReview}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                required
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                required
                placeholder="your@email.com"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="service">Service</label>
              <input
                type="text"
                id="service"
                required
                placeholder="Service Name"
                value={formData.service}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="date">Preferred Date & Time</label>
              <DatePicker
                id="date"
                selected={formData.date}
                onChange={handleDateChange}
                minDate={new Date()}
                placeholderText="Select date and time"
                showTimeSelect
                dateFormat="MMMM d, yyyy h:mm aa"
                required
              />
            </div>

            <button type="submit" className="book-btn modal-submit-btn">
              Review Booking
            </button>
          </form>
        ) : (
          <div className="booking-summary">
            <div className="summary-item">
              <strong>Name:</strong> {formData.name}
            </div>
            <div className="summary-item">
              <strong>Email:</strong> {formData.email}
            </div>
            <div className="summary-item">
              <strong>Service:</strong> {formData.service}
            </div>
            <div className="summary-item">
              <strong>Date & Time:</strong> {formData.date?.toLocaleString()}
            </div>

            <div
              className="modal-actions"
              style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem' }}
            >
              <button
                className="book-btn modal-submit-btn"
                style={{ backgroundColor: '#ccc', color: '#333' }}
                onClick={() => setStep(1)}
              >
                Back
              </button>
              <button
                className="book-btn modal-submit-btn"
                onClick={handleConfirm}
              >
                Confirm
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default BookingModal
