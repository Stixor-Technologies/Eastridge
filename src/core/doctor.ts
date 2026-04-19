//import award1 from "@/public/icons/nobel-price.svg";
//import award2 from "@/public/icons/edison-award.svg";

import aamer_mahmood_malak from "@/public/images/doctors/aamer_mahmood_malak.jpg";
import asim_naqvi from "@/public/images/doctors/asim_naqvi.jpg";
import ayesha_intekhab from "@/public/images/doctors/ayesha_intekhab.jpg";
import batool_butt from "@/public/images/doctors/batool_butt.jpg";
import farrukh_saeed from "@/public/images/doctors/farrukh_saeed.jpg";
import hamid_ali_shah from "@/public/images/doctors/hamid_ali_shah.jpg";
import humaira_arshad from "@/public/images/doctors/humaira_arshad.jpg";
import imran_ashraf from "@/public/images/doctors/imran_ashraf.jpg";
import irfan_saeed from "@/public/images/doctors/irfan_saeed.jpg";
import khalid_mahmood from "@/public/images/doctors/khalid_mahmood.jpg";
import maham_tariq from "@/public/images/doctors/maham_tariq.jpg";
import nadeem_akhtar from "@/public/images/doctors/nadeem_akhtar.jpg";
import naeem_zia from "@/public/images/doctors/naeem_zia.jpg";
import nighat_shaheen from "@/public/images/doctors/nighat_shaheen.jpg";
import riffat_najeeb from "@/public/images/doctors/riffat_najeeb.jpg";
import sadia_chaudhry from "@/public/images/doctors/sadia_chaudhry.jpg";
import saima_shafait from "@/public/images/doctors/saima_shafait.jpg";
import sana_qaiser from "@/public/images/doctors/sana_qaiser.jpg";
import shahid_hameed from "@/public/images/doctors/shahid_hameed.jpg";
import shumaila_hadi from "@/public/images/doctors/shumaila_hadi.jpg";
import tehreem_yazdani from "@/public/images/doctors/tehreem_yazdani.jpg";
import usman_qureshi from "@/public/images/doctors/usman_qureshi.jpg";
import zahoor_iqbal_mirza from "@/public/images/doctors/zahoor_iqbal_mirza.jpg";
import zameer_ahmad from "@/public/images/doctors/zameer_ahmad.jpg";

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
  department: string[];
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
    department: ["General Surgery"],
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
    department: ["Breast Surgery"],
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
    department: ["General Surgery"],
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
    department: ["Neuro Surgery", "Spine Surgery"],
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
    department: ["Neurology"],
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
    department: ["Paediatrics"],
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
    department: ["Orthopaedic Surgery"],
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
    department: ["Obs & Gynae"],
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
    department: ["Paediatrics"],
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
    department: ["Obs & Gynae"],
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
    department: ["Obs & Gynae"],
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
    department: ["Paediatrics"],
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
    department: ["General Surgery", "Laparoscopic Surgery"],
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
    department: ["Paediatric Gastroenterology & Paediatric Endoscopy"],
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
    department: ["ENT"],
    phoneNo: "(051) 884-4800",
    youtubeVideoLink: "https://youtu.be/Bsc5LEVjQx0",
    image: sadia_chaudhry,
  },
  {
    id: "16",
    name: "Prof. Dr Farrukh Saeed",
    description: "Consultant Gastroenterologist",
    biography:
      "Dr. Farrukh Saeed is a distinguished gastroenterologist with decades of experience in clinical practice, teaching, and advanced endoscopic procedures. He graduated from Army Medical College, Rawalpindi in 1987, completing FCPS in Medicine in 1995 and FCPS in Gastroenterology in 2005. Dr. Farrukh has served as a Classified Medical Specialist and Gastroenterologist at multiple Army hospitals, including Military Hospital Rawalpindi (PEMH), CMH Peshawar, and CMH Quetta. He has held prestigious academic positions, including Professor of Medicine and Principal at Army Medical College, Rawalpindi, and has led the Department of Gastroenterology since 2017, developing PEMH into one of the country’s best-equipped training centers. He has supervised over 30 fellows in gastroenterology since 2010. His primary clinical interests include ERCP and EUS, and he is committed to providing advanced, patient-centered care with a focus on safety and excellence.",
    occupation:
      "MBBS, FCPS (Medicine), FCPS (Gastroenterology), FRCP (Edin), FACP, CHPE",
    qualifications: [
      "MBBS",
      "FCPS (Medicine)",
      "FCPS (Gastroenterology)",
      "FRCP (Edin)",
      "FACP",
      "CHPE",
    ],
    experience: "35",
    certificates: [],
    skills: [],
    location: "Main Building, Eastridge Primecare",
    department: ["Gastroenterology"],
    phoneNo: "(051) 884-4800",
    youtubeVideoLink: "https://youtu.be/Bsc5LEVjQx0",
    image: farrukh_saeed,
  },
  {
    id: "17",
    name: "Asst. Prof. Dr Irfan Saeed",
    description: "Consultant ENT & Head & Neck Surgeon",
    biography:
      "Dr. Irfan Saeed is an experienced ENT specialist and Head & Neck surgeon with a distinguished military and clinical career. He graduated from Army Medical College in 1992 and completed his MCPS and FCPS in 2002. Dr. Saeed has served at various CMH and PAF hospitals, most recently as Team Leader for Head & Neck Surgeries at CMH Rawalpindi from 2023 to 2025. He brings extensive expertise in managing a wide range of ENT and head & neck conditions, combining precision, advanced techniques, and patient-centered care.",
    occupation: "MBBS, FCPS, MCPS",
    qualifications: ["MBBS", "FCPS", "MCPS"],
    experience: "33",
    certificates: [],
    skills: [],
    location: "Main Building, Eastridge Primecare",
    department: ["ENT"],
    phoneNo: "(051) 884-4800",
    youtubeVideoLink: "https://youtu.be/Bsc5LEVjQx0",
    image: irfan_saeed,
  },
  {
    id: "18",
    name: "Dr. Tehreem Yazdani",
    description: "Consultant Obs & Gynae",
    biography:
      "Dr. Tehreem Yazdani is a highly experienced obstetrician and gynaecologist with over 33 years of dedicated service in women’s health. A graduate of Fatima Jinnah Medical University, she joined the Pakistan Army in 1995 as a Captain and served with distinction for 31 years, retiring at the rank of Brigadier. She has a strong special interest in high-risk obstetrics, genetic testing, normal deliveries, gynaecological surgeries, and maternal–fetal medicine. In addition to her clinical expertise, Dr. Yazdani is also qualified in medical education, reflecting her commitment to advancing women’s healthcare through both practice and teaching. Dr. Tehreem Yazdani brings her extensive experience, disciplined training, and compassionate approach to the patients of Eastridge Primecare Hospital.",
    occupation:
      "MBBS, FCPS (Gynae & Obs), MCPS (Gynae & Obs), MSc, MPhil (Medical Education)",
    qualifications: [
      "MBBS",
      "FCPS (Gynae & Obs)",
      "MCPS (Gynae & Obs)",
      "MSc, MPhil (Medical Education)",
    ],
    experience: "33",
    certificates: [],
    skills: [],
    location: "Main Building, Eastridge Primecare",
    department: ["Obs & Gynae"],
    phoneNo: "(051) 884-4800",
    youtubeVideoLink: "https://www.youtube.com/embed/ZsXDB0oHOII",
    image: tehreem_yazdani,
  },
  {
    id: "19",
    name: "Dr. Shahid Hameed",
    description: "Consultant Plastic Surgeon",
    biography:
      "Dr. Shahid Hameed brings over three decades of expertise in plastic surgery, combining extensive clinical experience with advanced surgical skills. A graduate of Quaid-e-Azam University, he went on to achieve dual specialization with FCPS degrees in General Surgery and Plastic Surgery from CPSP, reflecting his exceptional expertise and dedication to surgical excellence. Dr. Shahid has served as Consultant Plastic Surgeon at Maroof International Hospital. He also held the position of Consultant and Head of the Plastic Surgery Department at CMH Rawalpindi. He combines advanced surgical techniques with a patient-centered approach to deliver safe and effective outcomes.",
    occupation: "MBBS, FCPS (General Surgery), FCPS (Plastic Surgery)",
    qualifications: [
      "MBBS",
      "FCPS (General Surgery)",
      "FCPS (Plastic Surgery)",
    ],
    experience: "31",
    certificates: [],
    skills: [],
    location: "Main Building, Eastridge Primecare",
    department: ["Plastic Surgery"],
    phoneNo: "(051) 884-4800",
    youtubeVideoLink: "https://youtu.be/Bsc5LEVjQx0",
    image: shahid_hameed,
  },
  {
    id: "20",
    name: "Assoc. Prof. Dr Syed Hamid Ali Shah",
    description: "Consultant Anaesthesiologist",
    biography:
      "Assoc. Prof. Dr. Syed Hamid Ali Shah is a distinguished anesthesiologist with extensive expertise in perioperative and pain management. He earned his MBBS from the University of the Punjab and completed both MCPS and FCPS in Anaesthesiology from CPSP, along with an MSc in Pain Medicine from Ripha International University. Dr. Hamid has led anesthesia departments at CMH Rawalpindi and CMH Quetta, and served as Associate Professor and Head of Anaesthesia at Bahria International Hospital. He integrates advanced anesthetic and pain management strategies to ensure patient comfort, safety, and faster recovery.",
    occupation:
      "MBBS, FCPS (Anaesthesiology), MCPS (Anaesthesiology), MSc (Pain Medicine)",
    qualifications: [
      "MBBS",
      "FCPS (Anaesthesiology)",
      "MCPS (Anaesthesiology)",
      "MSc (Pain Medicine)",
    ],
    experience: "27",
    certificates: [],
    skills: [],
    location: "Main Building, Eastridge Primecare",
    department: ["Anaesthesiology"],
    phoneNo: "(051) 884-4800",
    youtubeVideoLink: "https://youtu.be/Bsc5LEVjQx0",
    image: hamid_ali_shah,
  },
  {
    id: "21",
    name: "Dr. Aamer Mahmood Malak",
    description: "Consultant Anaesthesiologist",
    biography:
      "Dr. Aamer Mahmood Malak is a highly experienced Consultant Anaesthesiologist and a graduate of Army Medical College. With over 25 years of clinical experience, including extensive international exposure, he has provided safe and effective anaesthesia care for a wide range of surgical procedures. His expertise includes general anaesthesia, regional anaesthesia (spinal, epidural, and nerve blocks), perioperative patient management, and pain control. Dr. Malak is committed to ensuring the highest standards of patient safety, comfort, and quality care before, during, and after surgery.",
    occupation: "MBBS, FCPS Anaesthesiology, CESR (UK)",
    qualifications: ["MBBS", "FCPS Anaesthesiology", "CESR (UK)"],
    experience: "25",
    certificates: [],
    skills: [],
    location: "Main Building, Eastridge Primecare",
    department: ["Anaesthesiology"],
    phoneNo: "(051) 884-4800",
    youtubeVideoLink: "https://youtu.be/Bsc5LEVjQx0",
    image: aamer_mahmood_malak,
  },
  {
    id: "22",
    name: "Prof. Dr Zahoor Iqbal Mirza",
    description: "Consultant Urologist & Transplant Surgeon",
    biography:
      "Prof. Dr. Zahoor Iqbal Mirza is a seasoned Urologist and transplant Surgeon. He has dedicated 24 years in advancing patient care and surgical excellence. A graduate of Allama Iqbal Medical College, he went on to achieve dual FCPS qualifications in General Surgery and Urology from CPSP, showcasing his expertise across multiple surgical disciplines. Prof Dr. Zahoor has served as Professor, Classified Urologist and Transplant Surgeon at Armed Forces Institute of Urology (AFIU). He also held a similar role at CMH Kharian, leading complex urological and transplant procedures. At Eastridge Primecare Hospital, Dr. Zahoor provides expert, safe and personalized urology and transplant services to support patient health and well-being.",
    occupation: "MBBS, FCPS (General Surgery), FCPS (Urology)",
    qualifications: ["MBBS", "FCPS (General Surgery)", "FCPS (Urology)"],
    experience: "24",
    certificates: [],
    skills: [],
    location: "Main Building, Eastridge Primecare",
    department: ["Urology"],
    phoneNo: "(051) 884-4800",
    youtubeVideoLink: "https://www.youtube.com/embed/WR32acuybpQ",
    image: zahoor_iqbal_mirza,
  },
  {
    id: "23",
    name: "Dr. Shumaila Hadi",
    description: "Internal Medicine Specialist",
    biography:
      "Dr. Shumaila Hadi is an accomplished physician with 23 years of diverse international clinical experience. Gold medallist from Khyber Medical College (2001), she went on to complete MRCP Part 1 and 2 (UK) in 2007. She received extensive postgraduate training in Australia across multiple specialties, including General Medicine, Acute Medical Care, Stroke Medicine, Geriatrics and Obstetric Medicine. She also served as a Clinical Academic with the University of Adelaide. Dr. Shumaila Hadi brings a strong blend of expertise, academic excellence and compassionate patient care to Eastridge Primecare Hospital, offering comprehensive and evidence-based medical care to patients across a wide range of conditions.",
    occupation: "MBBS, FRACP (Australia), Internal/Obstetric Medicine",
    qualifications: [
      "MBBS",
      "FRACP (Australia)",
      "Internal/Obstetric Medicine",
    ],
    experience: "23",
    certificates: [],
    skills: [],
    location: "Main Building, Eastridge Primecare",
    department: ["Medicine"],
    phoneNo: "(051) 884-4800",
    youtubeVideoLink: "https://www.youtube.com/embed/qdl_GkfuHDg",
    image: shumaila_hadi,
  },
  {
    id: "24",
    name: "Prof. Dr Usman Qureshi",
    description: "Consultant General Surgeon",
    biography:
      "Prof Dr. Usman Qureshi is a highly experienced surgeon and emergency medicine specialist with over 22 years of distinguished service in clinical practice, academia and medical leadership. He earned his MBBS from the University of Punjab and holds an FCPS in General Surgery, along with memberships in the Royal College of Emergency Medicine (UK) and the Royal College of Physicians & Surgeons, Glasgow. Dr. Qureshi has held several prestigious roles throughout his career including Dean of Clinical Academics at Rawalpindi Medical University, Head of Emergency Medicine at Holy Family Hospital and Head of Surgery at Benazir Bhutto Hospital. He also serves as Director of the Quality Enhancement Cell, Additional Director of Medical Education & ORIC and Section Editor for the Journal of Rawalpindi Medical College. With his vast expertise, he provides exceptional surgical and emergency care with a focus on precision, safety and patient-centered outcomes at Eastridge Primecare.",
    occupation: "MBBS, FCPS (Gen Surgery), MRCPS",
    qualifications: ["MBBS", "FCPS (Gen Surgery)", "MRCPS"],
    experience: "22",
    certificates: [],
    skills: [],
    location: "Main Building, Eastridge Primecare",
    department: ["General Surgery"],
    phoneNo: "(051) 884-4800",
    youtubeVideoLink: "https://www.youtube.com/embed/MnyiioPFs6s",
    image: usman_qureshi,
  },
  {
    id: "25",
    name: "Prof. Dr Khalid Mahmood",
    description: "Consultant General Surgeon",
    biography:
      "Prof Dr. Khalid Mahmood is a highly experienced surgeon with 22 years of expertise in complex and advanced surgical care. He graduated with an MBBS from Quaid-e-Azam University and earned his FCPS in Surgery from CPSP. Dr. Khalid also currently serves as Professor of Surgery at NUST, School of Health Sciences, shaping the next generation of surgeons. He has led surgical departments at CMH Rawalpindi and PAF Karachi, and served as Consultant Surgeon at CMH Lahore. Known for his expertise in complex surgical procedures, he combines precision, innovation with a patient-centered approach. His leadership in surgical education and clinical practice has earned him a reputation for excellence and reliability.",
    occupation: "MBBS, FCPS (Surgery)",
    qualifications: ["MBBS", "FCPS (Surgery)"],
    experience: "22",
    certificates: [],
    skills: [],
    location: "Main Building, Eastridge Primecare",
    department: ["General Surgery"],
    phoneNo: "(051) 884-4800",
    youtubeVideoLink: "https://www.youtube.com/embed/TuaDbGgR-Y0",
    image: khalid_mahmood,
  },
  {
    id: "26",
    name: "Prof. Dr Humaira Arshad",
    description: "Consultant Gynaecologist",
    biography:
      "Prof Dr. Humaira Arshad is a highly experienced obstetrician and gynecologist with 16 years of clinical and academic expertise. She earned her MBBS from Quaid-e-Azam University and completed both MCPS and FCPS in Obstetrics & Gynecology from CPSP. Dr. Humaira has served as Consultant Gynecologist at Shaheen Health Plus and Professor of Obstetrics & Gynecology at Rawal Institute of Health Sciences, Islamabad. She has also held leadership roles as Consultant and Head of the Gynecology Department at CMH Quetta. Additionally, she served as Associate Professor and Head of Gynecology at Quetta Institute of Medical Sciences. Renowned for her precision, compassion, and patient-centered approach, she excels in managing complex gynecological and obstetric cases.",
    occupation: "MBBS, FCPS (Obs and Gynae), MCPS (Obs and Gynae)",
    qualifications: ["MBBS", "FCPS (Obs and Gynae)", "MCPS (Obs and Gynae)"],
    experience: "16",
    certificates: [],
    skills: [],
    location: "Main Building, Eastridge Primecare",
    department: ["Obs & Gynae"],
    phoneNo: "(051) 884-4800",
    youtubeVideoLink: "https://www.youtube.com/embed/JSt1AMxFLnk",
    image: humaira_arshad,
  },
  {
    id: "27",
    name: "Dr. Batool Butt",
    description: "Consultant Nephrologist",
    biography:
      "Dr. Batool Butt is an accomplished nephrologist with 14 years of clinical experience and advanced training in kidney care and renal transplantation. She graduated from NUST (AMC) in 2009 and completed her training in both Internal Medicine and Nephrology at PEMH, successfully passing all examinations on her first attempt. She holds multiple prestigious qualifications, including MRCP, ES Neph, CHPE, DHPE, and a Fellowship in Clinical Renal Transplantation. Dr. Batool has attended and presented at numerous national and international conferences and is an active member of the American Society of Nephrology and the International Society of Nephrology. She also serves as Pakistan’s representative to the Asian Pacific Society of Nephrology. Dedicated to evidence-based, patient-centred kidney care, Dr. Batool Butt brings her extensive expertise to the patients of Eastridge Primecare Hospital.",
    occupation: "MBBS, FCPS (Med), FCPS (Neph), MRCP, ES Neph, DHPE",
    qualifications: [
      "MBBS",
      "FCPS (Med)",
      "FCPS (Neph)",
      "MRCP",
      "ES Neph",
      "DHPE",
    ],
    experience: "14",
    certificates: [],
    skills: [],
    location: "Main Building, Eastridge Primecare",
    department: ["Nephrology"],
    phoneNo: "(051) 884-4800",
    youtubeVideoLink: "https://www.youtube.com/embed/-trhfDIidwY",
    image: batool_butt,
  },
];
