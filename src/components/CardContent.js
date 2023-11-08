import React, { createElement, useRef } from "react";

export const CardContent = ({
  postImage,
  postText,
  postLink,
  prettyLink,
  backgroundPosition,
  mention,
  userMentioned,
}) => {
  const refEl = useRef(null);

  const updatePostContent = () => {
    if (!mention) return;
    const postWithMention = postText.replace(
      userMentioned,
      `<span class='font-bold text-[#edc600]'>${userMentioned}</span>`
    );
    const markup = { __html: postWithMention };
    return (
      <span dangerouslySetInnerHTML={markup} />
    ); /* use of this is only for the demo and to keep my sanity lol*/
  };

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
        <p className="text-2xl" ref={refEl}>
          {mention && userMentioned ? updatePostContent() : postText}
        </p>
        {postLink && (
          <p className="mt-4 flex items-center text-xs font-normal h-4">
            <i className="fa-solid fa-link mr-2"></i>
            <a href={postLink} target="_blank" rel="noreferrer">
              {prettyLink}
            </a>
          </p>
        )}
      </div>
    </div>
  );
};
