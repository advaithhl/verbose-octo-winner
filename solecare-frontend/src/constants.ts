export const APP_API_URL = "http://localhost:5000"

export const ROLES = {
  PATIENT: "Patient",
  DOCTOR: "Doctor",
  SHOEMAKER: "Shoemaker",
} as const;

export type ROLES = typeof ROLES[keyof typeof ROLES];
