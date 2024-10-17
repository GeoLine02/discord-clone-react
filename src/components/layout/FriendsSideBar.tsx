import Search from "../shared/Search";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import FriendList from "../friends/FriendList";
import sideBarNavigation from "../../constants/sideBarNavigation";

const FriendsSideBar = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  return (
    <div className="flex bg-primary-gray min-w-64 max-w-80">
      <section className="bg-accent-gray w-full">
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
