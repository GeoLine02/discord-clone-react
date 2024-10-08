import ServerTemplateCard from "./ServerTemplateCard";
import { serverTemplateOptions } from "../../constants/serverCreation";

interface IServerTemplatesListProps {
  setServerTemplate: React.Dispatch<React.SetStateAction<string>>;
  handleSetSteps: (nextStep: string) => void;
}

const ServerTemplatesList = ({
  setServerTemplate,
  handleSetSteps,
}: IServerTemplatesListProps) => {
  return (
    <div className="space-y-2 max-h-80 overflow-y-auto">
      <div className="px-3 py-2">
        <ServerTemplateCard
          stepName="serverCommunity"
          handleSetSteps={handleSetSteps}
          setServerTemplate={setServerTemplate}
          templateName="Create My Own"
        />
      </div>
      <span className="font-semibold">Start from template</span>
      <div className="space-y-6 px-3">
        {serverTemplateOptions.map((option: string) => (
          <ServerTemplateCard
            stepName="serverCommunity"
            setServerTemplate={setServerTemplate}
            handleSetSteps={handleSetSteps}
            key={option}
            templateName={option}
          />
        ))}
      </div>
    </div>
  );
};

export default ServerTemplatesList;
