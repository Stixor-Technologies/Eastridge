import { StaticImageData } from "next/image";
import {
  MEDICAL_SERVICES as MEDICAL_SERVICES_FROM_CONSTANTS,
  SUPPORT_SERVICES as SUPPORT_SERVICES_FROM_CONSTANTS,
  PATIENT_SERVICES as PATIENT_SERVICES_FROM_CONSTANTS,
  getServiceBySlug as getServiceBySlugFromConstants,
  getServicesByCategory as getServicesByCategoryFromConstants,
  getAllServices as getAllServicesFromConstants,
  getDepartmentItems as getDepartmentItemsFromConstants,
} from "./constants";

// Service Detail Interface (for backward compatibility)
export interface ServiceDetail {
  slug: string;
  title: string;
  subtitle?: string;
  description: string;
  icon?: StaticImageData;
  // Enhanced properties from unified structure
  id?: string;
  label?: string;
  items?: Array<{
    icon: any;
    title: string;
    slug: string;
  }>;
}

// Re-export from constants for backward compatibility
export const MEDICAL_SERVICES =
  MEDICAL_SERVICES_FROM_CONSTANTS as ServiceDetail[];
export const SUPPORT_SERVICES =
  SUPPORT_SERVICES_FROM_CONSTANTS as ServiceDetail[];
export const PATIENT_SERVICES =
  PATIENT_SERVICES_FROM_CONSTANTS as ServiceDetail[];

// Re-export utility functions
export const getServiceBySlug = getServiceBySlugFromConstants;
export const getServicesByCategory = getServicesByCategoryFromConstants;
export const getAllServices = getAllServicesFromConstants;
export const getDepartmentItems = getDepartmentItemsFromConstants;
