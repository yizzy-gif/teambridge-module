import React from 'react';
import ReactDOM from 'react-dom/client';

// 0. Reset — clears browser default margin/padding
import './reset.css';

// 1. Alloy tokens first — defines all --color-*, --space-*, etc. CSS vars
import 'alloy-design-system/styles/tokens.css';

// 2. Geist font faces (geist v1.7+ ships woff2 only, no style.css)
import './fonts.css';

import App from './App';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
