import { HttpClient } from "../../HttpClient";
import { Login } from "./types";

export const AUTH_KEY = "auth";

export default class AuthApi {
  static async login(body: Login): Promise<any> {
    return HttpClient.post("auth/login", body);
  }
}
