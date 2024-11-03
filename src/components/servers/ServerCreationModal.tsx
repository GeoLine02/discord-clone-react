import { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import ChooseTemplate from "./ChooseTemplate";
import ChooseCommunity from "./ChooseCommunity";
import JoinServer from "./JoinServer";
import useSlide from "../../hooks/useSlide";
import CustomizeServer from "./CustomizeServer";
import { createServer, joinServerByUrl } from "../../services/servers";
import { getSocket, useAuth } from "../../context/AuthProvider";
import { uploadImageToFirebase } from "../../services/firebase";
import { useServer } from "../../context/ServerProvider";
import { IServer } from "../../types/servers";

interface IServerCreationModalprops {
  setToggleServerCreationModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const ServerCreationModal = ({
  setToggleServerCreationModal,
}: IServerCreationModalprops) => {
  const { user } = useAuth();
  const [serverTemplate, setServerTemplate] = useState<any>(null);
  const [serverMembersType, setServerMembersType] = useState<string>("");
  const [serverImage, setServerImage] = useState<File | null>(null);
  const [isloading, setIsLoading] = useState<boolean>(false);
  const [serverName, setServerName] = useState<string>(
    `${user?.username}'s server`
  );
  const [steps, setSteps] = useState<string[]>(["template"]);
  const [translate, handleSlideLeft, handleSlideRight] = useSlide();
  const [serverUrl, setServerUrl] = useState<string>("");
  const { setServers } = useServer();
  const isJoiningServer = steps.includes("serverCommunity");
  const socket = getSocket();
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

  const handleJoinServer = async () => {
    try {
      const res = await joinServerByUrl(user?.id, serverUrl);
      return res;
    } catch (error) {
      console.log(error);
    }
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

      if (res) {
        setServers((prev: IServer[]) => [...prev, res?.server]);
        socket.emit("connect-server", {
          serverName: res?.server?.serverName,
        });
        setToggleServerCreationModal(false);
      }
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
          <JoinServer
            handleJoinServer={handleJoinServer}
            serverUrl={serverUrl}
            setServerUrl={setServerUrl}
            translate={translate}
            handleStepBack={handleStepBack}
          />
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
