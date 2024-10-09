import React from 'react';
import UsePostFunction from './components/PostFunction.jsx';
import PostForm from './components/PostForm';
import PostList from './components/PostList';
import './post.css';

function Post() {
    const {
        posts,
        handlePostSubmit,
        postText,
        isEditing,
        onEdit,
        onRemove,
    } = UsePostFunction();

    return (
        <div>
            <PostForm handlePostSubmit={handlePostSubmit} postText={postText} isEditing={isEditing} />
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
