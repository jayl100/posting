// utils/postFunction.jsx
import { useState, useRef } from 'react';


function UsePostFunction() {
    const [posts, setPosts] = useState([]);
    const [index, setIndex] = useState(1);
    const [editPostId, setEditPostId] = useState(null);
    const postText = useRef(null);
    const [isEditing, setIsEditing] = useState(false);

    const handlePostSubmit = () => {
        const postDate = new Date();
        const postFormatDate = new Intl.DateTimeFormat('ko-KR', {
            year: '2-digit',
            month: '2-digit',
            day: '2-digit',
        }).format(postDate);

        if (!postText.current.value.trim()) {
            alert('등록 내용을 입력해주세요.');
            return;
        }

        if (isEditing) {
            setPosts(posts.map(post => post.index === editPostId
                ? { ...post, text: postText.current.value }
                : post));
            setIsEditing(false);
            setEditPostId(null);
            alert('수정이 완료되었습니다.');
        } else {
            setPosts([{ index, text: postText.current.value, date: postFormatDate }, ...posts]);
            setIndex(index + 1);
            alert('등록이 완료되었습니다.');
        }

        postText.current.value = '';
    };

    const onRemove = (id) => {
        setPosts(posts.filter(post => post.index !== id));
        setEditPostId(null);
        setIsEditing(false);
        alert('삭제가 완료되었습니다.');
    };

    const onEdit = (id) => {
        const post = posts.find(post => post.index === id);
        postText.current.value = post.text;
        setEditPostId(id);
        setIsEditing(true);
    };

    return {
        posts,
        handlePostSubmit,
        postText,
        isEditing,
        onEdit,
        onRemove,
    };
}

export default UsePostFunction;
