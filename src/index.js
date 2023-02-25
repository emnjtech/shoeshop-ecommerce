import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom'
import CommerceState from './context/commerce-state'

ReactDOM.render(
    <CommerceState>  
        <Router>
        <App />
        </Router>
    </CommerceState>
        ,document.getElementById('root')
);
