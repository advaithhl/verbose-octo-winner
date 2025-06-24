export type User = {
  name: string;
  email: string;
  password: string;
  role: "PATIENT" | "DOCTOR" | "SHOEMAKER";
};

export type Patient = User & {
  role: "PATIENT";
  doctor?: Doctor;
};

export type Doctor = User & {
  role: "DOCTOR";
  patients: Patient[];
};

export type Shoemaker = User & {
  role: "SHOEMAKER";
  patients: Patient[];
};
