import {useState} from 'react'

import logo from './assets/header-logo.svg'
import Posting from './posting.jsx'
import './global.css'

function Header() {

    return (
        <>
            <header>
                <div className="container">
                    <div className="warp">
                        <h1 className="logo">
                            <a href="/"><img src={logo} alt="logo"/></a>
                        </h1>
                        <nav className="nav">
                            <ul>
                                <li><a href="/">게시판</a></li>
                                <li><a href="./posting.jsx">글쓰기</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header