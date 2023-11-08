import React from "react";
import { spillDB as myBrew } from "../data/spillDB";
import { Card } from "../components/Card";

export const FreshTea = ({ isActive, onClick }) => {
  const sippin = myBrew;

  const displayTeaL = sippin.map((post) => (
    <Card
      key={post.postID}
      postID={post.postID}
      username={post.username}
      userImage={post.userImage}
      commentCount={post.commentCount}
      quoteCount={post.quoteCount}
      likeCount={post.likeCount}
      postText={post.postText}
      postImage={post.postImage}
      postLink={post.postLink}
      prettyLink={post.prettyLink}
      createDate={post.createDate}
      following={post.following}
      backgroundPosition={post.backgroundPosition}
      mention={post.mention}
      userMentioned={post.userMentioned}
    />
  ));

  return (
    <section
      id="freshTea"
      className={`text-white font-semibold w-full max-w-7xl mx-auto`}
      onClick={onClick}
    >
      <ul
        className={`${
          isActive ? "block" : "hidden"
        } w-full flex flex-col-reverse md:flex-row-reverse md:flex-wrap gap-4`}
      >
        {displayTeaL}
      </ul>
    </section>
  );
};
