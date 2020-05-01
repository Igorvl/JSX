import React from 'react';
import s from '../../../css/Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
	return (
		<div className={s.userItem}><NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink></div>
	)
};

const Message = (props) => {
	return (
		<div>Messages {props.msgId}</div>
	)
};

export default () => {
	
	let dialogData = [
		{id: 1, name: 'User1'},
		{id: 2, name: 'User2'},
		{id: 3, name: 'User3'},
		{id: 4, name: 'User4'},
	];
	
	let messageData = [
		{id: 1, message: '1'},
		{id: 2, message: '2'},
		{id: 3, message: '3'},
		{id: 4, message: '4'},
	];
	
	return (
		<div className={s.mainDialogs}>
			<div>
				<DialogItem name={dialogData[0].name} id={dialogData[0].id}/>
				<DialogItem name={dialogData[1].name} id={dialogData[1].id}/>
				<DialogItem name={dialogData[2].name} id={dialogData[2].id}/>
				<DialogItem name={dialogData[3].name} id={dialogData[3].id}/>
			</div>
			<div>
				<Message msgId={messageData[0].message}/>
				<Message msgId={messageData[1].message}/>
				<Message msgId={messageData[2].message}/>
				<Message msgId={messageData[3].message}/>
				
			</div>
		</div>
	);
};

