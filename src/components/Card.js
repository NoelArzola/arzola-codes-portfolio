import React from "react";
import { CardContent } from "./CardContent";
import { CardData } from "./CardData";

export const Card = ({
  postID,
  username,
  userImage,
  commentCount,
  quoteCount,
  likeCount,
  postText,
  postImage,
  postLink,
  prettyLink,
  backgroundPosition,
  mention,
  userMentioned,
}) => {
  return (
    <li post={postID} className="mb-8 md:w-[48%] lg:w-[32%]">
      <CardContent
        postImage={postImage}
        postText={postText}
        postLink={postLink}
        prettyLink={prettyLink}
        backgroundPosition={backgroundPosition}
        mention={mention}
        userMentioned={userMentioned}
      />
      <CardData
        userImage={userImage}
        username={username}
        commentCount={commentCount}
        quoteCount={quoteCount}
        likeCount={likeCount}
      />
    </li>
  );
};
