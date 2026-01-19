import React from 'react'

const CheckoutModal = ({ isOpen, onClose, total, onCheckout }) => {
  if (!isOpen) return null

  const handleSubmit = (e) => {
    e.preventDefault()
    // Simulate payment processing
    onCheckout()
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          &times;
        </button>
        <h2 className="modal-title">Checkout</h2>
        <p className="modal-subtitle">Total: ₦{total.toLocaleString()}</p>

        <form className="booking-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="checkout-name">Full Name</label>
            <input
              type="text"
              id="checkout-name"
              required
              placeholder="John Doe"
            />
          </div>

          <div className="form-group">
            <label htmlFor="checkout-email">Email</label>
            <input
              type="email"
              id="checkout-email"
              required
              placeholder="john@example.com"
            />
          </div>

          <div className="form-group">
            <label htmlFor="checkout-address">Shipping Address</label>
            <input
              type="text"
              id="checkout-address"
              required
              placeholder="123 Beauty Lane"
            />
          </div>

          <div className="form-group">
            <label htmlFor="checkout-card">Card Number</label>
            <input
              type="text"
              id="checkout-card"
              required
              placeholder="0000 0000 0000 0000"
            />
          </div>

          <div style={{ display: 'flex', gap: '1rem' }}>
            <div className="form-group" style={{ flex: 1 }}>
              <label htmlFor="checkout-expiry">Expiry</label>
              <input
                type="text"
                id="checkout-expiry"
                required
                placeholder="MM/YY"
              />
            </div>
            <div className="form-group" style={{ flex: 1 }}>
              <label htmlFor="checkout-cvv">CVV</label>
              <input type="text" id="checkout-cvv" required placeholder="123" />
            </div>
          </div>

          <button type="submit" className="book-btn modal-submit-btn">
            Pay Now
          </button>
        </form>
      </div>
    </div>
  )
}

export default CheckoutModal
