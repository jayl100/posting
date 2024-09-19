import {useState} from 'react';
import './post.css';

function PostDemo() {
    const [posts, setPosts] = useState([]);
    const [setIndex, nextIndex] = useState(1);

    const handlePostSubmit = () => {
        const postText = document.getElementById('post_text').value;
        const postDate = new Date();
        const postFormatDate = new Intl.DateTimeFormat('ko-KR', {
            year: '2-digit',
            month: '2-digit',
            day: '2-digit'
        }).format(postDate);
        if (postText.trim()) {
            setPosts([{index: setIndex, text: postText, date: postFormatDate}, ...posts]);
            nextIndex(setIndex + 1);
            document.getElementById('post_text').value = '';
        }
    };

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


    return (
        <div className="postdemo">
            {/* 글쓰기 영역 */}
            <div className="entry_contents">
            <section className="posting_area">
                    <div className="container">
                        <h2>글쓰기</h2>
                        <div className="contents">
                            <ul>
                                <li>
                                    <textarea id="post_text" cols="30" rows="5" placeholder="내용을 입력하세요."></textarea>
                                </li>
                            </ul>
                        </div>
                        <div className="btn_area">
                            <button className="btn_submit" type="button" onClick={handlePostSubmit}>등록</button>
                        </div>
                    </div>
                </section>
            </div>

            {/* 게시판 영역 */}
            <div className="entry_contents">
                <section className="list_area">
                    <div className="container">
                        <h2>게시판</h2>
                        {postRenderPage()}
                    </div>
                </section>
            </div>
        </div>
    )
        ;
}

export default PostDemo;


