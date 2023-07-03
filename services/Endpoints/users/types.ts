import { Role } from "../role/types";

export interface User {
  _id?: string;
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  role: Role;
  roleId: string;
}

export interface UserRequest extends User {
  password: string;
  passwordConfirmation: string;
}
