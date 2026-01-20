import classicLashes from '../assets/classic-lashes.jpg'
import hybridLashes from '../assets/hybrid-lashes.jpg'
import volumeLashes from '../assets/volume-lashes.jpg'
import megaVolumeLashes from '../assets/mega-volume-lashes.jpg'
import swedishMassage from '../assets/swedish-massage.jpg'
import deepTissueMassage from '../assets/deep-tissue-massage.jpg'
import thaiMassage from '../assets/thai-massage.jpg'
import hotStoneMassage from '../assets/hot-stone-massage.jpg'
import aromatherapyMassage from '../assets/aromatherapy-massage.jpg'
import highFrequencyFacial from '../assets/high-frequency-facial.jpg'
import photonTherapyFacial from '../assets/photon-therapy-facial.jpg'
import antiAgingTreatment from '../assets/anti-aging-treatment.jpg'
import elenaBrighteningTreatment from '../assets/elena-brightening-treatment.jpg'

export const serviceData = [
  {
    category: 'Lashes & Brows',
    items: [
      {
        title: 'Classic Lashes',
        price: 18000,
        description: 'A natural, classic lash set for everyday elegance.',
        benefits: [
          'Subtle length and curl',
          'Enhances natural lashes',
          'Low maintenance look',
        ],
        image: classicLashes,
      },
      {
        title: 'Hybrid Lashes',
        price: 25000,
        description: 'A seamless blend of classic and volume for fuller depth.',
        benefits: [
          'Natural-meets-glam finish',
          'Textured, fuller appearance',
          'Customizable density',
        ],
        image: hybridLashes,
      },
      {
        title: 'Volume Lashes',
        price: 30000,
        description: 'Light and fluffy multi-lash fans for dramatic volume.',
        benefits: [
          'Full, dramatic look',
          'Soft, fluffy finish',
          'Ideal for special occasions',
        ],
        image: volumeLashes,
      },
      {
        title: 'Mega Volume Lashes',
        price: 35000,
        description: 'Ultra-dense fans for a show-stopping look.',
        benefits: [
          'Maximum fullness and drama',
          'Bold, statement lashes',
          'Perfect for photos and events',
        ],
        image: megaVolumeLashes,
      },
    ],
  },
  {
    category: 'Massage Therapies',
    items: [
      {
        title: 'Swedish Massage',
        prices: { '60 Mins': 30000, '90 Mins': 42000 },
        description: 'Full body massage to relax and improve circulation.',
        benefits: [
          'Promotes relaxation',
          'Improves blood circulation',
          'Reduces muscle tension',
        ],
        image: swedishMassage,
      },
      {
        title: 'Deep Tissue Massage',
        prices: { '60 Mins': 30000, '90 Mins': 42000 },
        description:
          'Focuses on deeper muscle layers to alleviate chronic pain.',
        benefits: [
          'Eases chronic muscle pain',
          'Breaks down scar tissue',
          'Improves mobility',
        ],
        image: deepTissueMassage,
      },
      {
        title: 'Thai Massage',
        prices: { '60 Mins': 28000, '90 Mins': 30000 },
        description: 'Dry massage using deep pressure and stretches.',
        benefits: [
          'Enhances flexibility',
          'Boosts energy flow',
          'Relieves joint tension',
        ],
        image: thaiMassage,
      },
      {
        title: 'Hot Stone Massage',
        prices: { '60 Mins': 28500, '90 Mins': 30000 },
        description: 'Uses heated stones for total relaxation.',
        benefits: [
          'Deep muscle relaxation',
          'Improves circulation',
          'Soothes stress and anxiety',
        ],
        image: hotStoneMassage,
      },
      {
        title: 'Aromatherapy Massage',
        prices: { '60 Mins': 20000, '90 Mins': 25000 },
        description: 'Uses essential oils to alleviate stress.',
        benefits: [
          'Promotes relaxation and mood lift',
          'Customizable with essential oils',
          'Helps reduce tension and stress',
        ],
        image: aromatherapyMassage,
      },
    ],
  },
  {
    category: 'Facial Treatments',
    items: [
      {
        title: 'High Frequency Facials',
        price: 42000,
        description:
          'A facial using high-frequency electrical current to treat acne, fine lines, and boost collagen.',
        benefits: [
          'Reduces acne and bacteria',
          'Stimulates collagen production',
          'Improves skin texture and tone',
        ],
        image: highFrequencyFacial,
      },
      {
        title: 'Photon Therapy Facials',
        price: 30000,
        description:
          'Light-based therapy to address pigmentation, acne and signs of aging.',
        benefits: [
          'Targets pigmentation',
          'Stimulates cellular repair',
          'Non-invasive rejuvenation',
        ],
        image: photonTherapyFacial,
      },
      {
        title: 'Anti-aging Treatment',
        price: 22000,
        description:
          'Targeted treatments to reduce fine lines and restore youthful skin.',
        benefits: [
          'Smooths fine lines',
          'Improves skin firmness',
          'Restores youthful radiance',
        ],
        image: antiAgingTreatment,
      },
      {
        title: 'Elena Brightening Treatment',
        price: 20000,
        description: 'A brightening protocol to even tone and boost radiance.',
        benefits: [
          'Evens skin tone',
          'Reduces dark spots',
          'Enhances natural glow',
        ],
        image: elenaBrighteningTreatment,
      },
      {
        title: 'Dermaplaning',
        price: 18000,
        description:
          'A gentle exfoliation procedure that removes peach fuzz and dead skin.',
        benefits: [
          'Smooths skin texture',
          'Enhances product absorption',
          'Creates a flawless makeup base',
        ],
        image:
          'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80',
      },
      {
        title: 'Vitamin C Facial',
        price: 18000,
        description:
          'An antioxidant-rich facial to brighten and protect the skin.',
        benefits: [
          'Brightens dull skin',
          'Protects against free radicals',
          'Boosts collagen synthesis',
        ],
        image:
          'https://images.unsplash.com/photo-1531891437562-4306f1f05a8e?auto=format&fit=crop&w=800&q=80',
      },
      {
        title: 'V-Facial',
        price: 18000,
        description:
          'A pulsed radiofrequency facial targeting skin tightening and contouring.',
        benefits: [
          'Tightens and firms skin',
          'Improves facial contours',
          'Non-surgical lifting effect',
        ],
        image:
          'https://images.unsplash.com/photo-1522336967125-2f6b5e8a3f13?auto=format&fit=crop&w=800&q=80',
      },
      {
        title: 'Back Facial',
        price: 16000,
        description: 'Deep-cleansing and exfoliating treatment for the back.',
        benefits: [
          'Clears clogged pores',
          'Smooths back skin',
          'Reduces back acne and congestion',
        ],
        image:
          'https://images.unsplash.com/photo-1606813902865-3f1f8a6f0a25?auto=format&fit=crop&w=800&q=80',
      },
      {
        title: 'Deep Cleansing Facial',
        price: 15000,
        description:
          'A thorough cleansing treatment to purify and balance the skin.',
        benefits: [
          'Removes impurities and excess oil',
          'Minimizes pores',
          'Promotes clearer skin',
        ],
        image:
          'https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=800&q=80',
      },
      {
        title: 'Butt Facial',
        price: 15000,
        description:
          'Targeted cleansing and exfoliation for smoother skin on the buttocks.',
        benefits: [
          'Reduces clogged pores',
          'Smooths and brightens skin',
          'Prevents ingrown hairs',
        ],
        image:
          'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=800&q=80',
      },
      {
        title: 'Face Lift Facials',
        price: 12000,
        description:
          'Non-surgical facial treatments focused on lifting and firming.',
        benefits: [
          'Improves skin elasticity',
          'Reduces sagging',
          'Creates a refreshed appearance',
        ],
        image:
          'https://images.unsplash.com/photo-1556228453-7e5a8c488e5c?auto=format&fit=crop&w=800&q=80',
      },
    ],
  },
  {
    category: 'Body & Specialized Care',
    items: [
      {
        title: 'Full Body Waxing',
        price: 30000,
        description:
          'Comprehensive waxing service for smooth, long-lasting results.',
        benefits: [
          'Longer-lasting smoothness than shaving',
          'Reduces hair regrowth over time',
          'Leaves skin feeling soft',
        ],
        image:
          'https://images.unsplash.com/photo-1549576490-b0b4831ef60a?auto=format&fit=crop&w=800&q=80',
      },
      {
        title: 'Organic Scrub',
        price: 30000,
        description:
          'Natural exfoliation using organic ingredients to renew skin.',
        benefits: [
          'Removes dead skin cells',
          'Improves circulation',
          'Leaves skin radiant and smooth',
        ],
        image:
          'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
      },
      {
        title: 'Sugar Scrub',
        price: 20000,
        description: 'Gentle exfoliant using sugar to polish and soften skin.',
        benefits: [
          'Smooths rough patches',
          'Hydrates and polishes skin',
          'Safe for sensitive areas',
        ],
        image:
          'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80',
      },
      {
        title: 'Traditional Scrub',
        price: 20000,
        description: 'Classic body scrub to exfoliate and boost skin renewal.',
        benefits: [
          'Removes dead skin buildup',
          'Stimulates lymphatic drainage',
          'Prepares skin for moisturizers',
        ],
        image:
          'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=800&q=80',
      },
      {
        title: 'Skin Tag Remover',
        price: 20000,
        description:
          'Professional removal of skin tags using safe, precise methods.',
        benefits: [
          'Quick outpatient procedure',
          'Minimizes scarring',
          'Restores smooth skin appearance',
        ],
        image:
          'https://images.unsplash.com/photo-1512252244593-9a1f5d7e9b5b?auto=format&fit=crop&w=800&q=80',
      },
      {
        title: 'Mole Remover',
        price: 15000,
        description: 'Per mole',
        image:
          'https://images.unsplash.com/photo-1582719478184-6f6ecf2e7f5a?auto=format&fit=crop&w=800&q=80',
      },
    ],
  },
  {
    category: 'Hand & Feet Care',
    items: [
      {
        title: 'Anti-fungal Pedicure',
        price: 30000,
        description:
          'A therapeutic pedicure focusing on antifungal care and hygiene.',
        benefits: [
          'Treats and prevents fungal infections',
          'Improves nail health',
          'Promotes long-term foot hygiene',
        ],
        image:
          'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=800&q=80',
      },
      {
        title: 'Paraffin Wax Pedicure',
        price: 28000,
        description:
          'Warm paraffin treatment to deeply hydrate and soothe feet.',
        benefits: [
          'Deeply moisturizes dry skin',
          'Soothes joint pain',
          'Improves skin softness',
        ],
        image:
          'https://images.unsplash.com/photo-1455263819725-1a1e4c67a0f8?auto=format&fit=crop&w=800&q=80',
      },
      {
        title: 'Detox Pedicure',
        price: 25000,
        description:
          'A purifying pedicure that detoxifies and refreshes tired feet.',
        benefits: [
          'Removes toxins and impurities',
          'Reduces swelling and fatigue',
          'Restores comfort to feet',
        ],
        image:
          'https://images.unsplash.com/photo-1542317854-2f64f3b0f1f7?auto=format&fit=crop&w=800&q=80',
      },
      {
        title: 'Jelly Pedicure',
        price: 15000,
        description:
          'A fun, soft-textured pedicure using jelly gel for a bouncy finish.',
        benefits: [
          'Unique soft finish',
          'Long-lasting color',
          'Comfortable and fun treatment',
        ],
        image:
          'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80',
      },
      {
        title: 'Classic Pedicure (Men)',
        price: 15000,
        description:
          'A traditional pedicure tailored for men for clean, maintained feet.',
        benefits: [
          'Nail and cuticle care',
          'Foot exfoliation',
          'Improves foot comfort and appearance',
        ],
        image:
          'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80',
      },
      {
        title: 'Classic Pedicure (Women)',
        price: 12500,
        description:
          'A classic pedicure for women focusing on beauty and comfort.',
        benefits: [
          'Smoothes and softens feet',
          'Neat nail shaping and polish',
          'Relaxing foot massage',
        ],
        image:
          'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
      },
      {
        title: 'Manicure',
        price: 7000,
        description:
          'Professional manicure for neat, healthy nails and cuticles.',
        benefits: [
          'Improves nail health',
          'Neat nail shaping and polish',
          'Hydrates cuticles and hands',
        ],
        image:
          'https://images.unsplash.com/photo-1541572702138-9c6c4d5c2c7f?auto=format&fit=crop&w=800&q=80',
      },
    ],
  },
]
