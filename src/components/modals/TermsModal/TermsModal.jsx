import React from 'react'
import './TermsModal.css'

const TermsModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content terms-modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close" onClick={onClose}>
          &times;
        </button>
        <h2 className="modal-title">Terms & Conditions</h2>
        <div className="terms-content">
          <p className="terms-intro">
            Please note the following terms for our Special Offers:
          </p>
          <ul>
            <li>Offer valid only for the specified period.</li>
            <li>
              Cannot be combined with other promotions, discounts, or gift
              certificates.
            </li>
            <li>Advance booking is required to secure the special rate.</li>
            <li>
              A 24-hour cancellation notice is required to avoid a cancellation
              fee (50% of service value).
            </li>
            <li>Subject to availability of therapists and suites.</li>
            <li>Prices are subject to change without prior notice.</li>
          </ul>
        </div>
        <button className="book-btn modal-submit-btn" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  )
}

export default TermsModal
