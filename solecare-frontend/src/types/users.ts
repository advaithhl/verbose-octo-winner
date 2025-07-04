import { ROLES } from "../constants";

export type User = {
  name: string;
  email: string;
  token: string;
  role: ROLES;
};

export type Patient = User & {
  doctor?: Doctor;
  shoemaker?: Shoemaker;
};

export type Doctor = User & {
  patients: Patient[];
};

export type Shoemaker = User & {
  patients: Patient[];
};
