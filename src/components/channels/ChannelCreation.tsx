import {
  IoIosClose,
  IoMdRadioButtonOff,
  IoMdRadioButtonOn,
} from "react-icons/io";
import { FaHashtag } from "react-icons/fa6";
import Input from "../ui/Input";

interface ICHannelCreationProps {
  handleToogleChannelCreateModal: () => void;
  handleChangeChannelType: (channelType: string) => void;
  channelType: string;
  channelName: string;
  setChannelName: React.Dispatch<React.SetStateAction<string>>;
  handleCreateChannel: () => void;
}

const ChannelCreation = ({
  handleToogleChannelCreateModal,
  handleChangeChannelType,
  channelType,
  channelName,
  setChannelName,
  handleCreateChannel,
}: ICHannelCreationProps) => {
  return (
    <div className="min-w-[500px] bg-secondary-gray rounded-lg p-2">
      <header className="text-white flex items-center justify-between">
        <h1 className="text-2xl">Create channel</h1>
        <IoIosClose
          className="cursor-pointer"
          onClick={handleToogleChannelCreateModal}
          size={40}
        />
      </header>
      <main>
        <div className="flex flex-col gap-4 px-2 py-4">
          <span className="uppercase text-sm font-semibold">channel type</span>
          <div
            onClick={() => handleChangeChannelType("text")}
            className={`flex items-center justify-between cursor-pointer hover:bg-hover-gray p-2 rounded-md ${
              channelType === "text" && "bg-hover-gray"
            }`}
          >
            <FaHashtag size={25} />
            <div>
              <h2 className="text-xl">Text</h2>
              <p>Send messages, images, GIFs, emoji, opinions and puns</p>
            </div>
            {channelType === "text" ? (
              <IoMdRadioButtonOn size={25} />
            ) : (
              <IoMdRadioButtonOff size={25} />
            )}
          </div>
          <div
            onClick={() => handleChangeChannelType("voice")}
            className={`flex items-center justify-between cursor-pointer p-2 hover:bg-hover-gray rounded-md ${
              channelType === "voice" && "bg-hover-gray"
            }`}
          >
            <FaHashtag size={25} />
            <div>
              <h2 className="text-xl">Voice</h2>
              <p>Hang out together with voice, video and screen share</p>
            </div>
            {channelType === "voice" ? (
              <IoMdRadioButtonOn size={25} />
            ) : (
              <IoMdRadioButtonOff size={25} />
            )}
          </div>
        </div>
        <div className="py-6">
          <span className="uppercase font-semibold text-sm">channel name</span>
          <div className="bg-primary-gray text-white flex items-center rounded-md px-2 min-w-full ">
            <FaHashtag />
            <Input
              className="min-w-full"
              setValue={setChannelName}
              value={channelName}
              hasBorder={false}
              placeholder="new-channel"
            />
          </div>
        </div>
      </main>
      <footer className="bg-accent-gray text-white p-2 flex gap-3 items-center justify-end">
        <button
          onClick={handleToogleChannelCreateModal}
          className="p-2 hover:bg-hover-gray rounded-md"
        >
          Cancel
        </button>
        <button
          onClick={handleCreateChannel}
          disabled={!channelName.length}
          className="p-2 bg-primary-blue disabled:bg-opacity-50 rounded-md disabled:cursor-not-allowed"
        >
          Create Channel
        </button>
      </footer>
    </div>
  );
};

export default ChannelCreation;
