import Input from "../ui/Input";

interface IJoinServerProps {
  handleStepBack: () => void;
  translate: number;
}

const JoinServer = ({ handleStepBack, translate }: IJoinServerProps) => {
  return (
    <div
      className="min-w-full max-w-full min-h-full flex flex-col justify-between transition-all duration-700 ease-in-out"
      style={{
        transform: `translate(${translate}%)`,
      }}
    >
      <div className="space-y-3">
        <div className="text-center">
          <h1 className="text-2xl text-white font-semibold">Join a Server</h1>
          <p className="text-wrap">
            enter an invite below to join an existing server
          </p>
        </div>
        <Input name="joinServer" />
        <span>invites link should look like</span>
        <div>
          <span>gfTdjag</span>
          <span>gfTdjag</span>
        </div>
      </div>
      <div className="w-full bg-primary-gray p-3 text-white flex items-center justify-between">
        <button onClick={handleStepBack}>Back</button>
        <button className="bg-primary-blue rounded-md p-2">Join server</button>
      </div>
    </div>
  );
};

export default JoinServer;
