import { FaChevronRight } from "react-icons/fa6";

interface IServerTemplateCardProps {
  template: any;
  setServerTemplate: React.Dispatch<React.SetStateAction<any>>;
  handleSetSteps: (nextStep: string) => void;
  stepName: string;
}

const ServerTemplateCard = ({
  template,
  setServerTemplate,
  handleSetSteps,
  stepName,
}: // TemplateIcon,
IServerTemplateCardProps) => {
  const handleChooseOption = () => {
    handleSetSteps(stepName);
    setServerTemplate(template);
  };

  return (
    <div
      onClick={handleChooseOption}
      className="flex items-center w-full justify-between p-3 border rounded-md border-gray-600 cursor-pointer"
    >
      <div className="flex items-center gap-3">
        {/* <TemplateIcon /> */}
        <h1 className="font-semibold">{template?.templateType}</h1>
      </div>
      <div className="text-gray-600">
        <FaChevronRight />
      </div>
    </div>
  );
};

export default ServerTemplateCard;
