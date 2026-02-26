import { 
  Building2, 
  HardHat, 
  Truck, 
  ShieldCheck, 
  Wrench, 
  Utensils
} from 'lucide-react';

import type { CompanyInfo, Project, ServiceCategory } from '../types';

import res from "../assets/images/res.webp";
import laundry from "../assets/images/laundry.webp";
import bedroom  from "../assets/images/bedroom.webp";
import study from "../assets/images/study.webp";
import student from "../assets/images/student.webp";
import students from "../assets/images/students.webp";
import student2 from "../assets/images/students2.webp";
import student3 from "../assets/images/students3.webp";
import student4 from "../assets/images/students4.webp";

import paving from "../assets/images/paving.webp";
import paving1 from "../assets/images/paving1.webp";
import paving2 from "../assets/images/paving2.webp";
import paving3 from "../assets/images/paving3.webp";
import paving4 from "../assets/images/paving4.webp";

import pipe from "../assets/images/pipe.webp";
import pipe1 from "../assets/images/pipe1.webp";
import pipe2 from "../assets/images/pipe2.webp";

import aircon from "../assets/images/aircon.webp";
import maintain from "../assets/images/maintain.webp";
import maintain1 from "../assets/images/maintain1.webp";

import electric from "../assets/images/electric.webp";
import electric1 from "../assets/images/electric1.webp";



import trench from "../assets/images/trench.webp";
import trench1 from "../assets/images/trench1.webp";
import trench2 from "../assets/images/trench2.webp";
import trench3 from "../assets/images/trench3.webp";
import trench4 from "../assets/images/trench4.webp";

import plumbing from "../assets/images/plumbing.webp";
import plumbing1 from "../assets/images/plumbing1.webp";
import plumbing2 from "../assets/images/plumbing2.webp";
import plumbing3 from "../assets/images/plumbing3.webp";
import plumbing5 from "../assets/images/plumbing5.webp";
import plumbing6 from "../assets/images/plumbing6.webp";

import rail from "../assets/images/rail.webp";
import rail1 from "../assets/images/rail1.webp";
import rail2 from "../assets/images/rail2.webp";

import transport from "../assets/images/transport.webp";
import transport1 from "../assets/images/transport1.webp";
import transport2 from "../assets/images/transport2.webp";
import transport3 from "../assets/images/transport3.webp";
import transport14 from "../assets/images/transport4.webp";
import transport5 from "../assets/images/transport5.webp";
import transport6 from "../assets/images/transport6.webp";
import transport7 from "../assets/images/transport7.webp";
import transport8 from "../assets/images/transport8.webp";



export const COMPANY_INFO: CompanyInfo = {
  name: "Vcat Properties Management (Pty) Ltd",
  tagline: "Quality Professional Management & Services",
  regNo: "2024/039818/07",
  taxNo: "9575025201",
  bbbee: "9401453119",
  phone: "073 344 4268",
  email: "pieter.mufamadi@gmail.com",
  address: "156 Francis baard Pretoria cbd 0002",
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

// UPDATED: Added 'images' array to each project
export const PROJECTS_DATA: Project[] = [
  {
    title: "Concrete Pipeline Infrastructure",
    category: "Civil Works",
    description: "Installation of large-scale concrete pipelines and trenching systems for municipal infrastructure.",
    images: [
      pipe,
      pipe1,
      pipe2,
      
    ]
  },
  {
    title: "Road Guardrails & Paving",
    category: "Construction",
    description: "Installation of steel guardrails and extensive paving for road safety and pedestrian walkways.",
    images: [
      rail,
      rail1,
      rail2,
      paving,
      paving1,
      paving2,
      paving3,
      paving4,
      
    ]
  },
  {
    title: "Water & Sanitation",
    category: "Plumbing",
    description: "Subsoil drains, blue PVC piping installations, and underground plumbing networks.",
    images: [
      plumbing,
      plumbing1,
      plumbing2,
      plumbing3,
      plumbing5,
      plumbing6,
    ]
  },
  {
    title: "Trenching & Excavation",
    category: "Civil Works",
    description: "Deep trench excavation and ground preparation for utility installations.",
    images: [
      trench,
      trench1,
      trench2,
      trench3,
      trench4,
    ]
  },
  {
    title: "Building Management",
    category: "Property",
    description: "Comprehensive management of residential and student accommodation complexes.",
    images: [
      res,
      bedroom, 
      study, 
      laundry,
      student,
      students,
      student2,
      student3,
      student4
    ]
  },
  {
    title: "Electrical & Maintenance",
    category: "Maintenance",
    description: "General building repairs and electrical installations with COC certification.",
    images: [
      electric,
      electric1,
      aircon,
      maintain,
      maintain1
    ]
  },
  {
    title: "Student Transport & Logistics",
    category: "Logistics",
    description: "Reliable student transportation services and organized group trips, ensuring safe and punctual transit for educational institutions.",
    images: [
     transport,
     transport1,
     transport2,
     transport3,
     transport14,
     transport5,
     transport6,
     transport7,
      transport8
    ]
  },
];