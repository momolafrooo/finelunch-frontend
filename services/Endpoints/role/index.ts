import { HttpClient } from "../../HttpClient";
import { Role } from "./types";

export const ROLE_KEY = "role";

export default class RoleApi {
  static async findAll(): Promise<Array<Role>> {
    return HttpClient.get("/api/roles");
  }

  static findOneById(id: number): Promise<Role> {
    return HttpClient.get(`/api/roles/${id}`);
  }

  static save(role: Role): Promise<Role> {
    return HttpClient.post(`/api/roles`, role);
  }

  static updateById(role: Role, id: number): Promise<Role> {
    return HttpClient.put(`/api/roles/${id}`, role);
  }

  static deleteById(id: number): Promise<Role> {
    return HttpClient.delete(`/api/roles/${id}`);
  }
}
