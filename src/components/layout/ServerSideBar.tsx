import TextChannelsList from "../serverByName/TextChannelsList";
import VoiceChannelsList from "../serverByName/VoiceChannelsList";
import { useAuth } from "../../context/AuthProvider";
import { FaMicrophone, FaCog, FaAngleDown } from "react-icons/fa";
import { FaHeadphones } from "react-icons/fa6";

interface IServerSideBarProps {
  serverName: string;
}

const ServerSideBar = ({ serverName }: IServerSideBarProps) => {
  const { user } = useAuth();

  return (
    <div className="min-w-64 min-h-screen max-h-screen bg-accent-gray text-white flex flex-col justify-between">
      <div className="h-full">
        <div className="py-3 px-1 flex items-center justify-between w-full border-b border-primary-gray hover:bg-hover-gray cursor-pointer">
          <h1>{serverName}</h1>
          <FaAngleDown size={20} />
        </div>
        <section className="w-full cursor-pointer hover:bg-hover-gray p-2 mt-2 border-b border-gray-500">
          Events
        </section>

        {/* text channels */}
        <section className="py-2 px-1">
          <TextChannelsList />
        </section>

        {/* voice channel */}
        <section className="px-1">
          <VoiceChannelsList />
        </section>
      </div>
      <section className="bg-primary-gray w-full py-2 px-2 flex justify-between">
        {/* profile */}
        <div className="flex gap-1 rounded-md hover:bg-hover-gray cursor-pointer items-center p-1">
          <div className="bg-pink-500 min-w-9 h-9 aspect-square rounded-full"></div>
          <div className="text-sm">
            <h1>{user?.username}</h1>
            <h2>Online</h2>
          </div>
        </div>
        <div className="text-white flex items-center gap-2">
          <div className="hover:bg-hover-gray p-2 rounded-md">
            <FaMicrophone />
          </div>
          <div className="hover:bg-hover-gray p-2 rounded-md">
            <FaHeadphones />
          </div>
          <div className="hover:bg-hover-gray p-2 rounded-md">
            <FaCog />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServerSideBar;
