import { AiOutlineClose } from "react-icons/ai";

const Friend = () => {
  return (
    <section className="flex w-full py-2 items-center justify-between text-white px-3">
      <div className="flex items-center gap-2">
        <div className="bg-yellow-400 max-w-11 min-w-11 aspect-square rounded-full cursor-pointer"></div>
        <h1>friend name</h1>
      </div>
      <AiOutlineClose className="cursor-pointer" />
    </section>
  );
};

export default Friend;
