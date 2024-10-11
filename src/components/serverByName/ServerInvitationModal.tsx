import { IoClose } from "react-icons/io5";
import Input from "../ui/Input";
import { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import { useFriendRequests } from "../../context/FriendsProvider";
import ServerInvitationCard from "./ServerInvitationCard";
import { joinServerByRequest } from "../../services/servers";
import { useAuth } from "../../context/AuthProvider";
import { useParams } from "react-router-dom";

interface IServerInvitationModalProps {
  handleCloseModal: () => void;
  serverName: string;
}

const ServerInvitationModal = ({
  handleCloseModal,
  serverName,
}: IServerInvitationModalProps) => {
  const [search, setSearch] = useState<string>("");
  const { friendList } = useFriendRequests();
  const { user } = useAuth();
  const { serverId } = useParams();
  const invitationLink = `http://discord.gg/server/${serverName}`;
  const copyInvitationLink = () => {
    navigator.clipboard.writeText(invitationLink);
  };

  const handleServerInvitation = async (friendId: number) => {
    try {
      const res = await joinServerByRequest(
        user?.id,
        friendId,
        Number(serverId)
      );
      return res;
    } catch (error) {
      console.log(error);
    }
  };
  console.log("friendList: ", friendList);
  return (
    <div className="bg-secondary-gray text-white rounded-md p-4 min-w-[404px]">
      <header className="p-3">
        <div className="flex justify-between">
          <div>
            <h1>Invite friends to this server</h1>
            <p>general</p>
          </div>
          <IoClose onClick={handleCloseModal} size={20} />
        </div>
        <div className="flex items-center bg-primary-gray p-3 border-b-black border-b">
          <Input
            hasBorder={false}
            setValue={setSearch}
            value={search}
            name="search"
            placeholder="Search for friends"
          />
          <IoSearchSharp size={20} />
        </div>
      </header>
      <main className="p-3">
        <div className="min-h-64 max-h-64 overflow-y-auto p-2">
          {friendList?.map(
            (friend) => (
              console.log(friend),
              (
                <ServerInvitationCard
                  key={friend.Friend.id}
                  friend={friend.Friend}
                  handleServerInvitation={handleServerInvitation}
                />
              )
            )
          )}
        </div>
      </main>
      <footer className="p-3">
        <h1>Or send a server invite link to a friend</h1>
        <div className="flex items-center px-2 py-2 justify-between bg-primary-gray">
          <input
            value={invitationLink}
            readOnly
            type="url"
            name="invite-link"
            className="bg-transparent outline-none w-full"
          />
          <button
            onClick={copyInvitationLink}
            className="bg-primary-blue py-1 px-3 rounded-md"
          >
            Copy
          </button>
        </div>
      </footer>
    </div>
  );
};

export default ServerInvitationModal;
