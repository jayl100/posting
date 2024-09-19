import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { useState } from 'react';
import Header from './header.jsx'
import PostDemo from './post-demo.jsx'
import './post.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
      {/*<Header />*/}
      <PostDemo />
  </StrictMode>,
)
