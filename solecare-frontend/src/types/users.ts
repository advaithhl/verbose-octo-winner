export type User = {
  name: string;
  email: string;
  password: string;
  role: "Patient" | "Doctor" | "Shoemaker";
};

export type Patient = User & {
  role: "Patient";
  doctor?: Doctor;
  shoemaker?: Shoemaker;
};

export type Doctor = User & {
  role: "Doctor";
  patients: Patient[];
};

export type Shoemaker = User & {
  role: "Shoemaker";
  patients: Patient[];
};
