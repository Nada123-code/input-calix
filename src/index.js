import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import InputComponent from './Features/InputComponent';
import reportWebVitals from './reportWebVitals';
import r2wc from "@r2wc/react-to-web-component"


const calixInput = r2wc(InputComponent,{props:['label','error_message','type','hint']});

customElements.define("calix-input", calixInput)




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

