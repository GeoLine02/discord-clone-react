import React, { forwardRef } from "react";
import Input from "../ui/Input";
import { FaCirclePlus } from "react-icons/fa6";
import { MdEmojiEmotions } from "react-icons/md";

interface IChatInputProps {
  message: string;
  setMessage: React.Dispatch<React.SetStateAction<string>>;
}

const ChatInput = forwardRef<HTMLInputElement, IChatInputProps>(
  ({ setMessage, message }, ref) => {
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
        <MdEmojiEmotions className="cursor-pointer" size={28} />
      </div>
    );
  }
);

export default ChatInput;
