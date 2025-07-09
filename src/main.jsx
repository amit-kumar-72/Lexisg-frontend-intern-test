import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';


// my main.jsx is used to render the app.jsx code which contains all the functionality
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
