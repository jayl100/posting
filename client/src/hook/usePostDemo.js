import {useState, useRef, useEffect} from 'react';

function usePostDemo() {
    const [posts, setPosts] = useState([]);
    const [editPostId, setEditPostId] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const [postText, setPostText] = useState('');
    const textAreaRef = useRef(null); // DOM 요소에 대한 ref 생성

    const handleTextChange = (e) => {
        setPostText(e.target.value);
    };

    const handlePostSubmit = async (e) => {
        e.preventDefault();

        // 빈칸일 시 내용 등록 불가
        if (!postText.trim()) {
            alert('내용을 입력해주세요.');
            return;
        }

        // 수정상태일 떄
        if (isEditing) {
            setPosts(posts.map(post => post.index === editPostId
                ? {...post, text: postText}
                : post));
            setIsEditing(false);
            setEditPostId(null);
            alert('수정이 완료되었습니다.');

            // 서버로 수정된 게시글을 보내는 코드 추가 (PUT 요청)
            try {
                const response = await fetch('http://localhost:1111', {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ index: editPostId, text: postText }) // index와 text 포함
                });
                const data = await response.json();
                console.log(data);
            } catch (error) {
                console.error('Error updating post:', error);
            }

        }
        // 등록할 때
        else {
            try {
                const response = await fetch(`http://localhost:1111`, {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify({text: postText})
                });

                if (!response.ok) {
                    throw new Error('failed create post');
                }

                const data = await response.json();
                console.log(data);
                alert('등록 완료')

            } catch (error) {
                console.error('error posting data: ', error);
                alert('등록 실패')
            }
        }
        await fetchPosts();
        setPostText('');
    };

    const onRemove = async (id) => {
        setPosts(posts.filter(post => post.index !== id));
        setEditPostId(null);
        setIsEditing(false);
        alert('삭제가 완료되었습니다.');

        try {
            const response = await fetch(`http://localhost:1111`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({id})
            });
            const data = await response.json();
            console.log(data);

        } catch (error) {
            console.error('Error deleting post:', error);
        }
        setPostText(''); // 등록 또는 수정 후 텍스트 초기화
    };

    const onEdit = async (id) => {
        const post = posts.find(post => post.index === id);
        setPostText(post.text);
        setEditPostId(id);
        setIsEditing(true);
        textAreaRef.current.focus();


    };

    const fetchPosts = async () => {
        try {
            const response = await fetch('http://localhost:1111', {
                method: 'GET',
            }); // GET 요청
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json(); // 응답 데이터를 JSON으로 변환
            setPosts(data); // posts 상태에 서버에서 받아온 데이터 설정
        } catch (error) {
            console.error('Error fetching posts:', error.message);
            alert(`게시글을 불러오는데 문제가 발생했습니다: ${error.message}`);
        }
    };


    useEffect(() => {
        fetchPosts().then(res => res.json());
    }, []); // 필요한 경우 다른 의존성을 추가


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

export default usePostDemo;
