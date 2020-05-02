import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

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


let postData = [
	{
		id: 1,
		msg: 'Message 1 Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.' +
			' Lorem ipsum dolor sit amet.',
		like: 5,
		dislike: 3
	},
	{
		id: 2,
		msg: 'Message 2 Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.',
		like: 4,
		dislike: 1
	},
];




ReactDOM.render(<App postData={postData} messageData={messageData} dialogData={dialogData}/>, document.getElementById('root'));

serviceWorker.register();
