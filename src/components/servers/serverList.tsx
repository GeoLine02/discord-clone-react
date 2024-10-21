import { useServer } from "../../context/ServerProvider";
import { IServer } from "../../types/servers";
import AddServerBtn from "../shared/AddServerBtn";
import Server from "./Server";

const ServerList = () => {
  const { servers } = useServer();

  return (
    <div className="space-y-2 px-1">
      {servers?.map((server: IServer) => (
        <Server
          key={server?.id}
          id={server?.id}
          serverImage={server?.serverImage}
          serverName={server?.serverName}
        />
      ))}
      <AddServerBtn />
    </div>
  );
};

export default ServerList;
