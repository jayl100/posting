import React from 'react';
import { createRoot } from 'react-dom/client';
import Post from './post.jsx';

createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Post />
    </React.StrictMode>,
);
