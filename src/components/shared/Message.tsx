import { IUser } from "../../types/user";
import { FaDiscord } from "react-icons/fa";
interface IMessageProps {
  user: IUser;
  message: string;
}

const Message = ({ message, user }: IMessageProps) => {
  return (
    <div>
      <section className="flex gap-2">
        <div className="w-12 aspect-square rounded-full flex items-center justify-center bg-primary-blue">
          <FaDiscord size={25} className="text-white" />
        </div>
        <h1 className="text-white font-medium">{user?.username}</h1>
        <p>{message}</p>
      </section>
    </div>
  );
};

export default Message;
