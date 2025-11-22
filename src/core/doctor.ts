//import award1 from "@/public/icons/nobel-price.svg";
//import award2 from "@/public/icons/edison-award.svg";

import asim_naqvi from "@/public/images/optimized/doctors/asim_naqvi.jpg";
import ayesha_intekhab from "@/public/images/optimized/doctors/ayesha_intekhab.jpg";
//import batool_butt from "@/public/images/optimized/doctors/batool_butt.jpg";
import imran_ashraf from "@/public/images/optimized/doctors/imran_ashraf.jpg";
//import irfan_saeed from "@/public/images/optimized/doctors/irfan_saeed.jpg";
import maham_tariq from "@/public/images/optimized/doctors/maham_tariq.jpg";
import nadeem_akhtar from "@/public/images/optimized/doctors/nadeem_akhtar.jpg";
import naeem_zia from "@/public/images/optimized/doctors/naeem_zia.jpg";
import nighat_shaheen from "@/public/images/optimized/doctors/nighat_shaheen.jpg";
import riffat_najeeb from "@/public/images/optimized/doctors/riffat_najeeb.jpg";
import sadia_chaudhry from "@/public/images/optimized/doctors/sadia_chaudhry.jpg";
import saima_shafait from "@/public/images/optimized/doctors/saima_shafait.jpg";
import sana_qaiser from "@/public/images/optimized/doctors/sana_qaiser.jpg";
import zameer_ahmad from "@/public/images/optimized/doctors/zameer_ahmad.jpg";

import { StaticImageData } from "next/image";

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
  qualifications: string[];
  certificates: string[];
  skills: string[];
  location: string;
  //email: string;
  department: string;
  phoneNo: string;
  //awards: Award[];
  //hours: string;
  youtubeVideoLink: string;
  image: StaticImageData;
}

export const doctors: Doctor[] = [
  {
    id: "1",
    name: "Prof. Dr Naeem Zia",
    description: "General Surgeon",
    biography:
      "Professor Naeem Zia is a highly accomplished and experienced surgeon with a distinguished career in both academic and clinical practice. He has served as the Dean of Surgery at Rawalpindi Medical University, reinforcing his leadership in medical education and surgical excellence. Throughout his career, he has mentored over one hundred surgeons in MS and FCPS programs and served as a master trainer in the Minimal Invasive Surgery Training Lab, educating surgeons from across Pakistan. Now retired from academia, Professor Zia continues to offer his expertise in private practice, bringing decades of surgical experience and patient care to his community.",
    occupation: "MBBS, FCPS Surgery, FRCS, FACS",
    qualifications: [
      "MBBS - Rawalpindi Medical College, 1987",
      "FCPS - Fellow of the College of Physicians and Surgeons Pakistan, 1994",
      "FRCS - Fellow of the Royal College of Surgeons, 2010",
      "FACS - Fellow of the American College of Surgeons, 2010",
    ],
    experience: "35",
    certificates: [],
    skills: [],
    location: "Main Building, Eastridge Primecare",
    department: "Gen Surgery",
    phoneNo: "(051) 884-4800",
    youtubeVideoLink:
      "https://www.youtube.com/embed/kM9rfRIC3jI?si=u_FManoqoVAJEFDl",
    image: naeem_zia,
  },
  {
    id: "2",
    name: "Dr Maham Tariq",
    description: "Breast Surgeon",
    biography:
      "Graduated from Rawalpindi Medical College 2014, General Surgery training from Holy Family Hospital with MRCS + FCPS Gen Surgery. Breast Surgery Fellowship from CMH Rwp Done FCPS Breast Surgery + FEBS Breast Surgery, Europe Interest include Breast Cancer Surgery + Management of beginning breast disease + screening.",
    occupation: "MBBS, FCPS Surgery,FPCS Breast Surgery",
    qualifications: ["MBBS", "FCPS Surgery", "FCPS Breast Surgery"],
    experience: "11",
    certificates: [],
    skills: [],
    location: "Main Building, Eastridge Primecare",
    department: "Breast Surgery",
    phoneNo: "(051) 884-4800",
    youtubeVideoLink: "https://youtu.be/Bsc5LEVjQx0",
    image: maham_tariq,
  },
  {
    id: "3",
    name: "Dr Sana Qaiser",
    description: "General Surgeon",
    biography:
      "MBBS in 2008, FCPS Gen Surgery 2015, Special Interest in Painless Surgery all general surgical procedures including Anal Surgeries, Breast Surgeries, Gall Bladder Surgeries , thyroid cystectomy , special interest in Painless Anal Surgical procedure and Scarless Breast Surgeries.",
    occupation: "MBBS, FCPS Gen Surgery",
    qualifications: ["MBBS", "FPCS Gen Surgery"],
    experience: "11",
    certificates: [],
    skills: [],
    location: "Main Building, Eastridge Primecare",
    department: "Gen Surgery",
    phoneNo: "(051) 884-4800",
    youtubeVideoLink: "https://youtu.be/Bsc5LEVjQx0",
    image: sana_qaiser,
  },
  {
    id: "4",
    name: "Prof.Dr Nadeem Akhtar",
    description: "Neuro Surgeon",
    biography:
      "Specialist in Brain&Spine Surgery. Specialist in Children Neurology. Graduated from RMC and also Dean in RMC 1987. Interest in Spine disc and other Pathology of Spine.",
    occupation: "MBBS, FCPS Neuro Surgery",
    qualifications: ["MBBS", "FCPS Neuro Surgery"],
    experience: "30",
    certificates: [],
    skills: [],
    location: "Main Building, Eastridge Primecare",
    department: "Neuro Surgery Spine Surgery",
    phoneNo: "(051) 884-4800",
    youtubeVideoLink: "https://www.youtube.com/embed/OTztCIhGCPc",
    image: nadeem_akhtar,
  },
  {
    id: "5",
    name: "Dr Saima Shafait",
    description: "Consultant Neurologist",
    biography:
      "Graduated from RMC 1999. MRCP UK Medicines FCPS Neurology. Special Interest in Epilepsy.",
    occupation: "MBBS, MRCP UK - FCPS Neurology",
    qualifications: ["MBBS", "MRCP UK - FCPS Neurology"],
    experience: "20",
    certificates: [],
    skills: [],
    location: "Main Building, Eastridge Primecare",
    department: "Neurology",
    phoneNo: "(051) 884-4800",
    youtubeVideoLink: "https://youtu.be/Bsc5LEVjQx0",
    image: saima_shafait,
  },
  {
    id: "6",
    name: "Dr Zameer Ahmed",
    description: "Consultant Paediatrics",
    biography:
      "Graduated from Rawalpindi Medical College in 1990 After house job joined Armed Forces Worked as child specialist in various CMH and PAF hospitals Retired in 2020 Served PAF and Fazaia Medical College teaching faculty till 2024 Paediatric (Tamghai Imtiaz Military)",
    occupation: "MBBS, FCPS (Paediatric Medicine)",
    qualifications: ["MBBS", "FCPS (Paediatric Medicine)"],
    experience: "35",
    certificates: [],
    skills: [],
    location: "Main Building, Eastridge Primecare",
    department: "Pediatrics",
    phoneNo: "(051) 884-4800",
    youtubeVideoLink: "https://www.youtube.com/embed/czRlWmeLCHo",
    image: zameer_ahmad,
  },
  {
    id: "7",
    name: "Dr Asim Niaz Naqvi",
    description: "Orthopaedic Surgeon",
    biography:
      "Graduated from Army Medical College Rawalpindi in 1990. fellowship and general surgery. clinical fellowship in Orthopedic surgery from Royal National Orthopaedic Hospital, Stanmore. experienced in trauma management and have special interest in joint replacements and Orthoscopic surgeries.",
    occupation: "MBBS, MRCS(Eng), FCPS(Surgery), FCPS(Orthopaedic)",
    qualifications: ["MBBS", "MRCS(Eng)", "FCPS(Surgery)", "FCPS(Orthopaedic)"],
    experience: "33",
    certificates: [],
    skills: [],
    location: "Main Building, Eastridge Primecare",
    department: "Orthopaedic Surgery",
    phoneNo: "(051) 884-4800",
    youtubeVideoLink: "https://www.youtube.com/embed/cv15IpxdgP4",
    image: asim_naqvi,
  },
  {
    id: "8",
    name: "Dr Riffat Najeeb",
    description: "Consultant Gynecology",
    biography:
      "Graduate of RMU with initial training in Holy Family Hospital.Worked in Ireland/England/Saudi Arabia/Bahrain/Kuwait & Pakistan. Practicing Obstetrician/Gynaecologist & IVF consultant. Special interest in high risk pregnancies, infertility, Urogynae.",
    occupation: "MBBS,ConObs/Gyn Con IVF",
    qualifications: ["MBBS", "ConObs/Gyn Con IVF"],
    experience: "37",
    certificates: [],
    skills: [],
    location: "Main Building, Eastridge Primecare",
    department: "Obs/ Gyn",
    phoneNo: "(051) 884-4800",
    youtubeVideoLink: "https://www.youtube.com/embed/fXDisw6a3oQ",
    image: riffat_najeeb,
  },
  /*{
    id: "9",
    name: "Dr Zameer Nayyar",
    description: "Consultant Paediatrics",
    biography: "MBBS 1990 Worked CMH-PAF Hospital. RTD 2020",
    occupation: "MBBS, FCPS Pediatrics",
    qualifications: ["MBBS", "FCPS Pediatrics"],
    experience: "30",
    certificates: [],
    skills: [],
    location: "Main Building, Eastridge Primecare",
    department: "Pediatrics",
    phoneNo: "(051) 884-4800",
    youtubeVideoLink: "https://youtu.be/Bsc5LEVjQx0",
    image: zameer_ahmad,
  },
  {
    id: "10",
    name: "Prof.Dr Tallat Iftikhar",
    description: "Consultant Gynecology",
    biography: "I am Prof.Dr Tallat Farkhanada Dean and Head of the Gynaecology Department at Holy Family Hospital RWP.I have started my evening practice in Eastridge Prime Care RWP.i have been working in Obstetrics and Gynaecology for over 30years,taking care of women through pregnancy,childbirth,and different gynaecological problems.i look after high-risk pregnancies,help couples facing infertility and perform many types of gynaecologic surgeries with a focus on safety and comfort my goal is simple to promote safe motherhood and improve the health and wellbeing of women and their families.",
    occupation: "MBBS, FCPS MCPS",
    qualifications: [
      "MBBS",
      "FCPS MCPS"
    ],
    experience: "30",
    certificates: [],
    skills: [],
    location: "Main Building, Eastridge Primecare",
    department: "Obs/ Gyn",
    phoneNo: "(051) 884-4800",
    youtubeVideoLink: "https://youtu.be/Bsc5LEVjQx0",
    image: "do"
  },
  */
  {
    id: "11",
    name: "Asst. Prof. Dr. Nighat Shaheen",
    description: "Consultant Gynecology",
    biography:
      "Senior consultant Gynaecologist.Retired as HOD Cantonment General Hospital",
    occupation: "MBBS, FCPS",
    qualifications: ["MBBS", "FCPS"],
    experience: "22",
    certificates: [],
    skills: [],
    location: "Main Building, Eastridge Primecare",
    department: "OBS/GYNAE",
    phoneNo: "(051) 884-4800",
    youtubeVideoLink: "https://youtu.be/Bsc5LEVjQx0",
    image: nighat_shaheen,
  },
  {
    id: "12",
    name: "Dr Ayesha Intikhab",
    description: "Consultant Paediatrics",
    biography:
      "Graduate from Punjab Medical College Faisalabad in 2012 completed my FCPS training in Paediatrics from Children's Hospital and institute of child health,Lahore and FFH RWP, I have Experience in Neonatology,Paediatrics Emergency and ICU Care, I have been working as a consultant Paediatrician in Punjab Govt Since clearing my FCPS.",
    occupation: "MBBS, FCPS",
    qualifications: ["MBBS", "FCPS"],
    experience: "12",
    certificates: [],
    skills: [],
    location: "Main Building, Eastridge Primecare",
    department: "Paeds",
    phoneNo: "(051) 884-4800",
    youtubeVideoLink: "https://www.youtube.com/embed/aPmSXAhVZHw",
    image: ayesha_intekhab,
  },
  {
    id: "13",
    name: "Prof Imran Ashraf",
    description: "General & Laparoscopic Surgeon",
    biography:
      "Graduate in 1991,Army Medical College retired as Prof.of Surgery Master trainer Laparoscopic Surgery trained over 50 surgeon FCPS. Vast experience in managing Trauma /Poly Trauma Special interest in Hepatobiliary & Colorectal Surgeries and Oncological Surgeries. COAS Commendation card 2006.",
    occupation: "MBBS,FCPS CHPE",
    qualifications: ["MBBS", "FCPS CHPE"],
    experience: "35",
    certificates: [],
    skills: [],
    location: "Main Building, Eastridge Primecare",
    department: "General & Laparoscopic Surgery",
    phoneNo: "(051) 884-4800",
    youtubeVideoLink: "https://youtu.be/Bsc5LEVjQx0",
    image: imran_ashraf,
  },
  /*{
    id: "14",
    name: "Prof. Dr Munir Akmal Lodhi",
    description: "Consultant Paediatrics",
    biography: "Prof.Dr Munir Akmal Lodhi is a dedicated medical professional with extensive experience in Paediatric Gastroenterology & Paediatric Endoscopy.",
    occupation: "FCPS",
    experience: "31",
    certificates: [],
    skills: [],
    location: "Main Building, Eastridge Primecare",
    department: "Paediatric Gastroenterology & Paediatric Endoscopy",
    phoneNo: "(051) 884-4800",
    youtubeVideoLink: "https://youtu.be/Bsc5LEVjQx0",
    image: "asd"
  },*/
  {
    id: "15",
    name: "Prof.Dr Sadia Chaudhry",
    description: "Consultant ENT",
    biography:
      "I am Prof. Dr. Sadia Chaudhry, ENT Specialist and Head & Neck Surgeon. I have joined Eastridge Prime Care Hospital, Rawalpindi, where I have started my evening practice. I have been working in the field of Ear, Nose, Throat and Head & Neck Surgery for more than 15 years, providing comprehensive care to patients with a wide range of ENT problems. I manage ear infections, hearing loss, sinus diseases, throat disorders, voice issues, allergies, and perform routine ENT surgeries including tonsils and adenoids removal, eardrum repair, ear tube insertion, nasal and sinus surgeries, and procedures to improve breathing. I also deal with head and neck lumps, thyroid disorders, and other complex conditions with a focus on early diagnosis and safe treatment. My aim is to deliver evidence-based, compassionate, and patient-centred care using modern techniques in a comfortable environment. My goal is simple — to enhance the health, comfort, and quality of life of my patients and support them throughout their treatment journey.",
    occupation: "MBBS, FCPS ENT",
    qualifications: ["MBBS", "FCPS ENT"],
    experience: "15",
    certificates: [],
    skills: [],
    location: "Main Building, Eastridge Primecare",
    department: "ENT",
    phoneNo: "(051) 884-4800",
    youtubeVideoLink: "https://youtu.be/Bsc5LEVjQx0",
    image: sadia_chaudhry,
  },
];
