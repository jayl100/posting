import { useState } from 'react'

import './global.css'

function List() {

    return (
        <>
            <div className="entry_contents">
                <h2>게시판</h2>
                <section className="list_area">
                    <div className="container">
                        <ul>
                            <li className="post_list">
                                <span className="post_no">202</span>
                                <h3 className="post_title">description</h3>
                                <span className="post_date">2024.09.15</span>
                            </li>
                            <li className="post_list">
                                <span className="post_no">202</span>
                                <h3 className="post_title">description</h3>
                                <span className="post_date">2024.09.15</span>
                            </li>
                        </ul>
                    </div>
                </section>
            </div>
        </>
    )
}

export default List