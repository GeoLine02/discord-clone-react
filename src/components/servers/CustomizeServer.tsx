import { MoonLoader } from "react-spinners";
import Input from "../ui/Input";
import Upload from "../ui/Upload";

interface ICustomiseServer {
  translate: number;
  handleStepBack: () => void;
  setServerName: React.Dispatch<React.SetStateAction<string>>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  handleCreateServer: () => Promise<any>;
  setServerImage: React.Dispatch<React.SetStateAction<File | null>>;
  isLoading: boolean;
  serverName: object | string;
  serverImage: File | null;
}

const CustomizeServer = ({
  translate,
  handleStepBack,
  setServerName,
  handleCreateServer,
  setServerImage,
  isLoading,
  serverName,
  serverImage,
}: ICustomiseServer) => {
  return (
    <div
      className="min-w-full max-w-full transition-all duration-700 ease-in-out flex flex-col justify-between"
      style={{
        transform: `translate(${translate}%)`,
      }}
    >
      <div className="text-center p-2 space-y-3 flex flex-col items-center gap-3">
        <h1 className="text-white text-2xl font-semibold">
          Customise Your Server
        </h1>
        <p className="text-gray-400 text-wrap">
          Give your new server personality with a name and an icon. You can
          always change it later.
        </p>
        <Upload file={serverImage} setFile={setServerImage} />
        <Input
          hasBorder={false}
          value={serverName}
          setValue={setServerName}
          placeholder="Server name"
          name="serverName"
          label="Server Name"
        />
      </div>
      <div className="w-full flex items-center justify-between bg-primary-gray  text-white p-3">
        <button onClick={handleStepBack}>Back</button>
        <div className="flex items-center gap-3 bg-primary-blue p-2 rounded-md">
          <button onClick={handleCreateServer}>Create</button>
          {isLoading && <MoonLoader size={20} speedMultiplier={0.5} />}
        </div>
      </div>
    </div>
  );
};

export default CustomizeServer;
