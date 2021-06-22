import React, { Children } from 'react';
import reactDom from 'react-dom';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
const el = React.createElement('div', { d: 5, v: 4, children: ' fff', })

console.log(el)

reactDom.render(el, document.querySelector('#root'));