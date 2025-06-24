import { httpService } from "./HTTPService";
import { getUserInfoFromLocalStorage } from "../util/userInfo";
import type { User } from "../types/users";
import type { LoginInfo, RegisterInfo } from "../interfaces/auth";
import { ROLES } from "../constants";

export const LOGIN_URL = "/auth/v1/login";

class AuthService {
  get user() {
    return getUserInfoFromLocalStorage();
  }

  get isPatient() {
    return this.user?.role === ROLES.PATIENT;
  }

  get isDoctor() {
    return this.user?.role === ROLES.DOCTOR;
  }

  get isShoemaker() {
    return this.user?.role === ROLES.SHOEMAKER;
  }

  isLoggedIn() {
    return localStorage.getItem("user") ? true : false;
  }

  logout() {
    return localStorage.removeItem("user");
  }

  async login(loginInfo: LoginInfo): Promise<User> {
    const response = await httpService.post<User>("/auth/login", loginInfo);
    return response;
  }

  async register(registerInfo: RegisterInfo) {
    const response = await httpService.post("/auth/register", registerInfo);
    return response;
  }
}

const authService = new AuthService();
export { AuthService, authService };
