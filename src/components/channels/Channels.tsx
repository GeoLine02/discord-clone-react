import TextChannelsList from "../serverByName/TextChannelsList";
import VoiceChannelsList from "../serverByName/VoiceChannelsList";

const Channels = () => {
  return (
    <div className="px-2 space-y-2">
      <TextChannelsList />
      <VoiceChannelsList />
    </div>
  );
};

export default Channels;
