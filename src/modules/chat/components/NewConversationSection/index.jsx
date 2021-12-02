import React from "react";
import SearchUserItem from "./components/SearchUserItem";

const NewConversationSection = () => {
  return (
    <div>
      <input type="text" placeholder="Search" />
      <div className="space-y-2">
        <SearchUserItem />
        <SearchUserItem />
        <SearchUserItem />
        <SearchUserItem />
        <SearchUserItem />
      </div>
    </div>
  );
};

export default NewConversationSection;
