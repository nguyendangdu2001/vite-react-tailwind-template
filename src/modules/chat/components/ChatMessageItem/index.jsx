import React from "react";

const ChatMessageItem = ({ isSented, content, user }) => {
  return (
    <div>
      <div className="flex items-end w-full space-x-2">
        <div className="w-10 h-10 bg-gray-400 rounded-lg"></div>
        <div className="max-w-[540px] break-words bg-gray-200 rounded-xl py-2 px-3 font-medium">
          {content}
        </div>
      </div>
    </div>
  );
};

export default ChatMessageItem;
