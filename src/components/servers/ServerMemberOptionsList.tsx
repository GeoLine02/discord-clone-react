import { serverMemberOptions } from "../../constants/serverCreation";
import ServerTemplateCard from "./ServerTemplateCard";

interface IServerMemberOptionsListProps {
  setServerMembersType: React.Dispatch<React.SetStateAction<string>>;
}

const ServerMemberOptionsList = ({
  setServerMembersType,
}: IServerMemberOptionsListProps) => {
  return (
    <div className="space-y-3">
      {serverMemberOptions.map((option: string) => (
        <ServerTemplateCard
          setServerTemplate={setServerMembersType}
          key={option}
          templateName={option}
        />
      ))}
    </div>
  );
};

export default ServerMemberOptionsList;
