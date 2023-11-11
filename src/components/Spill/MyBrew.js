import React from "react";
import { spillDB as myBrew } from "../../data/spillDB";
import { Card } from "./Card";

export const MyBrew = ({ isActive }) => {
  const sippin = myBrew.filter((post) => post.following);

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
      id="myBrew"
      className="text-white font-semibold w-full  max-w-7xl mx-auto"
    >
      <ul
        className={`${
          isActive ? "block" : "hidden"
        } w-full flex flex-col-reverse md:flex-row md:flex-wrap md:justify-center xl:justify-end gap-x-4`}
      >
        {displayTeaL}
      </ul>
    </section>
  );
};
