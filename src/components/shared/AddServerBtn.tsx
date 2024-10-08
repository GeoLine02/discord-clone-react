import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import Modal from "../ui/Modal";
import ServerCreationModal from "../servers/ServerCreationModal";

const AddServerBtn = () => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [toggleServerCreationModal, setToggleServerCreationModal] =
    useState<boolean>(false);

  const handleToggleAddChannelModal = () => {
    setToggleServerCreationModal(!toggleServerCreationModal);
  };

  return (
    <div>
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="text-green-600 bg-secondary-gray rounded-full w-12 aspect-square flex items-center justify-center cursor-pointer hover:text-white hover:bg-green-600 hover:rounded-xl ease-in-out hover:duration-300 relative"
        onClick={handleToggleAddChannelModal}
      >
        <FaPlus size={25} />

        {isHovered && (
          <span className="bg-primary-gray p-1 text-white rounded-md absolute top-2 -right-32">
            Channel name
          </span>
        )}
      </div>
      {toggleServerCreationModal && (
        <Modal>
          <ServerCreationModal
            setToggleServerCreationModal={setToggleServerCreationModal}
          />
        </Modal>
      )}
    </div>
  );
};

export default AddServerBtn;
