import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getServerById } from "../services/servers";
import { IServer } from "../types/servers";
import ServerSideBar from "../components/layout/ServerSideBar";
import ServerHeader from "../components/layout/ServerHeader";
import { Outlet } from "react-router-dom";
import routes from "../constants/routes";

const ServerByName = () => {
  const { serverId } = useParams();
  const [serverByName, setServerByName] = useState<IServer | null>(null);
  const navigate = useNavigate();
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

  useEffect(() => {
    navigate(`${routes.CHANNEL}/${serverId}/general`);
  }, [serverId, navigate]);

  return (
    <div className="min-h-screen max-h-screen flex bg-secondary-gray">
      <ServerSideBar serverName={serverByName?.serverName as string} />
      <div className="w-full min-h-full">
        <ServerHeader />
        <Outlet />
        {/* main */}
      </div>
    </div>
  );
};

export default ServerByName;
