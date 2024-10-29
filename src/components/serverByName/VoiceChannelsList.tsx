import { FaPlus } from "react-icons/fa";
import VoiceChannel from "./VoiceChannel";
import { IServer } from "../../types/servers";

interface IVoiceChannelsListProps {
  serverByName: IServer;
}

const VoiceChannelsList = ({ serverByName }: IVoiceChannelsListProps) => {
  return (
    <div>
      <div className="flex items-center justify-between w-full cursor-pointer">
        <h1 className="uppercase">voice channels</h1>
        <FaPlus />
      </div>
      {serverByName?.channels.map(
        (channel) =>
          channel.channelType === "voice" && (
            <VoiceChannel
              channelName={channel.channelName}
              serverId={channel.serverId}
              key={channel.id}
            />
          )
      )}
    </div>
  );
};

export default VoiceChannelsList;
