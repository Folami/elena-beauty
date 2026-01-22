import { useState, useEffect } from 'react'
import './SkincareProducts.css'
import CheckoutModal from '../../modals/CheckoutModal/CheckoutModal'
import { products, combos } from '../../../data/productData'

const SkincareProducts = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [cart, setCart] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false)

  const addToCart = (item) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === item.id)
      if (existing) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i,
        )
      }
      return [...prev, { ...item, quantity: 1 }]
    })
    setIsCartOpen(true)
  }

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id))
  }

  const updateQuantity = (id, delta) => {
    setCart((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          const newQty = Math.max(1, item.quantity + delta)
          return { ...item, quantity: newQty }
        }
        return item
      }),
    )
  }

  const cartTotal = cart.reduce((sum, item) => {
    const price = item.discountedPrice || item.price
    return sum + price * item.quantity
  }, 0)

  const categories = [
    { value: 'all', label: 'All Products' },
    { value: 'serum', label: 'Serums' },
    { value: 'moisturizer', label: 'Moisturizers' },
    { value: 'cleanser', label: 'Cleansers' },
    { value: 'mask', label: 'Masks' },
    { value: 'treatment', label: 'Treatments' },
  ]

  const filteredProducts =
    selectedCategory === 'all'
      ? products
      : products.filter((p) => p.category === selectedCategory)

  useEffect(() => {
    const header = document.querySelector('.category-filters')
    const sticky = header.offsetTop

    const handleScroll = () => {
      if (window.pageYOffset > sticky) {
        header.classList.add('sticky')
      } else {
        header.classList.remove('sticky')
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handlePaymentSuccess = () => {
    setIsCheckoutOpen(false)
    setCart([])
    setIsCartOpen(false)
    alert('Payment successful! Thank you for your order.')
  }

  return (
    <div className="skincare-products-page">
      <style>{`
        .category-filter {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 1rem;
          margin-bottom: 2rem;
          position: sticky;
          top: 70px;
          z-index: 90;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(8px);
          padding: 1rem 0;
          box-shadow: 0 4px 20px rgba(0,0,0,0.05);
        }
        
        .filter-btn {
          padding: 0.8rem 1.5rem;
          border: 2px solid var(--primary);
          background: transparent;
          color: var(--primary);
          border-radius: 50px;
          cursor: pointer;
          font-weight: 600;
          transition: all 0.3s ease;
          font-size: 1rem;
          white-space: nowrap;
        }
        
        .filter-btn:hover,
        .filter-btn.active {
          background: var(--primary);
          color: white;
        }

        @media (max-width: 768px) {
          .category-filter {
            justify-content: flex-start;
            flex-wrap: nowrap;
            overflow-x: auto;
            padding: 1rem 5%;
            gap: 0.8rem;
            margin-left: -5%;
            width: 110%;
            -webkit-overflow-scrolling: touch;
            scrollbar-width: none;
          }
          .category-filter::-webkit-scrollbar { display: none; }
          .filter-btn {
            padding: 0.6rem 1.2rem;
            font-size: 0.9rem;
            flex: 0 0 auto;
          }
        }

        .cart-floating-btn {
          bottom: 100px;
          right: 30px;
        }
      `}</style>
      <div className="products-hero">
        <h1>Skincare Products</h1>
        <p>Premium skincare solutions for radiant, healthy skin</p>
      </div>

      {/* Combo Deals Section */}
      <section className="combo-section">
        <div className="products-container">
          <h2 className="section-title">Special Combo Deals</h2>
          <p className="section-subtitle">Save big on curated skincare sets</p>

          <div className="combo-grid">
            {combos.map((combo) => (
              <div key={combo.id} className="combo-card">
                <div className="combo-badge">
                  Save ₦{combo.savings.toLocaleString()}
                </div>
                <img
                  src={combo.image}
                  alt={combo.name}
                  className="combo-image"
                />
                <div className="combo-info">
                  <h3>{combo.name}</h3>
                  <p className="combo-description">{combo.description}</p>
                  <div className="combo-products">
                    <strong>Includes:</strong>
                    <ul>
                      {combo.products.map((product, idx) => (
                        <li key={idx}>{product}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="combo-pricing">
                    <span className="original-price">
                      ₦{combo.originalPrice.toLocaleString()}
                    </span>
                    <span className="discounted-price">
                      ₦{combo.discountedPrice.toLocaleString()}
                    </span>
                  </div>
                  <button
                    className="add-to-cart-btn"
                    onClick={() => addToCart(combo)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Individual Products Section */}
      <section className="products-section">
        <div className="products-container">
          <h2 className="section-title">Individual Products</h2>

          {/* Category Filter */}
          <div className="category-filters">
            <div className="category-list">
              {categories.map((cat) => (
                <button
                  key={cat.value}
                  className={`filter-btn ${
                    selectedCategory === cat.value ? 'active' : ''
                  }`}
                  onClick={() => setSelectedCategory(cat.value)}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Products Grid */}
          <div className="products-grid">
            {filteredProducts.map((product) => (
              <div key={product.id} className="product-card">
                <img
                  src={product.image}
                  alt={product.name}
                  className="product-image"
                />
                <div className="product-info">
                  <h4 className="product-title">{product.name}</h4>
                  <p className="product-description">{product.description}</p>
                  <div className="product-benefits">
                    {product.benefits.map((benefit, idx) => (
                      <span key={idx} className="benefit-tag">
                        ✓ {benefit}
                      </span>
                    ))}
                  </div>
                  <div className="product-footer">
                    <span className="product-price">
                      ₦{product.price.toLocaleString()}
                    </span>
                    <button
                      className="add-to-cart-btn"
                      onClick={() => addToCart(product)}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Floating Cart Button */}
      <div className="cart-floating-btn" onClick={() => setIsCartOpen(true)}>
        <span className="cart-icon">🛒</span>
        <span className="cart-count">
          {cart.reduce((acc, item) => acc + item.quantity, 0)}
        </span>
      </div>

      {/* Cart Sidebar */}
      <div
        className={`cart-overlay ${isCartOpen ? 'open' : ''}`}
        onClick={() => setIsCartOpen(false)}
      >
        <div className="cart-sidebar" onClick={(e) => e.stopPropagation()}>
          <div className="cart-header">
            <h2>Your Cart</h2>
            <button className="close-cart" onClick={() => setIsCartOpen(false)}>
              ×
            </button>
          </div>

          <div className="cart-items">
            {cart.length === 0 ? (
              <p className="empty-cart">Your cart is empty.</p>
            ) : (
              cart.map((item) => (
                <div key={item.id} className="cart-item">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="cart-item-img"
                  />
                  <div className="cart-item-details">
                    <h4>{item.name}</h4>
                    <p>
                      ₦{(item.discountedPrice || item.price).toLocaleString()}
                    </p>
                    <div className="cart-controls">
                      <button onClick={() => updateQuantity(item.id, -1)}>
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, 1)}>
                        +
                      </button>
                    </div>
                  </div>
                  <button
                    className="remove-item"
                    onClick={() => removeFromCart(item.id)}
                  >
                    ×
                  </button>
                </div>
              ))
            )}
          </div>

          <div className="cart-footer">
            <div className="cart-total">
              <span>Total:</span>
              <span>₦{cartTotal.toLocaleString()}</span>
            </div>
            <button
              className="checkout-btn"
              disabled={cart.length === 0}
              onClick={() => setIsCheckoutOpen(true)}
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        total={cartTotal}
        onCheckout={handlePaymentSuccess}
      />
    </div>
  )
}

export default SkincareProducts
