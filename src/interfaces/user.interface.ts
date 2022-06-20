import { IRole } from "./role.interfase";

export interface IUser {
  id: string;
  login: string;
  groupId: string;
  userRoles: IRole[];
}
