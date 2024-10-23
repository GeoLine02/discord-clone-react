import { FaPlus } from "react-icons/fa";
import TextChannel from "./TextChannel";
import { useServer } from "../../context/ServerProvider";
import { IServer } from "../../types/servers";

const TextChannelsList = () => {
  const { servers } = useServer();
  return (
    <div>
      <div className="flex w-full items-center justify-between cursor-pointer">
        <h1 className="uppercase">text channels</h1>
        <FaPlus />
      </div>
      {servers.map((server: IServer) => {
        const { channels } = server;
        return channels.map((channel) => (
          <TextChannel
            channelName={channel.channelName}
            key={channel.id}
            serverId={server.id}
          />
        ));
      })}
    </div>
  );
};

export default TextChannelsList;
