import { useState } from "react";
import { BsMicMuteFill } from "react-icons/bs";
import { FaCog, FaHeadphones, FaMicrophone } from "react-icons/fa";
import { TbHeadphonesOff } from "react-icons/tb";
import { BiLogOut } from "react-icons/bi";
import { useAuth } from "../../context/AuthProvider";

const SideBarTools = () => {
  const [mice, setMice] = useState<boolean>(true);
  const [isDefened, setIsDefened] = useState<boolean>(false);
  const [displayLogOut, setDisplayLogOut] = useState<boolean>(false);

  const handleSetMice = () => {
    setMice(!mice);
  };

  const handleDefen = () => {
    setIsDefened(!isDefened);
  };

  const handleDisplayLogOut = () => {
    setDisplayLogOut(!displayLogOut);
  };

  const { logOut } = useAuth();

  return (
    <div className="text-white flex items-center gap-2">
      <div className="hover:bg-hover-gray p-2 rounded-md">
        {mice ? (
          <FaMicrophone
            className="cursor-pointer"
            size={20}
            onClick={handleSetMice}
          />
        ) : (
          <BsMicMuteFill
            className="text-red-500 cursor-pointer"
            size={20}
            onClick={handleSetMice}
          />
        )}
      </div>
      <div className="hover:bg-hover-gray p-2 rounded-md">
        {isDefened ? (
          <FaHeadphones
            className="cursor-pointer"
            size={20}
            onClick={handleDefen}
          />
        ) : (
          <TbHeadphonesOff
            className="text-red-500 cursor-pointer"
            size={20}
            onClick={handleDefen}
          />
        )}
      </div>
      <div className="hover:bg-hover-gray p-2 rounded-md relative">
        <FaCog
          onClick={handleDisplayLogOut}
          size={20}
          className="cursor-pointer hover:animate-spin"
        />
        {displayLogOut && (
          <div
            onClick={logOut}
            className="absolute -top-11 select-none -left-6 cursor-pointer flex items-center gap-1 text-red-500 rounded-md bg-primary-gray p-2 px-2 hover:bg-hover-gray"
          >
            <BiLogOut size={20} />
            <button className="whitespace-nowrap">Log Out</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SideBarTools;
