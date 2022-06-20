import { IRole } from "./role.interfase";

export interface IAuthResponse {
  userId: string;
  groupId: string;
  userRoles: IRole[];
  token: string;
}
