import React from "react";

export const CardContent = ({ postImage, postText, postLink, prettyLink }) => {
  return (
    <div
      className="bg-zinc-900 text-white rounded-md p-5"
      style={postImage ? { backgroundImage: postImage } : {}}
    >
      <p className="text-2xl">{postText}</p>
      {postLink && (
        <p className="mt-4 flex items-center text-xs font-normal">
          <i className="fa-solid fa-link mr-2"></i>
          <a href={postLink}>{prettyLink}</a>
        </p>
      )}
    </div>
  );
};
