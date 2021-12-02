import IconButton from "@components/IconButton";
import { PlusIcon } from "@heroicons/react/outline";
import React from "react";

const NoChatRoomSection = () => {
  return (
    <div className="flex flex-col items-center py-6 space-y-6">
      <div className="text-xl font-medium">You have no conversation</div>

      <IconButton
        icon={<PlusIcon className="w-5 h-5" />}
        className="text-blue-500 bg-gray-100"
      >
        New Conversation
      </IconButton>
    </div>
  );
};

export default NoChatRoomSection;
