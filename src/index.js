import React from 'react';
import ReactDOM from 'react-dom';
// import 'bootstrap/dist/css/bootstrap.css'
import Badge from './components/Badge';
import App from './pages/App';
import Badges from './pages/Badges.js'

const container = document.getElementById('app');

ReactDOM.render(<Badges />, container);
