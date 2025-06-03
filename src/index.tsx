import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';

const rootElement = document.getElementById('root') as HTMLElement;

// React 18 concurrent features ile hızlı render
const root = createRoot(rootElement);
root.render(<App />);

// Performance monitoring sadece production'da
if (process.env.NODE_ENV === 'production') {
  import('./reportWebVitals').then((module) => {
    module.default();
  });
}
