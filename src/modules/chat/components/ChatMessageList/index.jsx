import React, {
  useState,
  useRef,
  useEffect,
  useImperativeHandle,
  forwardRef,
} from "react";
import ChatMessageItem from "../ChatMessageItem";

const ChatMessageList = (props, ref) => {
  const [conut, setConut] = useState(25);
  const chatView = useRef(null);
  useEffect(() => {
    if (chatView.current)
      chatView.current.scrollTo(0, chatView.current.scrollHeight);
    return () => {};
  }, []);
  useImperativeHandle(
    ref,
    () => ({
      scrollDown: () => {
        if (chatView.current)
          chatView.current.scrollTo(0, chatView.current.scrollHeight);
      },
    }),
    []
  );
  return (
    <div className="relative flex flex-col flex-grow flex-shrink w-full px-1 overflow-y-hidden">
      <div
        className="flex flex-col items-end flex-grow w-full max-h-full overflow-y-hidden"
        style={{ flexBasis: 0 }}
      >
        <div className="w-full overflow-x-hidden" ref={chatView}>
          <div className="space-y-2">
            {[...Array(conut)].map(() => (
              <ChatMessageItem content={"aaaaaaaaaaaaaaaaaa"} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default forwardRef(ChatMessageList);
