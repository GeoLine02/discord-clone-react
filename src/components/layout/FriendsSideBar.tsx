import { FaDiscord } from "react-icons/fa";
import ServerList from "../servers/serverList";
import Search from "../shared/Search";
import { useState } from "react";
import sideBarNavigation from "../../constants/sideBarNavigation";
import { NavLink } from "react-router-dom";
import FriendList from "../friends/FriendList";

const FriendsSideBar = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  console.log(searchValue);
  return (
    <div className="flex bg-primary-gray min-w-80">
      <section className="flex flex-col max-w-fit items-center gap-2 py-2 px-1 overflow-y-auto">
        <div className="bg-primary-blue text-white w-14 aspect-square rounded-xl cursor-pointer flex items-center justify-center">
          <FaDiscord size={35} />
        </div>
        <ServerList />
      </section>
      <section className="bg-secondary-gray w-full">
        <div className="border-b border-gray-600 py-1 px-2">
          <Search
            placeholder="Find or start a conversation"
            setSearchValue={setSearchValue}
          />
        </div>
        {sideBarNavigation.map((el) => (
          <NavLink
            key={el.title}
            className="flex gap-3 items-center text-white w-full hover:bg-secondary-gray p-2 rounded-md active:bg-secondary-gray"
            to={el.path}
          >
            <el.icon size={30} color="white" />
            {el.title}
          </NavLink>
        ))}
        <FriendList />
      </section>
    </div>
  );
};

export default FriendsSideBar;
