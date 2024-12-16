// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { StudentProvider } from './StudentContext'; 

ReactDOM.render(
  <React.StrictMode>
    <StudentProvider> {/* Wrap your app with StudentProvider */}
      <App />
    </StudentProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
