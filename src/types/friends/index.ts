import { IUser } from "../user";

export interface IFriendRequest {
  Sender: IUser;
  senderId: number;
  status: string;
}

export interface IFriend {
  Friend: IUser;
}
