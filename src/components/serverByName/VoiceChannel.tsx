import { HiMiniSpeakerWave } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";

interface IVoiceChannelProps {
  channelName: string;
  serverId: number;
}

const VoiceChannel = ({ channelName, serverId }: IVoiceChannelProps) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    // navigate(routes)
  };

  return (
    <div className="flex items-center gap-2 cursor-pointer w-full rounded-md hover:bg-hover-gray">
      <div
        onClick={handleNavigate}
        className="flex items-center justify-between p-2 rounded-md hover:bg-hover-gray cursor-pointer"
      >
        <div className="flex items-center gap-1">
          <HiMiniSpeakerWave size={20} className="text-gray-500" />
          <h1>{channelName}</h1>
        </div>
      </div>
    </div>
  );
};

export default VoiceChannel;
