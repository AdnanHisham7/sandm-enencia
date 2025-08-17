import { Product, Category } from '../types';

export const categories: Category[] = [
  { id: '1', name: 'Toilets', slug: 'toilets' },
  { id: '2', name: 'Basins', slug: 'basins' },
  { id: '3', name: 'One Piece Closets', slug: 'one-piece-closets' },
  { id: '4', name: 'One Piece Basins', slug: 'one-piece-basins' },
  { id: '5', name: 'Half One Piece Basins', slug: 'half-one-piece-basins' },
  { id: '6', name: 'Table Top Basins', slug: 'table-top-basins' },
  { id: '7', name: 'Table Top Basins (Black)', slug: 'table-top-black' },
  { id: '8', name: 'Table Top Basins (Colored Series)', slug: 'table-top-colored' },
  { id: '9', name: 'Counter Basins', slug: 'counter-basins' },
  { id: '10', name: 'Wash Half Pedestal', slug: 'wash-half-pedestal' },
  { id: '11', name: 'Wall Hung Closet', slug: 'wall-hung-closet' },
  { id: '12', name: 'One Piece Closets (White)', slug: 'one-piece-white' },
  { id: '13', name: 'One Piece Closets (Black)', slug: 'one-piece-black' },
  { id: '14', name: 'One Piece Closets (Colored)', slug: 'one-piece-colored' },
  { id: '15', name: 'Water Closets', slug: 'water-closets' },
  { id: '16', name: 'Urinals', slug: 'urinals' }
];

export const products: Product[] = [
  {
    id: '1',
    name: 'Elite Wall Hung Toilet',
    description: 'A premium wall-hung toilet featuring advanced flush technology and contemporary design. This model combines luxury aesthetics with exceptional functionality, making it perfect for modern architectural spaces.',
    shortDescription: 'Premium wall-hung toilet with advanced flush technology',
    images: [
      'https://images.pexels.com/photos/6782432/pexels-photo-6782432.jpeg',
      'https://images.pexels.com/photos/6782584/pexels-photo-6782584.jpeg'
    ],
    sketchImages: [
      'https://images.pexels.com/photos/8134851/pexels-photo-8134851.jpeg'
    ],
    specifications: [
      'Water Efficient: 4.5L/3L dual flush',
      'Wall-hung design saves space',
      'Soft-close seat included',
      'Easy-clean ceramic coating',
      'Concealed tank system',
      'Modern rectangular bowl'
    ],
    category: categories[10],
    featured: true,
    createdAt: new Date('2024-01-15')
  },
  {
    id: '2',
    name: 'Signature Ceramic Basin',
    description: 'Elegantly crafted ceramic basin with superior finish and durability. This basin represents the perfect marriage of form and function, designed for discerning customers who appreciate quality craftsmanship.',
    shortDescription: 'Elegantly crafted ceramic basin with superior finish',
    images: [
      'https://images.pexels.com/photos/6782437/pexels-photo-6782437.jpeg',
      'https://images.pexels.com/photos/7534550/pexels-photo-7534550.jpeg'
    ],
    sketchImages: [
      'https://images.pexels.com/photos/8134849/pexels-photo-8134849.jpeg'
    ],
    specifications: [
      'Premium ceramic construction',
      'Overflow protection',
      'Scratch-resistant surface',
      'Single tap hole',
      'Contemporary oval design',
      'Easy maintenance coating'
    ],
    category: categories[1],
    featured: true,
    createdAt: new Date('2024-01-20')
  },
  {
    id: '3',
    name: 'Luxe One Piece Toilet',
    description: 'Seamless one-piece toilet design offering unmatched hygiene and contemporary styling. Engineered for performance and designed for beauty, this toilet sets new standards in bathroom luxury.',
    shortDescription: 'Seamless one-piece toilet with contemporary styling',
    images: [
      'https://images.pexels.com/photos/6782438/pexels-photo-6782438.jpeg',
      'https://images.pexels.com/photos/6782588/pexels-photo-6782588.jpeg'
    ],
    sketchImages: [
      'https://images.pexels.com/photos/8134850/pexels-photo-8134850.jpeg'
    ],
    specifications: [
      'One-piece seamless design',
      'Dual flush technology',
      'Elongated comfort height',
      'Glazed trapway',
      'Anti-bacterial surface',
      'Water-efficient operation'
    ],
    category: categories[2],
    featured: true,
    createdAt: new Date('2024-01-25')
  },
  {
    id: '4',
    name: 'Premium Table Top Basin',
    description: 'Sophisticated table top basin perfect for modern vanity installations. This piece combines architectural beauty with practical functionality.',
    shortDescription: 'Sophisticated table top basin for modern installations',
    images: [
      'https://images.pexels.com/photos/6969999/pexels-photo-6969999.jpeg'
    ],
    sketchImages: [],
    specifications: [
      'Table top installation',
      'Modern geometric design',
      'Premium ceramic finish',
      'Single faucet hole',
      'Drain assembly included'
    ],
    category: categories[5],
    createdAt: new Date('2024-02-01')
  },
  {
    id: '5',
    name: 'Designer Black Basin',
    description: 'Bold black ceramic basin that makes a striking design statement while maintaining superior functionality.',
    shortDescription: 'Bold black ceramic basin with striking design',
    images: [
      'https://images.pexels.com/photos/6782434/pexels-photo-6782434.jpeg'
    ],
    sketchImages: [],
    specifications: [
      'Matte black finish',
      'Stain-resistant coating',
      'Contemporary design',
      'Easy-clean surface',
      'Durable construction'
    ],
    category: categories[6],
    featured: true,
    createdAt: new Date('2024-02-05')
  },
  {
    id: '6',
    name: 'Executive Urinal',
    description: 'Commercial-grade urinal designed for high-traffic environments with water-saving technology.',
    shortDescription: 'Commercial-grade urinal with water-saving technology',
    images: [
      'https://images.pexels.com/photos/6782439/pexels-photo-6782439.jpeg'
    ],
    sketchImages: [],
    specifications: [
      'Water-efficient flush',
      'Commercial durability',
      'Anti-bacterial glaze',
      'Easy maintenance',
      'Modern profile design'
    ],
    category: categories[15],
    createdAt: new Date('2024-02-10')
  }
];