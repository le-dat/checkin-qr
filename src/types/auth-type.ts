import { IUser } from "./user-type";

export interface ITokens {
  accessToken: string;
  refreshToken: string;
}

export interface IResponseLogin {
  token: ITokens;
  user: IUser;
}

export interface IRegister {
  username: string;
  email: string;
  phone: string;
  password: string;
  level: number;
}

export interface ILogIn {
  email: string;
  password: string;
}
