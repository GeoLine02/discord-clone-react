interface IFridnActionProps {
  handleDisplayFriendActions: () => void;
  handleDisplayDeleteModal: () => void;
}

const FriendActionList = ({
  handleDisplayFriendActions,
  handleDisplayDeleteModal,
}: IFridnActionProps) => {
  return (
    <ul className="bg-primary-gray text-white rounded-md absolute left-0 whitespace-nowrap p-1 px-3">
      <li
        onClick={handleDisplayFriendActions}
        className="hover:bg-primary-blue p-2 rounded-md"
      >
        Start video call
      </li>
      <li
        onClick={handleDisplayFriendActions}
        className="hover:bg-primary-blue p-2 rounded-md"
      >
        Start voice call
      </li>
      <li
        onClick={handleDisplayDeleteModal}
        className="text-red-600 hover:bg-primary-blue p-2 rounded-md hover:text-white"
      >
        Delete friend
      </li>
    </ul>
  );
};

export default FriendActionList;
