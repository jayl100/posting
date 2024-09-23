import {useState} from 'react';
import './App-post.css';
import postFunction from './function.jsx';

function AppPost() {
    const { handlePostSubmit, postRenderPage } = postFunction()
    return (
        <div className="postdemo">
            {/* 글쓰기 */}
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

            {/* 게시판 */}
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
}

export default AppPost;


