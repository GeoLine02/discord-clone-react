import AddFriendInput from "../shared/AddFriendInput";

const AddFriendSection = () => {
  return (
    <div className="text-white space-y-2 p-2 w-4/6">
      <h1 className="uppercase font-semibold text-xl">add friend</h1>
      <p className="text-sm text-gray-400">
        You can add friends with their Discord usernames.
      </p>

      <AddFriendInput />
    </div>
  );
};

export default AddFriendSection;
