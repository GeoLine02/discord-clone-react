import { FaDiscord } from "react-icons/fa";
import { useAuth } from "../../context/AuthProvider";
import { IServer } from "../../types/servers";

interface IServerJoinCardProps {
  id: number;
  serverName: string;
  receiverId: number;
  server: IServer;
  handleAcceptServerInvitation: (
    serverName: string,
    id: number,
    server: IServer
  ) => void;
}
const ServerJoinCard = ({
  serverName,
  receiverId,
  server,
  id,
  handleAcceptServerInvitation,
}: IServerJoinCardProps) => {
  const { user } = useAuth();
  return (
    <div className="bg-accent-gray flex p-2 items-center justify-between rounded-md min-w-[400px] text-white">
      <div className="flex items-center gap-3">
        <div className="bg-yellow-400 w-12 aspect-square rounded-md flex items-center justify-center p-2">
          <FaDiscord size={25} />
        </div>
        <div>
          <h1 className="font-semibold">Server invitation</h1>
          <h1>{serverName}</h1>
        </div>
      </div>
      {receiverId !== user?.id && (
        <button
          onClick={() => handleAcceptServerInvitation(serverName, id, server)}
          className="bg-green-500 py-2 px-5 rounded-md"
        >
          join
        </button>
      )}
    </div>
  );
};

export default ServerJoinCard;
