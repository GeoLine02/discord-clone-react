import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getServerByName } from "../services/servers";
import { IServer } from "../types/servers";
import ServerSideBar from "../components/layout/ServerSideBar";
import ServerHeader from "../components/layout/ServerHeader";
import ServerChat from "../components/serverByName/ServerChat";

const ServerByName = () => {
  const { serverName } = useParams();
  const [serverByName, setServerByName] = useState<IServer | null>(null);
  useEffect(() => {
    const fetchServerByName = async () => {
      try {
        const res = await getServerByName(serverName as string);
        setServerByName(res);
        return res;
      } catch (error) {
        console.log(error);
      }
    };
    fetchServerByName();
  }, [serverName]);

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
