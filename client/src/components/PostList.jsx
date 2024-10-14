import React from "react";
import PostItem from "./PostItem";
// import PropTypes from "prop-types"; // PropTypes를 사용하려면 설치 필요


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

// posts는 배열, onEdit과 onRemove는 함수여야 함
// PostList.propTypes = {
//   posts: PropTypes.arrayOf(
//       PropTypes.shape({
//         index: PropTypes.number.isRequired, // 각 post 객체의 index는 숫자
//         text: PropTypes.string.isRequired,  // 각 post 객체의 text는 문자열
//         date: PropTypes.string.isRequired,  // 각 post 객체의 date는 문자열
//       })
//   ).isRequired,
//   onEdit: PropTypes.func.isRequired,
//   onRemove: PropTypes.func.isRequired,
// };

export default PostList;
