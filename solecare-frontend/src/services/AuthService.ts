import { httpService } from "./HTTPService";
import { getUserInfoFromLocalStorage } from "../util/userInfo";
import type { User } from "../types/users";
import type { LoginInfo, RegisterInfo } from "../interfaces/auth";

export const LOGIN_URL = "/auth/v1/login";

class AuthService {
  get user() {
    return getUserInfoFromLocalStorage();
  }

  get isPatient() {
    return this.user?.role === "Patient";
  }

  get isDoctor() {
    return this.user?.role === "Doctor";
  }

  get isShoemaker() {
    return this.user?.role === "Shoemaker";
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
