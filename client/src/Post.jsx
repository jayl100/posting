import React from "react";
import usePost from "./hook/usePost.js";
import PostForm from "./components/PostForm.jsx";
import PostList from "./components/PostList.jsx";
import "./index.css";

function Post() {
  const {
    posts,
    handlePostSubmit,
    postText, // postText 상태 추가
    handleTextChange, // handleTextChange 추가
    isEditing,
    onEdit,
    onRemove,
    textAreaRef,
  } = usePost();

  return (
    <div className="postdemo">
      <PostForm
        postText={postText} // postText 전달
        handleTextChange={handleTextChange} // handleTextChange 전달
        handlePostSubmit={handlePostSubmit}
        isEditing={isEditing}
        textAreaRef={textAreaRef} // textAreaRef 전달
      />
      <section className="list_area">
        <div className="container">
          <h2>게시판</h2>
          <PostList posts={posts} onEdit={onEdit} onRemove={onRemove} />
        </div>
      </section>
    </div>
  );
}

export default Post;
