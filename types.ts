
import React from 'react';

export interface Service {
  id: string;
  name: string;
  description: string;
  fullDescription: string;
  icon: React.ReactNode;
  image: string;
  features: string[];
}

export interface Product {
  id: string;
  name: string;
  description: string;
  fullDescription: string;
  image: string;
  gallery: string[];
  specs: Record<string, string>;
  features: string[];
}

export interface TeamMember {
  id: string;
  name: string;
  designation: string;
  photo: string;
  bio: string;
  socials: { facebook?: string; twitter?: string; linkedin?: string };
}

export interface Testimonial {
  id: string;
  clientName: string;
  companyName: string;
  photo?: string;
  text: string;
  rating: number;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Milestone {
  year: string;
  achievement: string;
}
