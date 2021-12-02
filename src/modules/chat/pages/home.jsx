import IconButton from "@components/IconButton";
import {
  PaperAirplaneIcon,
  PlusIcon,
  SearchIcon,
} from "@heroicons/react/outline";
import React, { useState } from "react";
import ChatRoomListItem from "../components/ChatRoomListItem";
import { Scrollbars } from "react-custom-scrollbars";
import ChatMessageList from "../components/ChatMessageList";
import ChatRoomSection from "../components/ChatRoomSection";
const Home = () => {
  return (
    <div className="flex w-full h-full divide-x divide-gray-300">
      <div className="flex flex-col w-1/4 h-full p-3">
        <ChatRoomSection />
      </div>
      <div className="flex flex-col w-1/2 h-full overflow-y-hidden">
        <div className="flex flex-col flex-grow overflow-y-hidden">
          <ChatMessageList />
          <div className="flex flex-shrink-0 p-2 space-x-2">
            <input
              type="text"
              className="flex-grow px-3 py-2 font-medium transition-colors border border-gray-300 bg-gray-50 rounded-xl dark:bg-gray-800 dark:text-gray-50"
            />
            <IconButton
              icon={<PaperAirplaneIcon className="w-5 h-5 rotate-90" />}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col w-1/4 h-full overflow-y-hidden">
        <div
          className="flex flex-col flex-grow max-h-full overflow-y-hidden"
          style={{ flexBasis: 0 }}
        >
          <div className="overflow-x-hidden">
            <div>
              <div className="py-3 space-y-3 text-center">
                <div className="grid place-content-center">
                  <div className="w-20 h-20 bg-gray-300 rounded-full"></div>
                </div>
                <div className="">
                  <div className="font-semibold">Nhung Nguyễn</div>
                  <div className="text-sm text-gray-600">Đang hoạt động</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
