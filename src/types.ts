import { LucideIcon } from 'lucide-react';

export type Category = 
  | 'Restaurants' 
  | 'Cafes' 
  | 'Food Delivery' 
  | 'Beauty Services' 
  | 'Cleaning Services' 
  | 'Home Repair' 
  | 'Fitness Trainers' 
  | 'IT Services' 
  | 'Health and Wellness';

export interface Business {
  id: string;
  name: string;
  category: Category;
  rating: number;
  reviewCount: number;
  description: string;
  location: string;
  city: string;
  image: string;
  tags: string[];
  priceRange?: string;
  coordinates: { lat: number; lng: number };
  menu?: MenuItem[];
  services?: ServiceItem[];
  reviews: Review[];
}

export interface MenuItem {
  name: string;
  price: number;
  description: string;
}

export interface ServiceItem {
  name: string;
  price: number;
  duration: string;
}

export interface Review {
  id: string;
  userName: string;
  rating: number;
  comment: string;
  date: string;
  reply?: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'user' | 'business' | 'admin';
  avatar: string;
}
