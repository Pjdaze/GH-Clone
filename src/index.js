import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'normalize.css';



import {
    BrowserRouter as Router,
    Route,
    Switch,
    NavLink
} from 'react-router-dom';


ReactDOM.render(
    <Router>
        <App/>
    </Router>,
    document.getElementById('root')
);
registerServiceWorker();
