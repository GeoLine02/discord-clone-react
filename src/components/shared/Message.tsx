import { FaDiscord } from "react-icons/fa";
import ServerJoinCard from "../servers/ServerJoinCard";
import { IServer } from "../../types/servers";
import { IMessage } from "../../types/messages";
interface IMessageProps {
  message: IMessage;
  handleAcceptServerInvitation?: (
    serverName: string,
    id: number,
    server: IServer
  ) => void;
}

const Message = ({ message, handleAcceptServerInvitation }: IMessageProps) => {
  const { content, sender, contentType, id, server } = message;
  console.log("@@@@@@@@@@@", message);
  return (
    <div>
      {contentType === "text" && (
        <section className="flex gap-3 p-1 hover:bg-hover-gray cursor-pointer">
          <div className="w-12 aspect-square rounded-full flex items-center justify-center bg-primary-blue">
            <FaDiscord size={25} className="text-white" />
          </div>
          <div>
            <h1 className="text-white font-medium">{sender?.username}</h1>
            <p>{content}</p>
          </div>
        </section>
      )}
      {contentType === "invite" && (
        <section className="flex gap-3 p-1 items-baseline hover:bg-hover-gray cursor-pointer">
          <div className="w-12 aspect-square rounded-full flex items-center justify-center bg-primary-blue">
            <FaDiscord size={25} className="text-white" />
          </div>
          <div>
            <ServerJoinCard
              id={id}
              server={server as IServer}
              receiverId={sender?.id as number}
              handleAcceptServerInvitation={handleAcceptServerInvitation}
              serverName={content}
            />
          </div>
        </section>
      )}
    </div>
  );
};

export default Message;
