export interface LoginInfo {
  email: string;
  password: string;
}

export interface RegisterInfo {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  role: "Patient" | "Doctor" | "Shoemaker";
}
