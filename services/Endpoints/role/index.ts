import { Paginated, PaginationQuery } from "..";
import { HttpClient } from "../../HttpClient";
import { Role } from "./types";

export const ROLE_KEY = "role";

export default class RoleApi {
  static async findAll(query: PaginationQuery): Promise<Paginated<Role>> {
    return HttpClient.get("/roles", query);
  }

  static findOneById(id: number): Promise<Role> {
    return HttpClient.get(`/roles/${id}`);
  }

  static save(role: Role): Promise<Role> {
    return HttpClient.post(`/roles`, role);
  }

  static update(role: Role): Promise<Role> {
    return HttpClient.put(`/roles/${role?._id}`, role);
  }

  static delete(role: Role): Promise<Role> {
    return HttpClient.delete(`/roles/${role?._id}`);
  }
}
