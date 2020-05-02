import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import state from './components/Redux/state';

let dialogData = [
	{id: 1, name: 'User'},
	{id: 2, name: 'User'},
	{id: 3, name: 'User'},
	{id: 4, name: 'User'},
];

let messageData = [
	{id: 1, message: 'text'},
	{id: 2, message: 'text'},
	{id: 3, message: 'text'},
	{id: 4, message: 'text'},
];

ReactDOM.render(<App
	postData={state.profilePage.postData}
	dialogsPage={state.dialogsPage}/>,
	document.getElementById('root'));

serviceWorker.register();
