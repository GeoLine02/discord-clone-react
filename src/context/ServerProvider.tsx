import {
  createContext,
  useEffect,
  useContext,
  useState,
  useLayoutEffect,
} from "react";
import { getSocket, useAuth } from "./AuthProvider";
import { getServers } from "../services/servers";
import { IServer } from "../types/servers";
import { useChat } from "./ChatProvider";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ServerContext = createContext<any>(undefined);

export const useServer = () => {
  const serverContext = useContext(ServerContext);

  if (!serverContext) {
    throw new Error("useServer must be used within a ServerProvider");
  }
  return serverContext;
};

const ServerProvider = ({ children }: { children: React.ReactNode }) => {
  const [toggleServerCreationModal, setToggleServerCreationModal] =
    useState<boolean>(false);
  const [servers, setServers] = useState<[] | IServer[]>([]);
  const { user } = useAuth();
  const { messageList, setMessageList } = useChat();
  const [serverId, setServerId] = useState<number | null>(null);
  const socket = getSocket();

  useLayoutEffect(() => {
    const getAllServers = async () => {
      try {
        if (user?.id) {
          const res = await getServers(user?.id, serverId as number);
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const server = res?.map((server: any) => server.server);
          if (server.length) {
            setServers((prev) => [...prev, ...server]);
          }
        }
      } catch (error) {
        console.log(error);
      }
    };
    if (user?.id) {
      getAllServers();
    }
  }, [user]);
  useEffect(() => {
    socket.on("server-invitation-received", (serverInvitation) => {
      setMessageList([...messageList, serverInvitation]);
    });
  }, [user?.id, messageList, setMessageList]);

  useEffect(() => {
    if (servers) {
      socket.emit("join-server", servers);
    }
  }, [servers]);

  useEffect(() => {
    if (user) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      socket.on("server-invite-accepted", (inviteObj: any) => {
        console.log("invite accepted: ", inviteObj);
      });
    }
  }, [user?.id, user, servers]);

  return (
    <ServerContext.Provider
      value={{
        toggleServerCreationModal,
        setToggleServerCreationModal,
        servers,
        setServers,
        setServerId,
      }}
    >
      {children}
    </ServerContext.Provider>
  );
};

export default ServerProvider;
