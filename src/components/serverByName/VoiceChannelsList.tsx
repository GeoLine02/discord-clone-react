import { FaPlus } from "react-icons/fa";
import VoiceChannel from "./VoiceChannel";
import { IChannel } from "../../types/channels";

interface IVoiceChannelsListProps {
  handleToogleChannelCreateModal: () => void;
  channels: IChannel[];
}

const VoiceChannelsList = ({
  handleToogleChannelCreateModal,
  channels,
}: IVoiceChannelsListProps) => {
  return (
    <div>
      <div className="flex items-center justify-between w-full cursor-pointer">
        <h1 className="uppercase">voice channels</h1>
        <FaPlus onClick={handleToogleChannelCreateModal} />
      </div>
      {channels &&
        channels.map(
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
