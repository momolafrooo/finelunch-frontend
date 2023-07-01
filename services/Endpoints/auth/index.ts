import { HttpClient } from "../../HttpClient";
import { UserRequest } from "../users/types";
import { Login } from "./types";

export const AUTH_KEY = "auth";

export default class AuthApi {
  static async login(body: Login): Promise<any> {
    return HttpClient.post("auth/login", body);
  }
  static async register(body: UserRequest): Promise<any> {
    return HttpClient.post("auth/register", body);
  }
}
