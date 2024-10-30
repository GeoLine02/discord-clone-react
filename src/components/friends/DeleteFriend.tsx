interface IDeleteFriendProps {
  friendName: string;
  handleRemoveFriend: () => Promise<void>;
}
const DeleteFriend = ({
  friendName,
  handleRemoveFriend,
}: IDeleteFriendProps) => {
  return (
    <div className="bg-secondary-gray rounded-md text-white">
      <div className="flex flex-col gap-3 p-3 pb-12">
        <h1 className="text-2xl font-semibold">Remove '{friendName}'</h1>
        <p>Are you sure you want to remove ${friendName} from your freinds?</p>
      </div>
      <div className="bg-accent-gray flex justify-end px-3 items-center gap-5 py-4 overflow-hidden">
        <button className="p-2 rounded-sm hover:bg-hover-gray">Cancel</button>
        <button
          onClick={handleRemoveFriend}
          className="bg-red-600 p-2 rounded-sm hover:bg-red-800 duration-75"
        >
          Remove Friend
        </button>
      </div>
    </div>
  );
};

export default DeleteFriend;
