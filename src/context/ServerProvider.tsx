import { createContext, useEffect, useContext, useState } from "react";
import { useAuth } from "./AuthProvider";
import { getServersByOnwer } from "../services/servers";
import { IServer } from "../types/servers";

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
  const [inviteRequests, setInviteRequests] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    const fetchServerByOwnerId = async () => {
      try {
        const fetchedServers = await getServersByOnwer(user?.id);
        setServers([...servers, ...fetchedServers]);
      } catch (error) {
        console.log(error);
      }
    };
    if (user) {
      fetchServerByOwnerId();
    }
  }, [user?.id]);

  return (
    <ServerContext.Provider
      value={{
        toggleServerCreationModal,
        setToggleServerCreationModal,
        servers,
        inviteRequests,
      }}
    >
      {children}
    </ServerContext.Provider>
  );
};

export default ServerProvider;
