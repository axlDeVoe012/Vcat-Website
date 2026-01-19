import React from 'react';

export interface CompanyInfo {
  name: string;
  regNo: string;
  taxNo: string;
  bbbee: string;
  phone: string;
  email: string;
  address: string;
  postalAddress: string;
  director: string;
  tagline: string;
}

export interface ServiceCategory {
  title: string;
  // Changed from LucideIcon to React.ElementType to fix the import error
  icon: React.ElementType; 
  items: string[];
}

export interface Project {
  title: string;
  category: string;
  description: string;
  // In a real app, you would have an actual image path here
  imagePlaceholderColor?: string; 
}