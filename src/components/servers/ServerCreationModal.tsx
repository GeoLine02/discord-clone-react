import { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import ChooseTemplate from "./ChooseTemplate";
import ChooseCommunity from "./ChooseCommunity";
import JoinServer from "./JoinServer";
import useSlide from "../../hooks/useSlide";
import CustomizeServer from "./CustomizeServer";
import { createServer } from "../../services/servers";
import { useAuth } from "../../context/AuthProvider";
import { uploadImageToFirebase } from "../../services/firebase";

interface IServerCreationModalprops {
  setToggleServerCreationModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const ServerCreationModal = ({
  setToggleServerCreationModal,
}: IServerCreationModalprops) => {
  const { user } = useAuth();
  const [serverTemplate, setServerTemplate] = useState<string>("");
  const [serverMembersType, setServerMembersType] = useState<string>("");
  const [serverImage, setServerImage] = useState<File | null>(null);
  const [isloading, setIsLoading] = useState<boolean>(false);
  const [serverName, setServerName] = useState<string>(
    `${user?.username}'s server`
  );
  const [steps, setSteps] = useState<string[]>(["template"]);
  const [translate, handleSlideLeft, handleSlideRight] = useSlide();
  const isJoiningServer = steps.includes("serverCommunity");
  const handleStepBack = () => {
    handleSlideRight();
    const lastStep = steps.pop();
    const updatedSeps = steps.filter((step: string) => step !== lastStep);
    setSteps(updatedSeps);
  };
  const handleSetSteps = (nextStep: string) => {
    handleSlideLeft();
    setSteps((prev) => [...prev, nextStep]);
  };

  const handleCreateServer = async () => {
    setIsLoading(true);
    try {
      let ImageUrl;

      if (serverImage) {
        ImageUrl = await uploadImageToFirebase(serverImage, "serverImages");
      }

      const res = await createServer(
        serverTemplate,
        serverMembersType,
        serverName,
        user.id,
        ImageUrl
      );

      return res;
    } catch (error) {
      throw new Error(`Server creation error: ${error}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-secondary-gray text-white rounded-md p-4 max-w-md">
      <IoCloseOutline
        className="cursor-pointer"
        onClick={() => setToggleServerCreationModal(false)}
        size={30}
      />
      <div className="flex overflow-x-hidden">
        <ChooseTemplate
          steps={steps}
          translate={translate}
          handleSetSteps={handleSetSteps}
          setServerTemplate={setServerTemplate}
        />
        {!isJoiningServer && (
          <JoinServer translate={translate} handleStepBack={handleStepBack} />
        )}
        <ChooseCommunity
          translate={translate}
          handleSetSteps={handleSetSteps}
          handleStepBack={handleStepBack}
          setServerMembersType={setServerMembersType}
        />
        <CustomizeServer
          serverName={serverName}
          serverImage={serverImage}
          isLoading={isloading}
          setServerImage={setServerImage}
          handleCreateServer={handleCreateServer}
          setServerName={setServerName}
          translate={translate}
          handleStepBack={handleStepBack}
        />
      </div>
    </div>
  );
};

export default ServerCreationModal;
