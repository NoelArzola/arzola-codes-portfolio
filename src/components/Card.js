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
}) => {
  return (
    <li post={postID} className="mb-8">
      <CardContent
        postImage={postImage}
        postText={postText}
        postLink={postText}
        prettyLink={prettyLink}
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
