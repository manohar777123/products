import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let li_1 = React.create.createElement('li',{},'Home')
let li_2 = React.createElement('li',{},'About')
let ul = React.createElement("ul",{},[li_1,li_2])
const root = ReactDOM.createRoot(document.getElementById('root'));
//root.render(ul);
//...----using JSX-----
let menu=<ul>
  <li>Home</li>
  <li>About</li>
  </ul>

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
