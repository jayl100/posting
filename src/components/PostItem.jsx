import React from 'react';

function PostItem({ post, onEdit, onRemove }) {
    return (
        <li className="post_list">
            <span className="post_no">{post.index}</span>
            <h3 className="post_title">{post.text}</h3>
            <span className="post_date">{post.date}</span>
            <div className="hover">
                <button className="btn_submit" onClick={() => onEdit(post.index)}>수정</button>
                <button className="btn_submit" onClick={() => onRemove(post.index)}>삭제</button>
            </div>
        </li>
    );
}

export default PostItem;
