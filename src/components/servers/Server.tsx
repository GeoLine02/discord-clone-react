import { useState } from "react";
import { useNavigate } from "react-router-dom";
import routes from "../../constants/routes";

interface IServerProps {
  serverName: string;
  serverImage: string;
}

const Server = ({ serverImage, serverName }: IServerProps) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const navigate = useNavigate();
  const defaultServerImage = `${serverName.split("")[0]?.toUpperCase()}s`;

  return (
    <div
      onClick={() => navigate(`${routes.CHANNEL}/${serverName}`)}
      className="relative group" // Using group for easier hover states
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {!serverImage && (
        <div className="w-14 aspect-square flex justify-center items-center rounded-full hover:rounded-xl transition-all text-white bg-secondary-gray cursor-pointer hover:bg-primary-blue">
          <h1>{defaultServerImage}</h1>
        </div>
      )}
      {serverImage && (
        <img
          className="w-14 aspect-square rounded-full hover:rounded-xl transition-all cursor-pointer"
          src={serverImage}
          alt={serverName}
        />
      )}

      {/* Tooltip */}
      {isHovered && (
        <span className="bg-primary-gray px-3 py-1 text-white rounded-md absolute top-1/2 left-full transform -translate-y-1/2 ml-2 whitespace-nowrap z-50">
          {serverName}
        </span>
      )}
    </div>
  );
};

export default Server;
