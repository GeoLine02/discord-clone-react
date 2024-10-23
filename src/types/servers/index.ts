import { IChannel } from "../channels";

export interface IServer {
  id: number;
  serverName: string;
  serverTemplate: string;
  serverCommunity: string;
  ownerId: number;
  serverImage: string;
  channels: IChannel[];
}
