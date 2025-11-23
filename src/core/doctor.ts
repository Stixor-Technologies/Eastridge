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
    name: "Dr. Maham Tariq",
    description: "Breast Surgeon",
    biography:
      "Dr. Maham Tariq is a distinguished breast and general surgeon with extensive training and a strong commitment to delivering compassionate, evidence-based care. A graduate of Rawalpindi Medical College (2014), she completed her General Surgery residency at Holy Family Hospital and holds both MRCS and FCPS (General Surgery) qualifications. She pursued advanced subspecialty training in breast surgery through a prestigious fellowship at CMH Rawalpindi, further attaining FCPS (Breast Surgery) and the European Board certification, FEBS (Breast Surgery)—credentials that reflect her dedication to excellence and international standards of practice. She is deeply committed to providing clear guidance, compassionate support, and the highest quality surgical care to patients at every step of their breast-health journey.",
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
    name: "Dr. Sana Qaiser",
    description: "General Surgeon",
    biography:
      "Dr. Sana Qaiser is an experienced general surgeon with a strong focus on providing safe, effective, and minimally invasive surgical care. She completed her MBBS in 2008 and earned her FCPS in General Surgery in 2015, building a solid foundation in a broad range of surgical procedures. Dr. Sana Qaiser has a special interest in painless and minimally invasive techniques, offering advanced expertise in anal surgeries, breast surgeries, gallbladder procedures, and thyroid cystectomies. She is particularly focused on painless anal surgical treatments and scar-less breast surgery, ensuring minimal discomfort, quicker recovery, and optimal cosmetic outcomes for her patients. Dedicated to patient comfort and high-quality care, Dr. Sana Qaiser combines surgical excellence, compassion, and modern techniques to provide an exceptional experience to every patient at Eastridge Primecare Hospital.",
    occupation: "MBBS, FCPS Gen Surgery",
    qualifications: ["MBBS", "FCPS Gen Surgery"],
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
    name: "Prof. Dr. Nadeem Akhtar",
    description: "Neuro Surgeon",
    biography:
      "Dr. Nadeem Akhtar is a highly respected specialist in Brain and Spine Surgery with additional expertise in Pediatric Neurology. A distinguished graduate of Rawalpindi Medical College (RMC), he has also served as a Dean at RMC, reflecting his longstanding commitment to medical education and excellence in clinical practice. With over 30 years of experience, Dr. Nadeem Akhtar has a special interest in spinal disc disorders and a wide range of spine pathologies. His approach emphasizes accurate diagnosis, advanced surgical techniques, and individualized treatment plans aimed at restoring function and improving quality of life. Compassionate, skilled, and deeply dedicated to patient well-being, Dr. Nadeem Akhtar brings exceptional neurosurgical care to the patients of Eastridge Primecare Hospital.",
    occupation: "MBBS, FCPS Neuro Surgery",
    qualifications: ["MBBS", "FCPS Neuro Surgery"],
    experience: "30",
    certificates: [],
    skills: [],
    location: "Main Building, Eastridge Primecare",
    department: "Neuro Surgery, Spine Surgery",
    phoneNo: "(051) 884-4800",
    youtubeVideoLink: "https://www.youtube.com/embed/OTztCIhGCPc",
    image: nadeem_akhtar,
  },
  {
    id: "5",
    name: "Dr. Saima Shafait",
    description: "Consultant Neurologist",
    biography:
      "With over 20 years of experience, Dr. Saima Shaffait is a highly skilled neurologist with a strong commitment to delivering compassionate, evidence-based neurological care. She graduated from Rawalpindi Medical College in 1999 and went on to achieve MRCP (UK) as well as FCPS in Neurology, reflecting her dedication to advanced clinical expertise. Dr. Saima Shaffait has a special interest in the diagnosis and management of epilepsy, offering comprehensive, individualized care to help patients achieve better control and improved quality of life. Her approach combines clinical excellence, modern diagnostic techniques, and patient-centred support. ",
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
    name: "Dr. Zameer Ahmed",
    description: "Consultant Paediatrics",
    biography:
      "Dr Zameer Ahmed graduated from Rawalpindi Medical College in 1990 and, after completing his house job, joined the Armed Forces where he served as a child specialist across multiple CMH and PAF hospitals. With an impressive 35 years of exceptional clinical care under his belt, he retired from military service in 2020 and continued to contribute to healthcare and training as part of the teaching faculty at PAF and Fazaia Medical College until 2024. His deep commitment to the well-being of children earned him the prestigious Tamgha-i-Imtiaz (Military). Dr. Zameer Ahmed aims to bring compassionate, reliable, and expert pediatric care to the families of Eastridge Primecare Hospital.",
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
    name: "Dr. Asim Niaz Naqvi",
    description: "Orthopaedic Surgeon",
    biography:
      "Dr. Asim Niaz Naqvi is a highly skilled orthopedic and trauma surgeon with more than three decades of clinical experience. He graduated Army Medical College in 1990 and completed his fellowship in General Surgery and went on to receive advanced clinical fellowship training in Orthopedic Surgery from the renowned Royal National Orthopaedic Hospital, Stanmore. Dr. Asim Niaz Naqvi has extensive expertise in trauma management and a special interest in joint replacement and arthroscopic procedures. He is dedicated to delivering precise, patient-centred orthopedic care aimed at restoring mobility, reducing pain, and improving long-term function.",
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
    name: "Dr. Riffat Najeeb",
    description: "Consultant Gynecology",
    biography:
      "Dr. Riffat Najeeb is an accomplished Obstetrician, Gynaecologist, and IVF consultant with extensive international experience. A graduate of Rawalpindi Medical University, she began her training at Holy Family Hospital and has since practiced across Ireland, England, Saudi Arabia, Bahrain, Kuwait, and Pakistan, bringing a global standard of women’s health care to her patients. She has a special interest in high-risk pregnancies, infertility management, and urogynecology, offering compassionate, evidence-based care tailored to each woman’s needs. With her broad expertise and patient-centred approach, Dr. Riffat Najeeb is dedicated to supporting women through every stage of their reproductive and gynecological health journey.",
    occupation: "MBBS,ConObs/Gyn Con IVF",
    qualifications: ["MBBS", "ConObs/Gyn", "Con IVF"],
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
    name: "Dr.Zameer Nayyar",
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
    name: "Prof. Dr Tallat Iftikhar",
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
      "Dr. Nighat Shaheen is an accomplished Assistant Professor of Obstetrics and Gynaecology with extensive experience in clinical practice and medical education. She served as Head of the Department at Cantonment General Hospital for nearly 25 years and has been a supervisor and examiner for MCPS and FCPS programs. She also serves as an examiner for undergraduate and postgraduate students on the panels of NUMS and PMDC. Following her retirement from CGH in August, Dr. Nighat joined Eastridge Primecare Hospital to continue providing expert care. She is dedicated to supporting women through pregnancy, childbirth, and a wide range of gynaecological conditions, with a focus on safety, comfort, and positive outcomes. Dr. Nighat combines decades of experience with a compassionate approach to ensure the highest quality care for her patients.",
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
    name: "Dr. Ayesha Intikhab",
    description: "Consultant Paediatrics",
    biography:
      "Dr. Ayesha Intikhab is a dedicated consultant paediatrician with extensive training and experience in neonatal care, paediatric emergencies, and intensive care. She graduated from Punjab Medical College, Faisalabad, in 2012 and completed her FCPS training in Paediatrics at the Children’s Hospital and Institute of Child Health, Lahore, as well as FFH Rawalpindi. Since earning her FCPS, Dr. Ayesha has been serving as a consultant paediatrician in the Punjab government, providing expert care to children. She is committed to delivering compassionate, evidence-based care to support the health and well-being of every child she treats.",
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
    name: "Prof. Dr. Imran Ashraf",
    description: "General & Laparoscopic Surgeon",
    biography:
      "Dr. Imran Ashraf is a highly experienced general surgeon and laparoscopic surgery master trainer, with a distinguished career in both clinical practice and surgical education. A graduate of Army Medical College in 1991, he retired as Professor of Surgery after training over 50 surgeons in advanced laparoscopic techniques. He was awarded the COAS Commendation Card in 2006 in recognition of his vast expertise in managing trauma and polytrauma cases. He has special interests in hepatobiliary, colorectal, and oncological surgeries. At Eastridge Primecare Hospital, he continues to provide expert, patient-centered surgical care with a focus on safety, precision, and optimal outcomes.",
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
    name: "Prof. Dr Sadia Chaudhry",
    description: "Consultant ENT",
    biography:
      "Prof. Dr. Sadia Chaudhry is a distinguished ENT Specialist and Head & Neck Surgeon. She has been working in the field of Ear, Nose, Throat and Head & Neck Surgery for more than 15 years, providing comprehensive care to patients with a wide range of ENT problems. She manages ear infections, hearing loss, sinus diseases, throat disorders, voice issues, allergies, and performs routine ENT surgeries including tonsils and adenoids removal, eardrum repair, ear tube insertion, nasal and sinus surgeries, and procedures to improve breathing. She also deals with head and neck lumps, thyroid disorders, and other complex conditions with a focus on early diagnosis and safe treatment. She aims to deliver evidence-based, compassionate, and patient-centred care using modern techniques in a comfortable environment.",
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
