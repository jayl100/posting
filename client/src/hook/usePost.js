import { useState, useRef } from 'react';

function usePost() {
    const [posts, setPosts] = useState([]);
    const index = useRef(1);
    const [editPostId, setEditPostId] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const [postText, setPostText] = useState('');
    const textAreaRef = useRef(null); // DOM 요소에 대한 ref 생성


    const handleTextChange = (e) => {
        setPostText(e.target.value);
    };

    const handlePostSubmit = (e) => {
        e.preventDefault();

        const postDate = new Date();
        const postFormatDate = new Intl.DateTimeFormat('ko-KR', {
            year: '2-digit',
            month: '2-digit',
            day: '2-digit',
        }).format(postDate);

        // 빈칸일 시 내용 등록 불가
        if (!postText.trim()) {
            alert('내용을 입력해주세요.');
            return;
        }

        // 수정상태일 떄
        if (isEditing) {
            setPosts(posts.map(post => post.index === editPostId
                ? { ...post, text: postText }
                : post));
            setIsEditing(false);
            setEditPostId(null);
            alert('수정이 완료되었습니다.');
        }
        // 등록할 때
        else {
            setPosts([{ index : index.current, text: postText, date: postFormatDate }, ...posts]);
            index.current += 1;
            alert('등록이 완료되었습니다.');
        }

        setPostText(''); // 등록 또는 수정 후 텍스트 초기화
    };

    const onRemove = (id) => {
        setPosts(posts.filter(post => post.index !== id));
        setEditPostId(null);
        setIsEditing(false);
        alert('삭제가 완료되었습니다.');
        setPostText(''); // 등록 또는 수정 후 텍스트 초기화
    };

    const onEdit = (id) => {
        const post = posts.find(post => post.index === id);
        setPostText(post.text);
        setEditPostId(id);
        setIsEditing(true);
        textAreaRef.current.focus();
    };

    return {
        posts,
        handlePostSubmit,
        postText,
        handleTextChange,
        isEditing,
        onEdit,
        onRemove,
        textAreaRef
    };
}

export default usePost;
