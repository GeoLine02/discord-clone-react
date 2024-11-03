import React, { forwardRef, useState } from "react";
import Input from "../ui/Input";
import { FaCirclePlus } from "react-icons/fa6";
import { MdEmojiEmotions } from "react-icons/md";
import EmojiPicker, { EmojiClickData, Theme } from "emoji-picker-react";

interface IChatInputProps {
  message: string;
  setMessage: React.Dispatch<React.SetStateAction<string>>;
}

const ChatInput = forwardRef<HTMLInputElement, IChatInputProps>(
  ({ setMessage, message }, ref) => {
    const [isEmojiDisplayed, setIsEmojiDisplayed] = useState<boolean>(false);

    const handleToggleEmojies = () => {
      setIsEmojiDisplayed(!isEmojiDisplayed);
    };

    const getEmojiUrl = (emojiData: EmojiClickData, event: MouseEvent) => {
      console.log(emojiData);
      setIsEmojiDisplayed(false);
      setMessage((prev: string) => `${prev} ${emojiData.emoji}`);
    };

    return (
      <div className="flex items-center gap-2 bg-primary-gray px-3 rounded-lg min-w-full">
        <FaCirclePlus className="cursor-pointer" size={23} />
        <div className="min-w-[96%]">
          <Input
            hasBorder={false}
            setValue={setMessage}
            value={message}
            placeholder="Message #General"
            ref={ref}
          />
        </div>
        <div className="relative">
          <MdEmojiEmotions
            onClick={handleToggleEmojies}
            className="cursor-pointer"
            size={28}
          />
          <div className="absolute bottom-11 right-0">
            <EmojiPicker
              lazyLoadEmojis={true}
              autoFocusSearch={true}
              theme={"dark" as Theme}
              onEmojiClick={getEmojiUrl}
              open={isEmojiDisplayed}
            />
          </div>
        </div>
      </div>
    );
  }
);

export default ChatInput;
