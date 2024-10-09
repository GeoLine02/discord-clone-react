import { FaHashtag } from "react-icons/fa";

const TextChannel = () => {
  return (
    <div className="flex items-center justify-between p-2 rounded-md hover:bg-hover-gray cursor-pointer">
      <div className="flex items-center gap-1">
        <FaHashtag size={20} className="text-gray-500" />
        <h1>General</h1>
      </div>
    </div>
  );
};

export default TextChannel;
