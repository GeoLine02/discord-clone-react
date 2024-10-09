import { FaPlus } from "react-icons/fa";
import TextChannel from "./TextChannel";

const TextChannelsList = () => {
  return (
    <div>
      <div className="flex w-full items-center justify-between cursor-pointer">
        <h1 className="uppercase">text channels</h1>
        <FaPlus />
      </div>
      <TextChannel />
      <TextChannel />
      <TextChannel />
      <TextChannel />
      {/* text Channel */}
    </div>
  );
};

export default TextChannelsList;
