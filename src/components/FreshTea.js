import React from "react";
import { spillDB as myBrew } from "../data/spillDB";
import { Card } from "../components/Card";

export const FreshTea = ({ isActive, onClick }) => {
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
      id="freshTea"
      className={`text-white font-semibold w-full`}
      onClick={onClick}
    >
      <div
        className={`mb-8 py-4 text-center ${
          isActive ? "border-b-white border-b-2" : ""
        }`}
      >
        <h2>Fresh Tea</h2>
      </div>
      <ul className={`${isActive ? "block" : "hidden"} w-full`}>
        {displayTeaL}
      </ul>
    </section>
  );
};
