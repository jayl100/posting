import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import { useState } from 'react';
import Post from './post.jsx'
import './post.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
      <Post />
  </StrictMode>,
)
