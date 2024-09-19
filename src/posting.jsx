import { useState } from 'react'

import './global.css'

function Posting() {

    return (
        <>
            <div className="entry_contents">
                <h2>글쓰기</h2>
                <section className="posting_area">
                    <div className="container">
                        <div className="contents">
                            <ul>
                                <li>
                                    <textarea name="" id="post_text" cols="30" rows="10"
                                              placeholder="내용을 입력하세요."></textarea>
                                </li>
                            </ul>
                        </div>
                        <div className="btn_area">
                            <button className="btn_submit" type="button">등록</button>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Posting