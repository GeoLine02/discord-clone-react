import { useState } from "react";
import FriendsHeader from "../components/friends/FriendsHeader";
import AllFriendsSection from "../components/friends/AllFriendsSection";
import OnlineFriendsSection from "../components/friends/OnlineFriendsSection";
import PendingFriendsSection from "../components/friends/PendingFriendsSection";
import AddFriendSection from "../components/friends/AddFriendSection";

const Channels = () => {
  const [showSection, setShowSection] = useState<string>("online");
  console.log(showSection);
  return (
    <div className="max-h-screen w-full bg-secondary-gray">
      <FriendsHeader setShowSection={setShowSection} />
      <section className=" border-r-primary-gray flex">
        {showSection === "all" && <AllFriendsSection />}
        {showSection === "Online" && <OnlineFriendsSection />}
        {showSection === "Pending" && <PendingFriendsSection />}
        {showSection === "addFriend" && <AddFriendSection />}
        <div className="border-l border-primary-gray h-screen p-2">
          <h1 className="text-2xl font-bold text-white">Active now</h1>
        </div>
      </section>
    </div>
  );
};

export default Channels;
