export interface User {
  id?: string;
  firstName: string;
  lastName: string;
  email: string;
  username: string;
}

export interface UserRequest extends User {
  password: string;
  passwordConfirmation: string;
}
