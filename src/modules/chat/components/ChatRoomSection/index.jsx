import IconButton from "@components/IconButton";
import { PlusIcon, SearchIcon } from "@heroicons/react/outline";
import React, { useState } from "react";
import Scrollbars from "react-custom-scrollbars";
import ChatRoomListItem from "../ChatRoomListItem";
import NoChatRoomSection from "./components/NoChatRoomSection";

const ChatRoomSection = () => {
  const [count, setConut] = useState(0);
  return (
    <>
      <div className="flex items-center justify-between w-full">
        <div className="text-xl font-bold">Chat</div>
        <div className="flex space-x-2">
          <IconButton
            icon={<SearchIcon className="w-5 h-5" />}
            onClick={() => setConut(count + 1)}
          />

          <IconButton icon={<PlusIcon className="w-5 h-5" />} />
        </div>
      </div>
      <div className="flex-grow min-h-0 px-1 -mx-3">
        {count === 0 && <NoChatRoomSection />}
        {count > 0 && (
          <Scrollbars style={{ width: "100%", height: "100%" }} autoHide>
            {[...Array(count)].map(() => (
              <ChatRoomListItem />
            ))}
          </Scrollbars>
        )}
      </div>
    </>
  );
};

export default ChatRoomSection;
