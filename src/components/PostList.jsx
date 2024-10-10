import React from "react";
import PostItem from "./PostItem";

function PostList({ posts, onEdit, onRemove }) {
  if (posts.length === 0) {
    return (
      <div className="empty_contents">
        <p>게시글이 없습니다.</p>
      </div>
    );
  }

  return (
    <ul>
      {posts.map((post) => (
        <PostItem
          key={post.index}
          post={post}
          onEdit={onEdit}
          onRemove={onRemove}
        />
      ))}
    </ul>
  );
}

export default PostList;
