import {useState} from 'react';

// import Post from "./post.jsx";

function postFunction() {

    const [posts, setPosts] = useState([])
    const [index, setIndex] = useState(1)
    const [editPostId, setEditPostId] = useState(null)
    const postText = document.getElementById('post_text')
    const setSubmitBtnText = document.getElementById('submitEdit') // 버튼명 등록 >> 수정


    // 등록 클릭 시 등록, 수정 버튼 클릭 후 수정되게끔 함.
    const handlePostSubmit = () => {
        const postDate = new Date()
        const postFormatDate = new Intl.DateTimeFormat('ko-KR', {
            year: '2-digit',
            month: '2-digit',
            day: '2-digit'
        }).format(postDate)

        // 버튼명이 '등록' 이고 내용이 있을 시 게시글이 등록
        if (setSubmitBtnText.innerHTML === '등록' && postText.value.trim()) {
                setPosts([{index: index, text: postText.value, date: postFormatDate}, ...posts])
                setIndex(index + 1)
                document.getElementById('post_text').value = ''
        }
        //
        else {
            setPosts(posts.map(post => post.index === editPostId ? {...post, text: postText.value} : post))
            setSubmitBtnText.innerHTML = '등록'
            postText.value = ''
            alert('수정이 완료되었습니다.')
        }
    }

    // 게시글 삭제
    const onRemove = (id) => {
        setPosts(posts.filter(post => post.index !== id))
        alert('삭제가 완료되었습니다.')
    }

    // 게시글 수정 (textarea에서 수정됨)
    const onEdit = (id) => {
        setEditPostId(id) // editPostId === id로 설정

        setSubmitBtnText.innerHTML = '수정'
        postText.value = posts.find(post => post.index === id)?.text
        // h3 text >>>  text.value
    }

    const postRenderPage = () => {

        if (posts.length > 0) {
            return (
                <div className="exist">
                    <ul>
                        {posts.map((post) => (
                            <li key={post.index} onRemove={onRemove} onEdit={onEdit} className="post_list">
                                <span className="post_no">{post.index}</span>
                                <h3 className="post_title">{post.text}</h3>
                                <span className="post_date">{post.date}</span>
                                <div className="hover">
                                    <button className="btn_submit" id="btn_edit" type="button" onClick={() => {
                                        onEdit(post.index)
                                    }}>수정
                                    </button>
                                    <button className="btn_submit" type="button"
                                            onClick={() => onRemove(post.index)}>삭제
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            )
        } else {
            return (
                <div className="empty_contents">
                    <p>게시글이 없습니다.</p>
                </div>
            )
        }
    }

    return {
        handlePostSubmit,
        postRenderPage
    }
}

export default postFunction;


