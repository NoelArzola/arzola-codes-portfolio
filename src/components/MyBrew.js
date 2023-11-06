import React from "react";
import { spillDB as myBrew } from "../data/spillDB";
import { Card } from "../components/Card";

export const MyBrew = ({ isActive, onClick }) => {
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
    />
  ));

  return (
    <section
      id="myBrew"
      className={` text-white font-semibold w-full`}
      onClick={onClick}
    >
      <ul
        className={`${
          isActive ? "block" : "hidden"
        } w-full flex flex-col flex-col-reverse`}
      >
        {displayTeaL}
      </ul>
    </section>
  );
};
