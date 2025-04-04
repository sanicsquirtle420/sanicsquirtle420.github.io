import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'
import AppRoutes from './routes'
import './utils/raccoon.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppRoutes />
  </StrictMode>,
)