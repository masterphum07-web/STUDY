import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/global.css';
import App from './app/App';

// Automatically reload page when a new deployment creates new chunk hashes
window.addEventListener('vite:preloadError', (event) => {
  console.warn('[Vite] Preload error detected, reloading page to fetch latest version...', event);
  const reloaded = sessionStorage.getItem('vite_preload_reloaded');
  if (!reloaded) {
    sessionStorage.setItem('vite_preload_reloaded', 'true');
    window.location.reload();
  }
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
