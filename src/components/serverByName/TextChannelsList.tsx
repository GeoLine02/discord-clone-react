import { FaPlus } from "react-icons/fa";
import TextChannel from "./TextChannel";
import { IServer } from "../../types/servers";

interface ITextChannelsListProps {
  serverByName: IServer;
}

const TextChannelsList = ({ serverByName }: ITextChannelsListProps) => {
  return (
    <div>
      <div className="flex w-full items-center justify-between cursor-pointer">
        <h1 className="uppercase">text channels</h1>
        <FaPlus />
      </div>
      {serverByName?.channels.map(
        (channel) =>
          channel.channelType === "text" && (
            <TextChannel
              channelName={channel.channelName}
              serverId={channel.serverId}
              key={channel.id}
            />
          )
      )}
    </div>
  );
};

export default TextChannelsList;
