import { HttpClient } from "../../HttpClient";
import { User, UserRequest } from "./types";

export const ROLE_KEY = "user";

export default class UserApi {
  static async findAll(): Promise<Array<User>> {
    return HttpClient.get("/users");
  }

  static findOneById(id: number): Promise<User> {
    return HttpClient.get(`/users/${id}`);
  }

  static save(user: UserRequest): Promise<User> {
    return HttpClient.post(`/users`, user);
  }

  static updateById(user: UserRequest, id: number): Promise<User> {
    return HttpClient.put(`/users/${id}`, user);
  }

  static deleteById(id: number): Promise<User> {
    return HttpClient.delete(`/users/${id}`);
  }
}
