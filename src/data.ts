import { Business, Category } from './types';

export const CATEGORIES: { name: Category; icon: string }[] = [
  { name: 'Restaurants', icon: 'Utensils' },
  { name: 'Cafes', icon: 'Coffee' },
  { name: 'Food Delivery', icon: 'Bike' },
  { name: 'Beauty Services', icon: 'Sparkles' },
  { name: 'Cleaning Services', icon: 'Trash2' },
  { name: 'Home Repair', icon: 'Wrench' },
  { name: 'Fitness Trainers', icon: 'Dumbbell' },
  { name: 'IT Services', icon: 'Monitor' },
  { name: 'Health and Wellness', icon: 'Heart' },
];

export const MOCK_BUSINESSES: Business[] = [
  {
    id: '1',
    name: 'Zazu Quito',
    category: 'Restaurants',
    rating: 4.9,
    reviewCount: 450,
    description: 'Contemporary Latin American cuisine. One of the best fine dining experiences in Quito.',
    location: 'Mariano Aguilera, Quito',
    city: 'Quito',
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=800&q=80',
    tags: ['Fine Dining', 'Contemporary', 'Latin'],
    priceRange: '$$$$',
    coordinates: { lat: -0.1807, lng: -78.4842 },
    menu: [
      { name: 'Tasting Menu', price: 85.00, description: '7-course journey through Ecuadorian flavors.' },
      { name: 'Ceviche Zazu', price: 18.00, description: 'Fresh catch with unique citrus blend.' }
    ],
    reviews: [
      { id: 'r1', userName: 'Carlos E.', rating: 5, comment: 'Exceptional service and food.', date: '2024-03-10' }
    ]
  },
  {
    id: '2',
    name: 'Casa Gangotena Restaurant',
    category: 'Restaurants',
    rating: 4.8,
    reviewCount: 320,
    description: 'Elegant dining in a historic mansion overlooking Plaza San Francisco.',
    location: 'Bolivar, Quito',
    city: 'Quito',
    image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=800&q=80',
    tags: ['Historic', 'Elegant', 'Traditional'],
    priceRange: '$$$$',
    coordinates: { lat: -0.2202, lng: -78.5153 },
    menu: [
      { name: 'Quiteño High Tea', price: 25.00, description: 'Traditional afternoon tea service.' }
    ],
    reviews: []
  },
  {
    id: '3',
    name: 'La Briciola Ristorante',
    category: 'Restaurants',
    rating: 4.7,
    reviewCount: 280,
    description: 'Authentic Italian flavors in a cozy, garden-like setting.',
    location: 'Isabel La Católica, Quito',
    city: 'Quito',
    image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=80',
    tags: ['Italian', 'Garden', 'Romantic'],
    priceRange: '$$$',
    coordinates: { lat: -0.2050, lng: -78.4850 },
    reviews: []
  },
  {
    id: '4',
    name: 'Segundo Muelle',
    category: 'Restaurants',
    rating: 4.6,
    reviewCount: 540,
    description: 'Renowned Peruvian seafood and ceviches with a modern twist.',
    location: 'Av. Francisco de Orellana, Guayaquil',
    city: 'Guayaquil',
    image: 'https://images.unsplash.com/photo-1534080564607-c9275445f29c?auto=format&fit=crop&w=800&q=80',
    tags: ['Seafood', 'Peruvian', 'Modern'],
    priceRange: '$$$',
    coordinates: { lat: -2.1584, lng: -79.8917 },
    reviews: []
  },
  {
    id: '5',
    name: 'La Purísima',
    category: 'Restaurants',
    rating: 4.7,
    reviewCount: 190,
    description: 'Creative Ecuadorian cuisine inspired by traditional recipes.',
    location: 'Calle Larga, Cuenca',
    city: 'Cuenca',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80',
    tags: ['Creative', 'Local', 'Artisanal'],
    priceRange: '$$',
    coordinates: { lat: -2.9020, lng: -79.0060 },
    reviews: []
  },
  {
    id: '6',
    name: 'Quito Home Cleaning',
    category: 'Cleaning Services',
    rating: 4.9,
    reviewCount: 150,
    description: 'Professional and reliable residential cleaning services in the Quito metropolitan area.',
    location: 'Av. Amazonas, Quito',
    city: 'Quito',
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80',
    tags: ['Residential', 'Reliable', 'Eco-friendly'],
    priceRange: '$$',
    coordinates: { lat: -0.1850, lng: -78.4800 },
    services: [
      { name: 'Standard Cleaning', price: 35.00, duration: '3 hours' },
      { name: 'Deep Cleaning', price: 70.00, duration: '6 hours' }
    ],
    reviews: []
  },
  {
    id: '7',
    name: 'Elite Beauty Studio',
    category: 'Beauty Services',
    rating: 4.8,
    reviewCount: 210,
    description: 'Full-service beauty salon specializing in hair, nails, and skin care.',
    location: 'Samborondón, Guayaquil',
    city: 'Guayaquil',
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80',
    tags: ['Hair', 'Nails', 'Skincare'],
    priceRange: '$$$',
    coordinates: { lat: -2.1450, lng: -79.8650 },
    services: [
      { name: 'Haircut & Styling', price: 45.00, duration: '1 hour' },
      { name: 'Manicure', price: 20.00, duration: '45 min' }
    ],
    reviews: []
  },
  {
    id: '8',
    name: 'Andes Fitness Coaching',
    category: 'Fitness Trainers',
    rating: 5.0,
    reviewCount: 85,
    description: 'Personalized fitness training and nutritional guidance to reach your health goals.',
    location: 'Cumbayá, Quito',
    city: 'Quito',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80',
    tags: ['Personal Training', 'Nutrition', 'Results'],
    priceRange: '$$$',
    coordinates: { lat: -0.2000, lng: -78.4350 },
    services: [
      { name: '1-on-1 Session', price: 30.00, duration: '1 hour' },
      { name: 'Monthly Coaching', price: 200.00, duration: '1 month' }
    ],
    reviews: []
  },
  {
    id: '9',
    name: 'Urban Handyman Services',
    category: 'Home Repair',
    rating: 4.7,
    reviewCount: 120,
    description: 'Quick and efficient home repairs, from plumbing to electrical work.',
    location: 'La Floresta, Quito',
    city: 'Quito',
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80',
    tags: ['Plumbing', 'Electrical', 'General Repairs'],
    priceRange: '$$',
    coordinates: { lat: -0.2100, lng: -78.4850 },
    services: [
      { name: 'Hourly Rate', price: 25.00, duration: '1 hour' }
    ],
    reviews: []
  },
  {
    id: '10',
    name: 'Ecuador Tech Repair',
    category: 'IT Services',
    rating: 4.8,
    reviewCount: 95,
    description: 'Expert repair services for laptops, smartphones, and other electronic devices.',
    location: 'Av. 10 de Agosto, Quito',
    city: 'Quito',
    image: 'https://images.unsplash.com/photo-1597733336794-12d05021d510?auto=format&fit=crop&w=800&q=80',
    tags: ['Laptop Repair', 'Smartphone', 'Data Recovery'],
    priceRange: '$$',
    coordinates: { lat: -0.1900, lng: -78.4900 },
    services: [
      { name: 'Diagnostic', price: 15.00, duration: '30 min' },
      { name: 'Screen Replacement', price: 80.00, duration: '2 hours' }
    ],
    reviews: []
  }
];
