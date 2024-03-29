import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './css/Square.css'
// import App from './App';
// import PostList from './components/PostList'
// import Board from './components/Board'
import Game from './components/Game'
import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Game/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
