import React from "react";

const ChatRoomListItem = () => {
  return (
    <div className="flex items-center justify-between p-4 space-x-2">
      <div className="flex-shrink-0 bg-gray-200 rounded-lg w-14 h-14"></div>
      <div className="flex flex-col items-stretch flex-grow flex-shrink min-w-0">
        <div className="w-full">
          <div className="font-medium text-indigo-700">Name</div>
          <div className="flex items-center w-full space-x-1 text-sm text-gray-500 break-words">
            <span className="flex-shrink overflow-x-hidden line-clamp-1">
              Bạn::)))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))0
            </span>
            <span>·</span>
            <span className="flex-shrink-0 whitespace-nowrap">34 phút</span>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default ChatRoomListItem;
