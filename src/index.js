// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import App from './App'
//импорт стилей для всего приложения
import './css/main.css'
const app = ReactDOMClient.createRoot(document.getElementById('root'))

app.render(<App />)