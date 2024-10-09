import { HiMiniSpeakerWave } from "react-icons/hi2";

const VoiceChannel = () => {
  return (
    <div className="flex items-center gap-2 p-2 cursor-pointer w-full rounded-md hover:bg-hover-gray">
      <HiMiniSpeakerWave className="text-gray-500" size={25} />
      <h1>Lobby</h1>
    </div>
  );
};

export default VoiceChannel;
