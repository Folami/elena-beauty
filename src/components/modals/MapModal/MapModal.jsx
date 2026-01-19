import React from 'react'
import './MapModal.css'

const MapModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null

  return (
    <div className="map-modal-overlay" onClick={onClose}>
      <div className="map-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="map-close-btn" onClick={onClose}>&times;</button>
        <div className="map-header">
            <h3>Visit Us</h3>
            <p className="map-address">8 Jokit plaza, Old Olowora Road, Magodo Phase 1, Isheri, Lagos</p>
        </div>
        <div className="map-container">
            <iframe
                title="Google Map Location"
                width="100%"
                height="100%"
                frameBorder="0"
                style={{ border: 0 }}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.036087796035!2d3.3705973!3d6.6424357!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b93a05603713f%3A0xe544976472465133!2sJokit%20Plaza!5e0!3m2!1sen!2sng!4v1715694857416!5m2!1sen!2sng"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
        <a 
            href="https://maps.google.com/?q=8+Jokit+plaza,+old+olowora+road,+magodo+phase1,+isheri,+Lagos,+Nigeria"
            target="_blank"
            rel="noopener noreferrer"
            className="open-maps-btn"
        >
            Open in Google Maps
        </a>
      </div>
    </div>
  )
}

export default MapModal
