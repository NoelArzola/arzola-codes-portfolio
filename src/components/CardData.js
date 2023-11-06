import React from "react";

/* this component can obviously be broken down even further, but for the sake of time leaving it as is */
export const CardData = ({
  userImage,
  username,
  commentCount,
  quoteCount,
  likeCount,
}) => {
  return (
    <div className="flex flex-row justify-between font-normal mt-2">
      <div className="flex items-center">
        <img src={userImage} alt="" className="rounded-full h-5 w-5 mr-1.5" />
        <p className="text-xs font-bold">{username}</p>
      </div>
      <div className="flex items-center">
        <div className="flex flex-row items-center mr-2.5">
          <i
            className={`fa-regular fa-message fa-flip-horizontal text-xs ${
              commentCount > 0 ? "mr-1" : ""
            }`}
          ></i>
          {commentCount > 0 && <p className="text-xs">{commentCount}</p>}
        </div>
        <div className="flex flex-row items-center mr-2.5">
          <i
            className={`fa-solid fa-quote-left ${quoteCount > 0 ? "mr-1" : ""}`}
          ></i>
          {quoteCount > 0 && <p className="text-xs">{quoteCount}</p>}
        </div>
        <div className="flex flex-row items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height=".75em"
            viewBox="0 0 512 512"
            style={{ fill: "#ffffff" }}
            className={`${likeCount > 0 ? "mr-1" : ""}`}
          >
            <path d="M88 0C74.7 0 64 10.7 64 24c0 38.9 23.4 59.4 39.1 73.1l1.1 1C120.5 112.3 128 119.9 128 136c0 13.3 10.7 24 24 24s24-10.7 24-24c0-38.9-23.4-59.4-39.1-73.1l-1.1-1C119.5 47.7 112 40.1 112 24c0-13.3-10.7-24-24-24zM32 192c-17.7 0-32 14.3-32 32V416c0 53 43 96 96 96H288c53 0 96-43 96-96h16c61.9 0 112-50.1 112-112s-50.1-112-112-112H352 32zm352 64h16c26.5 0 48 21.5 48 48s-21.5 48-48 48H384V256zM224 24c0-13.3-10.7-24-24-24s-24 10.7-24 24c0 38.9 23.4 59.4 39.1 73.1l1.1 1C232.5 112.3 240 119.9 240 136c0 13.3 10.7 24 24 24s24-10.7 24-24c0-38.9-23.4-59.4-39.1-73.1l-1.1-1C231.5 47.7 224 40.1 224 24z" />
          </svg>
          {likeCount > 0 && <p className="text-xs">{likeCount}</p>}
        </div>
      </div>
    </div>
  );
};
