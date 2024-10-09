import { FaPlus } from "react-icons/fa";
import VoiceChannel from "./VoiceChannel";

const VoiceChannelsList = () => {
  return (
    <div>
      <div className="flex items-center justify-between w-full cursor-pointer">
        <h1 className="uppercase">voice channels</h1>
        <FaPlus />
      </div>
      <VoiceChannel />
      <VoiceChannel />
      <VoiceChannel />
      <VoiceChannel />
    </div>
  );
};

export default VoiceChannelsList;
