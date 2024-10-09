import React from 'react';

function PostForm({ handlePostSubmit, postText, isEditing }) {
    return (
        <div className="posting_area">
            <div className="container">
                <h2>글쓰기</h2>
                <div className="contents">
                    <textarea ref={postText} cols="30" rows="5" placeholder="내용을 입력하세요."></textarea>
                </div>
                <div className="btn_area">
                    <button onClick={handlePostSubmit} className="btn_submit">
                        {isEditing ? '수정' : '등록'}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default PostForm;
