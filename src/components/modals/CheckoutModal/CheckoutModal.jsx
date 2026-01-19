import { useState } from 'react'
import './CheckoutModal.css'

const CheckoutModal = ({ isOpen, onClose, total, onCheckout }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    paymentMethod: 'card'
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Simulate payment processing
    onCheckout(formData)
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  if (!isOpen) return null

  return (
    <div className="checkout-modal-overlay" onClick={onClose}>
      <div className="checkout-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="checkout-close-btn" onClick={onClose}>&times;</button>
        
        <div className="checkout-header">
          <h2>Checkout</h2>
          <p className="checkout-total">Total: ₦{total.toLocaleString()}</p>
        </div>

        <form onSubmit={handleSubmit} className="checkout-form">
          <div className="form-section">
            <h3>Contact Information</h3>
            
            <div className="form-group">
              <label htmlFor="name">Full Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone Number *</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-section">
            <h3>Delivery Address</h3>
            
            <div className="form-group">
              <label htmlFor="address">Full Address *</label>
              <textarea
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                rows="3"
                required
              />
            </div>
          </div>

          <div className="form-section">
            <h3>Payment Method</h3>
            
            <div className="payment-methods">
              <label className="payment-option">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="card"
                  checked={formData.paymentMethod === 'card'}
                  onChange={handleChange}
                />
                <span>Credit/Debit Card</span>
              </label>
              
              <label className="payment-option">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="transfer"
                  checked={formData.paymentMethod === 'transfer'}
                  onChange={handleChange}
                />
                <span>Bank Transfer</span>
              </label>
              
              <label className="payment-option">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="payondelivery"
                  checked={formData.paymentMethod === 'payondelivery'}
                  onChange={handleChange}
                />
                <span>Pay on Delivery</span>
              </label>
            </div>
          </div>

          <button type="submit" className="place-order-btn">
            Place Order - ₦{total.toLocaleString()}
          </button>
        </form>
      </div>
    </div>
  )
}

export default CheckoutModal
