import React from "react";
// import PropTypes from "prop-types";


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

// PropTypes 설정
// PostForm.propTypes = {
//   handlePostSubmit: PropTypes.func.isRequired, // 필수 함수
//   postText: PropTypes.string.isRequired, // 필수 문자열
//   handleTextChange: PropTypes.func.isRequired, // 필수 함수
//   isEditing: PropTypes.bool.isRequired, // 필수 불리언
//   textAreaRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) }), // ref 객체
// };

export default PostForm;
