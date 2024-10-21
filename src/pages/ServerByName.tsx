import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getServerById } from "../services/servers";
import { IServer } from "../types/servers";
import ServerSideBar from "../components/layout/ServerSideBar";
import ServerHeader from "../components/layout/ServerHeader";
import ServerChat from "../components/serverByName/ServerChat";

const ServerByName = () => {
  const { serverId } = useParams();
  const [serverByName, setServerByName] = useState<IServer | null>(null);
  console.log("serverId: ", serverId);
  useEffect(() => {
    const fetchServerById = async () => {
      try {
        const res = await getServerById(Number(serverId));
        setServerByName(res);
        return res;
      } catch (error) {
        console.log(error);
      }
    };
    fetchServerById();
  }, [serverId]);

  return (
    <div className="flex min-h-screen bg-secondary-gray">
      <ServerSideBar serverName={serverByName?.serverName as string} />
      <div className="w-full min-h-full">
        <ServerHeader />
        {/* main */}
        <ServerChat />
      </div>
    </div>
  );
};

export default ServerByName;
