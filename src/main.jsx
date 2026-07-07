import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// ============================================================
// VERCEL ANALYTICS (optional) — after `npm install @vercel/analytics`,
// uncomment the two lines below:
// import { inject } from '@vercel/analytics'
// inject()
// ============================================================

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
