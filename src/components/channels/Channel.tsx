import { useState } from "react";

const Channel = () => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <div>
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="min-w-12 max-w-12 aspect-square rounded-full bg-green-600 hover:rounded-3xl hover:ease-in-out hover:duration-300 relative"
      >
        {isHovered && (
          <span className="bg-primary-gray p-1 text-white rounded-md absolute top-2 -right-32">
            Channel name
          </span>
        )}
      </div>
    </div>
  );
};

export default Channel;
