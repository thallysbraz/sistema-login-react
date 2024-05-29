import React from 'react';
import ReactDOM from 'react-dom/client';
import Login from './Pages/Login/index';
import GlobalStyle from './Pages/styles/global';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <Login />
  </React.StrictMode>
);
