import Slider from 'react-slick'
import './Reviews.css'

const reviews = [
  {
    name: 'Sarah J.',
    text: "The best facial I've ever had! My skin feels amazing and the atmosphere is so relaxing. I'm glowing!",
    rating: 5,
    avatar:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop',
  },
  {
    name: 'Emily R.',
    text: 'Elena is a magician. The chemical peel transformed my texture completely. I feel like a new person.',
    rating: 5,
    avatar:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format=fit=crop',
  },
  {
    name: 'Jessica M.',
    text: 'Highly recommend the hydration therapy. I left glowing and feeling so refreshed. Will be back soon!',
    rating: 5,
    avatar:
      'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format=fit=crop',
  },
  {
    name: 'Amanda K.',
    text: 'A truly luxurious experience from start to finish. The attention to detail is incredible. My skin has never looked better.',
    rating: 5,
    avatar:
      'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=1887&auto=format=fit=crop',
  },
]

const Reviews = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    arrows: false,
    className: 'reviews-slider',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1, // Ensure only one review-card is visible on mobile
          slidesToScroll: 1, // Slide one card at a time
        },
      },
    ],
  }

  return (
    <section id="reviews" className="reviews-section">
      <div className="reviews-container">
        <div className="section-header-wrapper">
          <h2 className="section-title">Client Raves</h2>
          <p className="section-subtitle">What Our Dolls Are Saying</p>
        </div>
        <Slider {...settings}>
          {reviews.map((review, index) => (
            <div key={index} className="review-slide">
              <div className="review-card">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="review-avatar"
                />
                <p className="review-text">"{review.text}"</p>
                <div className="review-rating">{'★'.repeat(review.rating)}</div>
                <h4 className="review-author">- {review.name}</h4>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  )
}

export default Reviews
