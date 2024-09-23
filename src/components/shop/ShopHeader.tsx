import { FaDiscord } from "react-icons/fa";

const ShopHeader = () => {
  return (
    <header className="flex items-center w-full">
      <div className="flex items-center gap-3">
        <FaDiscord size={30} />
        <h1 className="text-gray-700 font-bold">
          Discord <span className="font-semibold">shop</span>
        </h1>
      </div>
    </header>
  );
};

export default ShopHeader;
