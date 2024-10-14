import React from "react";
// import PropTypes from "prop-types";


function PostItem({ post, onEdit, onRemove }) {

  return (
    <li className="post_list">
      <span className="post_no">{post.index}</span>
      <h3 className="post_title" style={{ whiteSpace: "pre-wrap" }}>
        {post.text}
      </h3>
      <span className="post_date">{post.date}</span>
      <div className="hover">
        <button className="btn_submit" onClick={() => onEdit(post.index)}>
          수정
        </button>
        <button className="btn_submit" onClick={() => onRemove(post.index)}>
          삭제
        </button>
      </div>
    </li>
  );
}

// PropTypes 설정
// PostItem.propTypes = {
//     post: PropTypes.shape({
//         index: PropTypes.number.isRequired, // 필수 숫자
//         text: PropTypes.string.isRequired, // 필수 문자열
//         date: PropTypes.string.isRequired, // 필수 문자열
//     }).isRequired, // 필수 객체
//     onEdit: PropTypes.func.isRequired, // 필수 함수
//     onRemove: PropTypes.func.isRequired, // 필수 함수
// };

export default PostItem;
