const FriendCard = () => {
  return (
    <section className="flex items-center justify-between w-full">
      <div className="flex items-center gap-3">
        <div className="bg-green-500 w-11 aspect-square rounded-full"></div>
        <h1>friend name</h1>
      </div>
      <div>
        <h1>message</h1>
      </div>
    </section>
  );
};

export default FriendCard;
