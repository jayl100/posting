// import { useState } from 'react';
import './post.css'

function Header() {

return (
    <>
        <header>
            <div className="container">
                <div className="warp">
                    <h1 className="logo">
                        <a href="/"><img src="../src/assets/header-logo.svg" alt="logo"/></a>
                    </h1>
                    <nav className="nav">
                        <ul>
                            {/*<li><a href="/">게시판</a></li>*/}
                            {/*<li><a href="/posting">글쓰기</a></li>*/}
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    </>
)
}

export default Header
