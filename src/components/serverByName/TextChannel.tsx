import { FaHashtag } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import routes from "../../constants/routes";

interface ITextChannelProps {
  channelName: string;
  serverId: number;
}

const TextChannel = ({ channelName, serverId }: ITextChannelProps) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`${routes.CHANNEL}/${serverId}/${channelName}`);
  };

  return (
    <div
      onClick={handleNavigate}
      className="flex items-center justify-between p-2 rounded-md hover:bg-hover-gray cursor-pointer"
    >
      <div className="flex items-center gap-1">
        <FaHashtag size={20} className="text-gray-500" />
        <h1>{channelName}</h1>
      </div>
    </div>
  );
};

export default TextChannel;
