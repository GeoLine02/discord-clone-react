import { FaPlus } from "react-icons/fa";
import TextChannel from "./TextChannel";
import { IChannel } from "../../types/channels";

interface ITextChannelsListProps {
  handleToogleChannelCreateModal: () => void;
  channels: IChannel[];
}

const TextChannelsList = ({
  handleToogleChannelCreateModal,
  channels,
}: ITextChannelsListProps) => {
  return (
    <div>
      <div className="flex w-full items-center justify-between cursor-pointer">
        <h1 className="uppercase">text channels</h1>
        <FaPlus onClick={handleToogleChannelCreateModal} />
      </div>
      {channels &&
        channels.map(
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
