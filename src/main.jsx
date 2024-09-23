import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import { useState } from 'react';
import AppPost from './App-post.jsx'
import './App-post.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
      <AppPost />
  </StrictMode>,
)
