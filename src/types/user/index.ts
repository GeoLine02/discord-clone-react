export interface IUserLoginCrdentials {
  email: string;
  password: string;
}
export interface IUserRegisterCredentials extends IUserLoginCrdentials {
  username: string;
  displayName: string;
}
