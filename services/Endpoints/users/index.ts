import { Paginated, PaginationQuery } from "..";
import { HttpClient } from "../../HttpClient";
import { User } from "./types";

export const USER_KEY = "user";

export default class UserApi {
  static async findAll(query: PaginationQuery): Promise<Paginated<User>> {
    return HttpClient.get("/users", query);
  }

  static findOneById(id: number): Promise<User> {
    return HttpClient.get(`/users/${id}`);
  }

  static save(user: User): Promise<User> {
    return HttpClient.post(`/users`, user);
  }

  static update(user: User): Promise<User> {
    return HttpClient.put(`/users/${user?._id}`, user);
  }

  static delete(user: User): Promise<User> {
    return HttpClient.delete(`/users/${user?._id}`);
  }
}
