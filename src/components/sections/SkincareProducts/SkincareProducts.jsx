import { useState } from 'react'
import './SkincareProducts.css'
import CheckoutModal from '../../modals/CheckoutModal/CheckoutModal'

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
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
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
      })
    )
  }

  const cartTotal = cart.reduce((sum, item) => {
    const price = item.discountedPrice || item.price
    return sum + price * item.quantity
  }, 0)

  const handlePaymentSuccess = () => {
    setIsCheckoutOpen(false)
    setCart([])
    setIsCartOpen(false)
    alert('Payment successful! Thank you for your order.')
  }

  const products = [
    {
      id: 1,
      name: 'Vitamin C Brightening Serum',
      category: 'serum',
      price: 46000,
      image:
        'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&h=400&fit=crop',
      description:
        'Powerful antioxidant serum that brightens and evens skin tone',
      benefits: [
        'Reduces dark spots',
        'Boosts collagen',
        'Brightens complexion',
      ],
    },
    {
      id: 2,
      name: 'Hyaluronic Acid Hydrating Cream',
      category: 'moisturizer',
      price: 38500,
      image:
        'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=400&fit=crop',
      description:
        'Deep hydration cream with hyaluronic acid for plump, dewy skin',
      benefits: [
        '24-hour hydration',
        'Plumps fine lines',
        'Non-greasy formula',
      ],
    },
    {
      id: 3,
      name: 'Retinol Night Repair Treatment',
      category: 'treatment',
      price: 52000,
      image:
        'https://images.unsplash.com/photo-1571875257727-256c39da42af?w=400&h=400&fit=crop',
      description: 'Advanced retinol formula for anti-aging and skin renewal',
      benefits: ['Reduces wrinkles', 'Improves texture', 'Overnight renewal'],
    },
    {
      id: 4,
      name: 'Gentle Foaming Cleanser',
      category: 'cleanser',
      price: 28000,
      image:
        'https://images.unsplash.com/photo-1556228852-80192ff76c73?w=400&h=400&fit=crop',
      description:
        'pH-balanced cleanser that removes impurities without stripping',
      benefits: [
        'Deep cleansing',
        'Maintains pH balance',
        'Suitable for all skin types',
      ],
    },
    {
      id: 5,
      name: 'Niacinamide Pore Refining Toner',
      category: 'toner',
      price: 33000,
      image:
        'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=400&h=400&fit=crop',
      description: 'Minimizes pores and balances skin with niacinamide',
      benefits: ['Refines pores', 'Controls oil', 'Balances skin'],
    },
    {
      id: 6,
      name: 'Rose Water Facial Mist',
      category: 'mist',
      price: 24500,
      image:
        'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=400&fit=crop',
      description: 'Refreshing rose water spray for instant hydration',
      benefits: ['Instant refresh', 'Soothes skin', 'Sets makeup'],
    },
    {
      id: 7,
      name: 'SPF 50 Sunscreen Lotion',
      category: 'sunscreen',
      price: 35000,
      image:
        'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=400&fit=crop',
      description: 'Broad-spectrum protection with lightweight formula',
      benefits: ['UVA/UVB protection', 'Non-comedogenic', 'Water-resistant'],
    },
    {
      id: 8,
      name: 'Clay Purifying Mask',
      category: 'mask',
      price: 30000,
      image:
        'https://images.unsplash.com/photo-1570554886111-e80fcca6a029?w=400&h=400&fit=crop',
      description: 'Deep-cleansing clay mask for detoxified, clear skin',
      benefits: ['Draws out impurities', 'Minimizes pores', 'Mattifies skin'],
    },
    {
      id: 9,
      name: 'Collagen Eye Cream',
      category: 'eye-care',
      price: 42000,
      image:
        'https://images.unsplash.com/photo-1556228852-80192ff76c73?w=400&h=400&fit=crop',
      description: 'Targets dark circles, puffiness, and fine lines',
      benefits: [
        'Reduces dark circles',
        'Firms eye area',
        'Hydrates delicate skin',
      ],
    },
    {
      id: 10,
      name: 'Glycolic Acid Exfoliating Pads',
      category: 'exfoliant',
      price: 36500,
      image:
        'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=400&h=400&fit=crop',
      description: 'Pre-soaked pads for gentle chemical exfoliation',
      benefits: ['Smooth texture', 'Brightens skin', 'Unclogs pores'],
    },
    {
      id: 11,
      name: 'Peptide Firming Serum',
      category: 'serum',
      price: 58000,
      image:
        'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&h=400&fit=crop',
      description: 'Advanced peptide complex for firmer, lifted skin',
      benefits: ['Lifts and firms', 'Boosts elasticity', 'Anti-aging'],
    },
    {
      id: 12,
      name: 'Ceramide Barrier Repair Cream',
      category: 'moisturizer',
      price: 45000,
      image:
        'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=400&fit=crop',
      description: 'Strengthens skin barrier with ceramide complex',
      benefits: ['Repairs barrier', 'Locks in moisture', 'Soothes irritation'],
    },
    {
      id: 13,
      name: 'Green Tea Antioxidant Essence',
      category: 'essence',
      price: 39500,
      image:
        'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=400&h=400&fit=crop',
      description: 'Lightweight essence packed with antioxidants',
      benefits: ['Fights free radicals', 'Calms inflammation', 'Prepares skin'],
    },
    {
      id: 14,
      name: 'Overnight Sleeping Mask',
      category: 'mask',
      price: 48000,
      image:
        'https://images.unsplash.com/photo-1570554886111-e80fcca6a029?w=400&h=400&fit=crop',
      description: 'Intensive overnight treatment for radiant morning skin',
      benefits: [
        'Deep overnight repair',
        'Wakes up radiant',
        'Intense hydration',
      ],
    },
    {
      id: 15,
      name: 'Lip Plumping Treatment',
      category: 'lip-care',
      price: 26000,
      image:
        'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=400&h=400&fit=crop',
      description: 'Hydrating lip treatment with natural plumping effect',
      benefits: ['Plumps lips', 'Deep hydration', 'Smooths fine lines'],
    },
  ]

  const combos = [
    {
      id: 'c1',
      name: 'Complete Anti-Aging Set',
      products: [
        'Retinol Night Repair',
        'Peptide Firming Serum',
        'Collagen Eye Cream',
      ],
      originalPrice: 152000,
      discountedPrice: 120000,
      savings: 32000,
      image:
        'https://images.unsplash.com/photo-1556228852-80192ff76c73?w=600&h=400&fit=crop',
      description:
        'Comprehensive anti-aging routine for youthful, radiant skin',
    },
    {
      id: 'c2',
      name: 'Hydration Essentials Bundle',
      products: [
        'Hyaluronic Acid Cream',
        'Rose Water Mist',
        'Ceramide Barrier Cream',
      ],
      originalPrice: 108000,
      discountedPrice: 85000,
      savings: 23000,
      image:
        'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=600&h=400&fit=crop',
      description: 'Ultimate hydration trio for plump, dewy skin all day',
    },
    {
      id: 'c3',
      name: 'Brightening Power Duo',
      products: ['Vitamin C Serum', 'Glycolic Acid Pads'],
      originalPrice: 82500,
      discountedPrice: 65000,
      savings: 17500,
      image:
        'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=600&h=400&fit=crop',
      description: 'Powerful combination for luminous, even-toned complexion',
    },
    {
      id: 'c4',
      name: 'Daily Skincare Starter Kit',
      products: ['Gentle Cleanser', 'Niacinamide Toner', 'SPF 50 Sunscreen'],
      originalPrice: 96000,
      discountedPrice: 75000,
      savings: 21000,
      image:
        'https://images.unsplash.com/photo-1556228852-80192ff76c73?w=600&h=400&fit=crop',
      description: 'Everything you need for a simple, effective daily routine',
    },
    {
      id: 'c5',
      name: 'Detox & Purify Collection',
      products: ['Clay Mask', 'Glycolic Acid Pads', 'Green Tea Essence'],
      originalPrice: 106000,
      discountedPrice: 84000,
      savings: 22000,
      image:
        'https://images.unsplash.com/photo-1570554886111-e80fcca6a029?w=600&h=400&fit=crop',
      description: 'Deep cleansing collection for clear, refined skin',
    },
    {
      id: 'c6',
      name: 'Night Repair Ritual',
      products: ['Retinol Treatment', 'Overnight Mask', 'Peptide Serum'],
      originalPrice: 158000,
      discountedPrice: 125000,
      savings: 33000,
      image:
        'https://images.unsplash.com/photo-1571875257727-256c39da42af?w=600&h=400&fit=crop',
      description: 'Intensive overnight repair for transformative results',
    },
    {
      id: 'c7',
      name: 'Glow Getter Bundle',
      products: [
        'Vitamin C Serum',
        'Rose Water Mist',
        'Overnight Mask',
        'Lip Treatment',
      ],
      originalPrice: 144500,
      discountedPrice: 110000,
      savings: 34500,
      image:
        'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=600&h=400&fit=crop',
      description: 'Complete regimen for that enviable, radiant glow',
    },
  ]

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

  return (
    <div className="skincare-products-page">
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
          <div className="category-filter">
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
                  <h3>{product.name}</h3>
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
