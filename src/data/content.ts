import { 
  Building2, 
  HardHat, 
  Truck, 
  ShieldCheck, 
  Wrench, 
  Utensils
} from 'lucide-react';

// FIX: Added 'type' keyword here to prevent the runtime error
import type { CompanyInfo, Project, ServiceCategory } from '../types';

export const COMPANY_INFO: CompanyInfo = {
  name: "Vcat Properties Management (Pty) Ltd",
  tagline: "Quality Professional Management & Services",
  regNo: "2024/039818/07",
  taxNo: "9575025201",
  bbbee: "9401453119",
  phone: "073 344 4268",
  email: "pieter.mufamadi@gmail.com",
  address: "700 Steve Biko Road, Wonderboom South, Gezina, Pretoria, 0184",
  postalAddress: "700 Steve Biko Road, Wonderboom South, Gezina, 0184",
  director: "Mr. T.P Mufamadi"
};

export const SERVICES_DATA: ServiceCategory[] = [
  {
    title: "Property & Accommodation",
    icon: Building2,
    items: [
      "Student Accommodation Agency",
      "Property Sales & Management",
      "Estate & Building Management",
      "Accommodations & Lodge"
    ]
  },
  {
    title: "Civil Construction",
    icon: HardHat,
    items: [
      "Civil Construction & Works",
      "Paving & Kerbs",
      "Pipeline & Sewer Pipe Installation",
      "Subsoil Drains & Ducting",
    ]
  },
  {
    title: "Maintenance & Technical",
    icon: Wrench,
    items: [
      "Building Maintenance & Repairs",
      "Electrical Installations (COC)",
      "Plumbing (Underground)",
      "Building Innovation",
    ]
  },
  {
    title: "Logistics & Support",
    icon: Truck,
    items: [
      "Student Transportation",
      "Logistics Solutions",
      "Private & Company Organized Trips",
      "Student Support Agency"
    ]
  },
  {
    title: "General Services",
    icon: ShieldCheck,
    items: [
      "Cleaning Services",
      "Pest Control",
      "Security Services",
      "Corporate Marketing",
    ]
  },
  {
    title: "Supply & Catering",
    icon: Utensils,
    items: [
      "Catering Services",
      "Supply in General",
      "Poultry & Farming",
    ]
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    title: "Concrete Pipeline Infrastructure",
    category: "Civil Works",
    description: "Installation of large-scale concrete pipelines and trenching systems for municipal infrastructure.",
  },
  {
    title: "Road Guardrails & Paving",
    category: "Construction",
    description: "Installation of steel guardrails and extensive paving for road safety and pedestrian walkways.",
  },
  {
    title: "Water & Sanitation",
    category: "Plumbing",
    description: "Subsoil drains, blue PVC piping installations, and underground plumbing networks.",
  },
  {
    title: "Trenching & Excavation",
    category: "Civil Works",
    description: "Deep trench excavation and ground preparation for utility installations.",
  },
  {
    title: "Building Management",
    category: "Property",
    description: "Comprehensive management of residential and student accommodation complexes.",
  },
  {
    title: "Electrical & Maintenance",
    category: "Maintenance",
    description: "General building repairs and electrical installations with COC certification.",
  }
];