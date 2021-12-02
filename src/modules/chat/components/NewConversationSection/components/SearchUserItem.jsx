import React from "react";

const SearchUserItem = () => {
  return (
    <div className="flex items-center justify-between p-2">
      <div className="flex items-center flex-grow space-x-2">
        <div className="rounded-full w-14 h-14"></div>
        <div className="flex-grow">
          <div>Name</div>
        </div>
      </div>
      <button className="flex-shrink-0 px-3 py-2 border-2 border-blue-500 rounded-md">
        Add
      </button>
    </div>
  );
};

export default SearchUserItem;
