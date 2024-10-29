import { IServer } from "../servers";
import { IUser } from "../user";

export interface IMessage {
  id: number;
  content: string;
  sender?: IUser;
  receiver?: IUser;
  receiverId?: number;
  serverId: number | null;
  contentType: string;
  senderId: number;
  server?: IServer;
}

export interface IServerMessage {
  id: number;
  content: string;
  senderId: number;
  serverId: number;
  sender: IUser;
  contentType: string;
}
