import { useEffect, useRef } from "react";

interface IUseScrollToViewProps {
  messageList: any[];
  setMessageList: any;
}

const useScrollToView = ({
  messageList,
  setMessageList,
}: IUseScrollToViewProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messageList?.length]);

  return [scrollRef, setMessageList] as const;
};

export default useScrollToView;
