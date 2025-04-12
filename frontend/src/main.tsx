import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App_bkp.tsx'
import { BrowserRouter } from 'react-router-dom'
import './styles/index.css'
import App from './App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
