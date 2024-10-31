import { useEffect, useLayoutEffect, useState } from "react";
import { IServer } from "../../types/servers";
import TextChannelsList from "../serverByName/TextChannelsList";
import VoiceChannelsList from "../serverByName/VoiceChannelsList";
import Modal from "../ui/Modal";
import ChannelCreation from "./ChannelCreation";
import { getSocket } from "../../context/AuthProvider";
import { IChannel } from "../../types/channels";

interface IChannelsProps {
  serverByName: IServer;
}

const Channels = ({ serverByName }: IChannelsProps) => {
  const [openChannelCreateModal, setToggleChannelCreateModal] =
    useState<boolean>(false);
  useLayoutEffect(() => {
    setChannels(serverByName?.channels);
  }, [serverByName]);
  const [channels, setChannels] = useState<IChannel[] | undefined>();
  const [channelType, setChannelType] = useState<string>("text");
  const [channelName, setChannelName] = useState<string>("");
  const handleToogleChannelCreateModal = () => {
    setToggleChannelCreateModal(!openChannelCreateModal);
  };
  const socket = getSocket();

  const handleChangeChannelType = (channelType: string) => {
    setChannelType(channelType);
  };
  useEffect(() => {
    socket.on("new-channel-created", (channelObj) => {
      const { serverId, channelName, channelType } = channelObj;
      const lastChannelIndex =
        channels && [...(channels as IChannel[])].reverse()[0].id;
      const newChannel: IChannel = {
        id: (lastChannelIndex as number) + 1,
        channelName: channelName,
        channelType: channelType,
        serverId: serverId,
      };
      if (channels) {
        setChannels([...(channels as IChannel[]), newChannel]);
      }
    });
  }, [channels, socket]);

  const handleCreateChannel = () => {
    socket.emit("create-channel", {
      serverId: serverByName?.id,
      channelName,
      channelType,
      serverName: serverByName?.serverName,
    });
    setToggleChannelCreateModal(false);
  };

  return (
    <div className="px-2 space-y-2">
      <TextChannelsList
        handleToogleChannelCreateModal={handleToogleChannelCreateModal}
        channels={channels as IChannel[]}
      />
      <VoiceChannelsList
        handleToogleChannelCreateModal={handleToogleChannelCreateModal}
        channels={channels as IChannel[]}
      />
      {openChannelCreateModal && (
        <Modal>
          <ChannelCreation
            channelType={channelType}
            handleChangeChannelType={handleChangeChannelType}
            handleToogleChannelCreateModal={handleToogleChannelCreateModal}
            channelName={channelName}
            setChannelName={setChannelName}
            handleCreateChannel={handleCreateChannel}
          />
        </Modal>
      )}
    </div>
  );
};

export default Channels;
