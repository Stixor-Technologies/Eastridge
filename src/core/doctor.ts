import doctor1 from '@/public/images/dr-zaid-ali-gorar.png';
import doctor2 from '@/public/images/dr-usman-ashraf.png';
import doctor3 from '@/public/images/dr-shiza-qureshi.png';
import doctor4 from '@/public/images/dr-kashif-siddiqui.png';
import doctor5 from '@/public/images/dr-imran-ashraf.png';
import award1 from '@/public/icons/nobel-price.svg';
import award2 from '@/public/icons/edison-award.svg';
import { StaticImageData } from 'next/image';

export interface Award {
  icon: StaticImageData;
  name: string;
  description: string;
}

export interface Doctor {
  id: string;
  name: string;
  description: string;
  biography: string;
  occupation: string;
  experience: string;
  certificates: string[];
  skills: string[];
  location: string;
  email: string;
  department: string;
  phoneNo: string;
  awards: Award[];
  hours: string;
  youtubeVideoLink: string;
  image: StaticImageData;
}

export const doctors: Doctor[] = [
  {
    id: '1',
    name: 'Dr. Zaid Ali Gorar',
    description: 'Specialist in Internal Medicine',
    biography: 'Dr. Zaid Ali Gorar is a highly experienced physician with over 15 years of practice in internal medicine. He is dedicated to providing comprehensive care to his patients.',
    occupation: 'Internal Medicine Specialist',
    experience: '15 years',
    certificates: [
      'MBBS - Dow University of Health Sciences',
      'FCPS Internal Medicine',
      'Board Certified Internal Medicine'
    ],
    skills: [
      'Diabetes Management',
      'Hypertension Treatment',
      'Preventive Medicine',
      'Critical Care'
    ],
    location: 'Main Campus, Eastridge Medical Center',
    email: 'dr.zaid@eastridge.com',
    department: 'Internal Medicine',
    phoneNo: '+1 (555) 123-4567',
    awards: [
      {
        icon: award1,
        name: 'Best Doctor Award 2023',
        description: 'Internal Medicine'
      },
      {
        icon: award2,
        name: 'Excellence in Patient Care 2022',
        description: 'Internal Medicine'
      }
    ],
    hours: 'Mon-Fri: 9:00 AM - 5:00 PM, Sat: 10:00 AM - 2:00 PM',
    youtubeVideoLink: 'https://youtu.be/Bsc5LEVjQx0',
    image: doctor1
  },
  {
    id: '2',
    name: 'Dr. Usman Ashraf',
    description: 'Cardiologist',
    biography: 'Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from.',
    occupation: 'Nephrology',
    experience: '20 years',
    certificates: [
      'Robert L. Nobel Price',
      'Edison Awards'
    ],
    skills: [
      'Working with both children and adults'
    ],
    location: '380 Albert ST, Melbourne',
    email: 'jessica@joan.com',
    department: 'Cardiology',
    phoneNo: '+1 (230)-369-155-23',
    awards: [
      {
        icon: award1,
        name: 'Robert L. Nobel Price',
        description: 'Canadian Cancer Society'
      },
      {
        icon: award2,
        name: 'Edison Awards',
        description: 'Research in Developmental'
      }
    ],
    hours: 'Mon-Thu: 8:00 AM - 4:00 PM, Fri: 9:00 AM - 1:00 PM',
    youtubeVideoLink: 'https://youtu.be/Bsc5LEVjQx0',
    image: doctor2
  },
  {
    id: '3',
    name: 'Dr. Shiza Qureshi',
    description: 'Pediatrician',
    biography: 'Dr. Shiza Qureshi is a compassionate pediatrician dedicated to the health and well-being of children from infancy through adolescence.',
    occupation: 'Pediatrician',
    experience: '10 years',
    certificates: [
      'MBBS - Aga Khan University',
      'FCPS Pediatrics',
      'Certified in Pediatric Emergency Medicine'
    ],
    skills: [
      'Child Development',
      'Vaccination Programs',
      'Pediatric Emergency Care',
      'Adolescent Medicine'
    ],
    location: 'Pediatrics Department, Eastridge Medical Center',
    email: 'dr.shiza@eastridge.com',
    department: 'Pediatrics',
    phoneNo: '+1 (555) 345-6789',
    awards: [
      {
        icon: award1,
        name: 'Best Pediatrician Award 2022',
        description: 'Pediatrics'
      },
      {
        icon: award2,
        name: 'Community Service Award 2020',
        description: 'Pediatrics'
      }
    ],
    hours: 'Mon-Fri: 10:00 AM - 6:00 PM, Sat: 9:00 AM - 1:00 PM',
    youtubeVideoLink: 'https://youtu.be/Bsc5LEVjQx0',
    image: doctor3
  },
  {
    id: '4',
    name: 'Dr. Kashif Siddiqui',
    description: 'Orthopedic Surgeon',
    biography: 'Dr. Kashif Siddiqui is a skilled orthopedic surgeon specializing in sports injuries and joint replacement procedures.',
    occupation: 'Orthopedic Surgeon',
    experience: '18 years',
    certificates: [
      'MBBS - Allama Iqbal Medical College',
      'FCPS Orthopedic Surgery',
      'Fellowship in Joint Replacement',
      'Sports Medicine Certification'
    ],
    skills: [
      'Joint Replacement Surgery',
      'Sports Injury Treatment',
      'Arthroscopic Surgery',
      'Fracture Management'
    ],
    location: 'Orthopedics Wing, Eastridge Medical Center',
    email: 'dr.kashif@eastridge.com',
    department: 'Orthopedics',
    phoneNo: '+1 (555) 456-7890',
    awards: [
      {
        icon: award1,
        name: 'Surgeon of the Year 2023',
        description: 'Orthopedics'
      },
      {
        icon: award2,
        name: 'Innovation in Orthopedics 2022',
        description: 'Orthopedics'
      }
    ],
    hours: 'Tue-Sat: 8:00 AM - 4:00 PM',
    youtubeVideoLink: 'https://youtu.be/Bsc5LEVjQx0',
    image: doctor4
  },
  {
    id: '5',
    name: 'Dr. Imran Ashraf',
    description: 'Neurologist',
    biography: 'Dr. Imran Ashraf is an expert neurologist with extensive experience in diagnosing and treating neurological disorders.',
    occupation: 'Neurologist',
    experience: '14 years',
    certificates: [
      'MBBS - Rawalpindi Medical College',
      'FCPS Neurology',
      'Fellowship in Clinical Neurophysiology',
      'Board Certified Neurologist'
    ],
    skills: [
      'Stroke Management',
      'Epilepsy Treatment',
      'Movement Disorders',
      'Headache and Migraine Management',
      'EEG Interpretation'
    ],
    location: 'Neurology Department, Eastridge Medical Center',
    email: 'dr.imran@eastridge.com',
    department: 'Neurology',
    phoneNo: '+1 (555) 567-8901',
    awards: [
      {
        icon: award1,
        name: 'Excellence in Neurology 2023',
        description: 'Neurology'
      },
      {
        icon: award2,
        name: 'Best Research Paper Award 2022',
        description: 'Neurology'
      }
    ],
    hours: 'Mon-Wed: 9:00 AM - 5:00 PM, Thu-Fri: 10:00 AM - 4:00 PM',
    youtubeVideoLink: 'https://www.youtube.com/watch?v=example5',
    image: doctor5
  },
    {
    id: '6',
    name: 'Dr. Zaid Ali Gorar',
    description: 'Specialist in Internal Medicine',
    biography: 'Dr. Zaid Ali Gorar is a highly experienced physician with over 15 years of practice in internal medicine. He is dedicated to providing comprehensive care to his patients.',
    occupation: 'Internal Medicine Specialist',
    experience: '15 years',
    certificates: [
      'MBBS - Dow University of Health Sciences',
      'FCPS Internal Medicine',
      'Board Certified Internal Medicine'
    ],
    skills: [
      'Diabetes Management',
      'Hypertension Treatment',
      'Preventive Medicine',
      'Critical Care'
    ],
    location: 'Main Campus, Eastridge Medical Center',
    email: 'dr.zaid@eastridge.com',
    department: 'Internal Medicine',
    phoneNo: '+1 (555) 123-4567',
    awards: [
      {
        icon: award1,
        name: 'Best Doctor Award 2023',
        description: 'Internal Medicine'
      },
      {
        icon: award2,
        name: 'Excellence in Patient Care 2022',
        description: 'Internal Medicine'
      }
    ],
    hours: 'Mon-Fri: 9:00 AM - 5:00 PM, Sat: 10:00 AM - 2:00 PM',
    youtubeVideoLink: 'https://www.youtube.com/watch?v=example1',
    image: doctor1
  },
  {
    id: '7',
    name: 'Dr. Usman Ashraf',
    description: 'Cardiologist',
    biography: 'Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from.',
    occupation: 'Nephrology',
    experience: '20 years',
    certificates: [
      'Robert L. Nobel Price',
      'Edison Awards'
    ],
    skills: [
      'Working with both children and adults'
    ],
    location: '380 Albert ST, Melbourne',
    email: 'jessica@joan.com',
    department: 'Cardiology',
    phoneNo: '+1 (230)-369-155-23',
    awards: [
      {
        icon: award1,
        name: 'Robert L. Nobel Price',
        description: 'Canadian Cancer Society'
      },
      {
        icon: award2,
        name: 'Edison Awards',
        description: 'Research in Developmental'
      }
    ],
    hours: 'Mon-Thu: 8:00 AM - 4:00 PM, Fri: 9:00 AM - 1:00 PM',
    youtubeVideoLink: 'https://www.youtube.com/watch?v=example2',
    image: doctor2
  },
  {
    id: '8',
    name: 'Dr. Shiza Qureshi',
    description: 'Pediatrician',
    biography: 'Dr. Shiza Qureshi is a compassionate pediatrician dedicated to the health and well-being of children from infancy through adolescence.',
    occupation: 'Pediatrician',
    experience: '10 years',
    certificates: [
      'MBBS - Aga Khan University',
      'FCPS Pediatrics',
      'Certified in Pediatric Emergency Medicine'
    ],
    skills: [
      'Child Development',
      'Vaccination Programs',
      'Pediatric Emergency Care',
      'Adolescent Medicine'
    ],
    location: 'Pediatrics Department, Eastridge Medical Center',
    email: 'dr.shiza@eastridge.com',
    department: 'Pediatrics',
    phoneNo: '+1 (555) 345-6789',
    awards: [
      {
        icon: award1,
        name: 'Best Pediatrician Award 2022',
        description: 'Pediatrics'
      },
      {
        icon: award2,
        name: 'Community Service Award 2020',
        description: 'Pediatrics'
      }
    ],
    hours: 'Mon-Fri: 10:00 AM - 6:00 PM, Sat: 9:00 AM - 1:00 PM',
    youtubeVideoLink: 'https://www.youtube.com/watch?v=example3',
    image: doctor3
  },
  {
    id: '9',
    name: 'Dr. Kashif Siddiqui',
    description: 'Orthopedic Surgeon',
    biography: 'Dr. Kashif Siddiqui is a skilled orthopedic surgeon specializing in sports injuries and joint replacement procedures.',
    occupation: 'Orthopedic Surgeon',
    experience: '18 years',
    certificates: [
      'MBBS - Allama Iqbal Medical College',
      'FCPS Orthopedic Surgery',
      'Fellowship in Joint Replacement',
      'Sports Medicine Certification'
    ],
    skills: [
      'Joint Replacement Surgery',
      'Sports Injury Treatment',
      'Arthroscopic Surgery',
      'Fracture Management'
    ],
    location: 'Orthopedics Wing, Eastridge Medical Center',
    email: 'dr.kashif@eastridge.com',
    department: 'Orthopedics',
    phoneNo: '+1 (555) 456-7890',
    awards: [
      {
        icon: award1,
        name: 'Surgeon of the Year 2023',
        description: 'Orthopedics'
      },
      {
        icon: award2,
        name: 'Innovation in Orthopedics 2022',
        description: 'Orthopedics'
      }
    ],
    hours: 'Tue-Sat: 8:00 AM - 4:00 PM',
    youtubeVideoLink: 'https://www.youtube.com/watch?v=example4',
    image: doctor4
  },
  {
    id: '10',
    name: 'Dr. Imran Ashraf',
    description: 'Neurologist',
    biography: 'Dr. Imran Ashraf is an expert neurologist with extensive experience in diagnosing and treating neurological disorders.',
    occupation: 'Neurologist',
    experience: '14 years',
    certificates: [
      'MBBS - Rawalpindi Medical College',
      'FCPS Neurology',
      'Fellowship in Clinical Neurophysiology',
      'Board Certified Neurologist'
    ],
    skills: [
      'Stroke Management',
      'Epilepsy Treatment',
      'Movement Disorders',
      'Headache and Migraine Management',
      'EEG Interpretation'
    ],
    location: 'Neurology Department, Eastridge Medical Center',
    email: 'dr.imran@eastridge.com',
    department: 'Neurology',
    phoneNo: '+1 (555) 567-8901',
    awards: [
      {
        icon: award1,
        name: 'Excellence in Neurology 2023',
        description: 'Neurology'
      },
      {
        icon: award2,
        name: 'Best Research Paper Award 2022',
        description: 'Neurology'
      }
    ],
    hours: 'Mon-Wed: 9:00 AM - 5:00 PM, Thu-Fri: 10:00 AM - 4:00 PM',
    youtubeVideoLink: 'https://www.youtube.com/watch?v=example5',
    image: doctor5
  },
    {
    id: '11',
    name: 'Dr. Zaid Ali Gorar',
    description: 'Specialist in Internal Medicine',
    biography: 'Dr. Zaid Ali Gorar is a highly experienced physician with over 15 years of practice in internal medicine. He is dedicated to providing comprehensive care to his patients.',
    occupation: 'Internal Medicine Specialist',
    experience: '15 years',
    certificates: [
      'MBBS - Dow University of Health Sciences',
      'FCPS Internal Medicine',
      'Board Certified Internal Medicine'
    ],
    skills: [
      'Diabetes Management',
      'Hypertension Treatment',
      'Preventive Medicine',
      'Critical Care'
    ],
    location: 'Main Campus, Eastridge Medical Center',
    email: 'dr.zaid@eastridge.com',
    department: 'Internal Medicine',
    phoneNo: '+1 (555) 123-4567',
    awards: [
      {
        icon: award1,
        name: 'Best Doctor Award 2023',
        description: 'Internal Medicine'
      },
      {
        icon: award2,
        name: 'Excellence in Patient Care 2022',
        description: 'Internal Medicine'
      }
    ],
    hours: 'Mon-Fri: 9:00 AM - 5:00 PM, Sat: 10:00 AM - 2:00 PM',
    youtubeVideoLink: 'https://www.youtube.com/watch?v=example1',
    image: doctor1
  },
  {
    id: '12',
    name: 'Dr. Usman Ashraf',
    description: 'Cardiologist',
    biography: 'Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from.',
    occupation: 'Nephrology',
    experience: '20 years',
    certificates: [
      'Robert L. Nobel Price',
      'Edison Awards'
    ],
    skills: [
      'Working with both children and adults'
    ],
    location: '380 Albert ST, Melbourne',
    email: 'jessica@joan.com',
    department: 'Cardiology',
    phoneNo: '+1 (230)-369-155-23',
    awards: [
      {
        icon: award1,
        name: 'Robert L. Nobel Price',
        description: 'Canadian Cancer Society'
      },
      {
        icon: award2,
        name: 'Edison Awards',
        description: 'Research in Developmental'
      }
    ],
    hours: 'Mon-Thu: 8:00 AM - 4:00 PM, Fri: 9:00 AM - 1:00 PM',
    youtubeVideoLink: 'https://www.youtube.com/watch?v=example2',
    image: doctor2
  },
  {
    id: '13',
    name: 'Dr. Shiza Qureshi',
    description: 'Pediatrician',
    biography: 'Dr. Shiza Qureshi is a compassionate pediatrician dedicated to the health and well-being of children from infancy through adolescence.',
    occupation: 'Pediatrician',
    experience: '10 years',
    certificates: [
      'MBBS - Aga Khan University',
      'FCPS Pediatrics',
      'Certified in Pediatric Emergency Medicine'
    ],
    skills: [
      'Child Development',
      'Vaccination Programs',
      'Pediatric Emergency Care',
      'Adolescent Medicine'
    ],
    location: 'Pediatrics Department, Eastridge Medical Center',
    email: 'dr.shiza@eastridge.com',
    department: 'Pediatrics',
    phoneNo: '+1 (555) 345-6789',
    awards: [
      {
        icon: award1,
        name: 'Best Pediatrician Award 2022',
        description: 'Pediatrics'
      },
      {
        icon: award2,
        name: 'Community Service Award 2020',
        description: 'Pediatrics'
      }
    ],
    hours: 'Mon-Fri: 10:00 AM - 6:00 PM, Sat: 9:00 AM - 1:00 PM',
    youtubeVideoLink: 'https://www.youtube.com/watch?v=example3',
    image: doctor3
  },
  {
    id: '14',
    name: 'Dr. Kashif Siddiqui',
    description: 'Orthopedic Surgeon',
    biography: 'Dr. Kashif Siddiqui is a skilled orthopedic surgeon specializing in sports injuries and joint replacement procedures.',
    occupation: 'Orthopedic Surgeon',
    experience: '18 years',
    certificates: [
      'MBBS - Allama Iqbal Medical College',
      'FCPS Orthopedic Surgery',
      'Fellowship in Joint Replacement',
      'Sports Medicine Certification'
    ],
    skills: [
      'Joint Replacement Surgery',
      'Sports Injury Treatment',
      'Arthroscopic Surgery',
      'Fracture Management'
    ],
    location: 'Orthopedics Wing, Eastridge Medical Center',
    email: 'dr.kashif@eastridge.com',
    department: 'Orthopedics',
    phoneNo: '+1 (555) 456-7890',
    awards: [
      {
        icon: award1,
        name: 'Surgeon of the Year 2023',
        description: 'Orthopedics'
      },
      {
        icon: award2,
        name: 'Innovation in Orthopedics 2022',
        description: 'Orthopedics'
      }
    ],
    hours: 'Tue-Sat: 8:00 AM - 4:00 PM',
    youtubeVideoLink: 'https://www.youtube.com/watch?v=example4',
    image: doctor4
  },
  {
    id: '15',
    name: 'Dr. Imran Ashraf',
    description: 'Neurologist',
    biography: 'Dr. Imran Ashraf is an expert neurologist with extensive experience in diagnosing and treating neurological disorders.',
    occupation: 'Neurologist',
    experience: '14 years',
    certificates: [
      'MBBS - Rawalpindi Medical College',
      'FCPS Neurology',
      'Fellowship in Clinical Neurophysiology',
      'Board Certified Neurologist'
    ],
    skills: [
      'Stroke Management',
      'Epilepsy Treatment',
      'Movement Disorders',
      'Headache and Migraine Management',
      'EEG Interpretation'
    ],
    location: 'Neurology Department, Eastridge Medical Center',
    email: 'dr.imran@eastridge.com',
    department: 'Neurology',
    phoneNo: '+1 (555) 567-8901',
    awards: [
      {
        icon: award1,
        name: 'Excellence in Neurology 2023',
        description: 'Neurology'
      },
      {
        icon: award2,
        name: 'Best Research Paper Award 2022',
        description: 'Neurology'
      }
    ],
    hours: 'Mon-Wed: 9:00 AM - 5:00 PM, Thu-Fri: 10:00 AM - 4:00 PM',
    youtubeVideoLink: 'https://www.youtube.com/watch?v=example5',
    image: doctor5
  },
   {
    id: '16',
    name: 'Dr. Usman Ashraf',
    description: 'Cardiologist',
    biography: 'Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from.',
    occupation: 'Nephrology',
    experience: '20 years',
    certificates: [
      'Robert L. Nobel Price',
      'Edison Awards'
    ],
    skills: [
      'Working with both children and adults'
    ],
    location: '380 Albert ST, Melbourne',
    email: 'jessica@joan.com',
    department: 'Cardiology',
    phoneNo: '+1 (230)-369-155-23',
    awards: [
      {
        icon: award1,
        name: 'Robert L. Nobel Price',
        description: 'Canadian Cancer Society'
      },
      {
        icon: award2,
        name: 'Edison Awards',
        description: 'Research in Developmental'
      }
    ],
    hours: 'Mon-Thu: 8:00 AM - 4:00 PM, Fri: 9:00 AM - 1:00 PM',
    youtubeVideoLink: 'https://www.youtube.com/watch?v=example2',
    image: doctor2
  }
];