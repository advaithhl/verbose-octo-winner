import type { User } from "../types/users";

export function getUserInfoFromLocalStorage(): User | null {
  const user = localStorage.getItem("user");
  if (user) {
    return JSON.parse(user);
  }
  return null;
}

export function setUserInfoToLocalStorage(user: User | null) {
  if (user) {
    localStorage.setItem("user", JSON.stringify(user));
  }
}

export function clearUserInfoFromLocalStorage() {
  localStorage.removeItem("user");
}
