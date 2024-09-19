import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import Header from './header.jsx'
import Posting from './posting.jsx'
import List from './list-main.jsx'
// import './index.css'
import './global.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <Posting />
      <List />
  </StrictMode>,
)




