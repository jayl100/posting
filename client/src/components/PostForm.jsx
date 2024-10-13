import React from "react";

function PostForm({ handlePostSubmit, postText, handleTextChange, isEditing, textAreaRef }) {
  return (
    <div className="posting_area">
      <div className="container">
        <h2>글쓰기</h2>
        <form onSubmit={handlePostSubmit}>
          <div className="contents">
            <textarea
              ref={textAreaRef}
              value={postText} // postText 상태가 textarea의 값으로 설정
              onChange={handleTextChange} // 값이 변경되면 handleTextChange 호출
              cols="30"
              rows="5"
              placeholder="내용을 입력하세요."
            />
          </div>
          <div className="btn_area">
            <button type="submit" className="btn_submit">
              {isEditing ? "수정" : "등록"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PostForm;
