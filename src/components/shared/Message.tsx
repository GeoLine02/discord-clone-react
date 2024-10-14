import { FaDiscord } from "react-icons/fa";
interface IMessageProps {
  message: any;
}

const Message = ({ message }: IMessageProps) => {
  const { content, sender, sentDate } = message;
  return (
    <div>
      <section className="flex gap-3 p-1 hover:bg-hover-gray cursor-pointer">
        <div className="w-12 aspect-square rounded-full flex items-center justify-center bg-primary-blue">
          <FaDiscord size={25} className="text-white" />
        </div>
        <div>
          <h1 className="text-white font-medium">{sender?.username}</h1>
          <p>{content}</p>
        </div>
      </section>
    </div>
  );
};

export default Message;
