import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getServerByName } from "../services/servers";
import { IServer } from "../types/servers";

const ServerByName = () => {
  const { serverName } = useParams();
  const [serverByName, setServerByName] = useState<IServer | null>(null);
  console.log("serverByName: ", serverByName);
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

  return <div>ServerByName</div>;
};

export default ServerByName;
