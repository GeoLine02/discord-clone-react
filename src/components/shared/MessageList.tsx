import Message from "./Message";
import { useAuth } from "../../context/AuthProvider";
import { IUser } from "../../types/user";

interface IMessageProps {
  message: string;
}

const MessageList = ({ message }: IMessageProps) => {
  const { user } = useAuth();

  return (
    <div>
      <Message message={message} user={user as IUser} />
    </div>
  );
};

export default MessageList;
