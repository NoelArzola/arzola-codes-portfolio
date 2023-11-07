import React from "react";

export const CardContent = ({
  postImage,
  postText,
  postLink,
  prettyLink,
  backgroundPosition,
}) => {
  return (
    <div
      className={`bg-zinc-900 text-white rounded-md px-5 pt-6 pb-5 ${
        postImage && "h-80 flex"
      }`}
      style={
        postImage
          ? {
              backgroundImage: `url("${postImage}")`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: backgroundPosition,
              boxShadow: "0 3000px rgba(0, 0, 0, 0.4) inset",
            }
          : {}
      }
    >
      <div className="self-end">
        <p className={`text-2xl ${postLink && ""}`}>{postText}</p>
        {postLink && (
          <p className="mt-4 flex items-center text-xs font-normal h-4">
            <i className="fa-solid fa-link mr-2"></i>
            <a href={postLink}>{prettyLink}</a>
          </p>
        )}
      </div>
    </div>
  );
};
