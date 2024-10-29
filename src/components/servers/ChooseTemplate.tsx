import ServerTemplatesList from "./ServerTemplatesList";

interface IChooseTemplateProps {
  translate: number;
  setServerTemplate: React.Dispatch<React.SetStateAction<any>>;
  handleSetSteps: (nextStep: string) => void;
  steps: string[];
}

const ChooseTemplate = ({
  setServerTemplate,
  handleSetSteps,
  translate,
}: IChooseTemplateProps) => {
  return (
    <div
      className="min-w-full max-w-full transition-all duration-700 ease-in-out"
      style={{
        transform: `translate(${translate}%)`,
      }}
    >
      <div className="text-center">
        <h1 className="text-white font-semibold text-2xl">
          Create your Server
        </h1>
        <p className="text-wrap">
          Your server is where you and your friends hang out. Make yours and
          start talking.
        </p>
      </div>
      <ServerTemplatesList
        setServerTemplate={setServerTemplate}
        handleSetSteps={handleSetSteps}
      />
      <div className="w-full bg-primary-gray p-3">
        <h1 className="text-2xl font-medium text-white text-center mb-3">
          Already have an invite?
        </h1>
        <button
          onClick={() => handleSetSteps("join server")}
          className="w-full bg-secondary-gray rounded-md py-2"
        >
          Join server
        </button>
      </div>
    </div>
  );
};

export default ChooseTemplate;
