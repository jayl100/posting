import {useState} from 'react';
// import Post from "./post.jsx";

function postFunctions() {
    const [posts, setPosts] = useState([])
    const [setIndex, nextIndex] = useState(1)

    const handlePostSubmit = () => {
        const postText = document.getElementById('post_text').value
        const postDate = new Date()
        const postFormatDate = new Intl.DateTimeFormat('ko-KR', {
            year: '2-digit',
            month: '2-digit',
            day: '2-digit'
        }).format(postDate)
        if (postText.trim()) {
            setPosts([{index: setIndex, text: postText, date: postFormatDate}, ...posts])
            nextIndex(setIndex + 1)
            document.getElementById('post_text').value = ''
        }
    }
    const postRenderPage = () => {
        if (posts.length > 0) {
            return (
                <div className="exist">
                    <ul className="list">
                        {posts.map((post) => (
                            <li key={post.index} className="post_list">
                                <span className="post_no">{post.index}</span>
                                <h3 className="post_title">{post.text}</h3>
                                <span className="post_date">{post.date}</span>
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
        postRenderPage,
    }
}


export default postFunctions;


