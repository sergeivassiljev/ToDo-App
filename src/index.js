import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter  as Router} from 'react-router-dom'

import './index.scss' ;

ReactDOM.render(
    <Router>
        <App />
        .<small class="text-muted"></small>    
    </Router>
    , document.getElementById('root'));
