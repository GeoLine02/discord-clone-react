import { serverMemberOptions } from "../../constants/serverCreation";
import ServerTemplateCard from "./ServerTemplateCard";

interface IChooseCommunityProps {
  setServerMembersType: React.Dispatch<React.SetStateAction<string>>;
  handleSetSteps: (nextStep: string) => void;
  handleStepBack: () => void;
  translate: number;
}

const ChooseCommunity = ({
  handleSetSteps,
  setServerMembersType,
  handleStepBack,
  translate,
}: IChooseCommunityProps) => {
  return (
    <div
      className="min-w-full max-w-full flex flex-col justify-between transition-all duration-700 ease-in-out"
      style={{
        transform: `translate(${translate}%)`,
      }}
    >
      <div>
        <div className="text-center">
          <h1 className="text-2xl text-white font-semibold">
            Tell Us More About Your Server
          </h1>
          <p className="text-gray-400 text-wrap">
            In order to help you with setup, is your new server for just a few
            friends or alarger community?
          </p>
        </div>
        <div className="flex flex-col gap-4 mt-4">
          {serverMemberOptions.map((option: any) => (
            <ServerTemplateCard
              stepName="serverName"
              handleSetSteps={handleSetSteps}
              setServerTemplate={setServerMembersType}
              template={option}
              key={option.templateType}
            />
          ))}
          <p className="text-gray-400 text-center text-sm">
            Not sure? You can
            <span className="text-primary-blue"> skip this question </span> for
            now.
          </p>
        </div>
      </div>
      <div className="p-3 bg-primary-gray text-white">
        <button onClick={handleStepBack}>Back</button>
      </div>
    </div>
  );
};

export default ChooseCommunity;
