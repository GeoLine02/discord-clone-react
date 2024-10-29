import { IServer } from "../../types/servers";
import TextChannelsList from "../serverByName/TextChannelsList";
import VoiceChannelsList from "../serverByName/VoiceChannelsList";

interface IChannelsProps {
  serverByName: IServer;
}

const Channels = ({ serverByName }: IChannelsProps) => {
  return (
    <div className="px-2 space-y-2">
      <TextChannelsList serverByName={serverByName} />
      <VoiceChannelsList serverByName={serverByName} />
    </div>
  );
};

export default Channels;
