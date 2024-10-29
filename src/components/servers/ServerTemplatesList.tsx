import ServerTemplateCard from "./ServerTemplateCard";
import { serverTemplateOptions } from "../../constants/serverCreation";

interface IServerTemplatesListProps {
  setServerTemplate: React.Dispatch<React.SetStateAction<any>>;
  handleSetSteps: (nextStep: string) => void;
}

const ServerTemplatesList = ({
  setServerTemplate,
  handleSetSteps,
}: IServerTemplatesListProps) => {
  const defaultTemplate = {
    templateType: "Create My Own",
    textchannels: ["general"],
    voiceChannels: ["general"],
  };

  return (
    <div className="space-y-2 max-h-80 overflow-y-auto">
      <div className="px-3 py-2">
        <ServerTemplateCard
          stepName="serverCommunity"
          handleSetSteps={handleSetSteps}
          setServerTemplate={setServerTemplate}
          template={defaultTemplate}
        />
      </div>
      <span className="font-semibold">Start from template</span>
      <div className="space-y-6 px-3">
        {serverTemplateOptions.map((template) => (
          <ServerTemplateCard
            stepName="serverCommunity"
            setServerTemplate={setServerTemplate}
            handleSetSteps={handleSetSteps}
            key={template.templateType}
            template={template}
          />
        ))}
      </div>
    </div>
  );
};

export default ServerTemplatesList;
