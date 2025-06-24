export type User = {
  id: string;
  name: string;
  email: string;
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
