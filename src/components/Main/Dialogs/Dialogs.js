import React from 'react';
import s from '../../../css/Dialogs.module.css';
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";

export default () => {
	
	let dialogData = [
		{id: 1, name: 'User'},
		{id: 2, name: 'User'},
		{id: 3, name: 'User'},
		{id: 4, name: 'User'},
	];
	
	let dialogs = dialogData.map(d => <DialogItem name={`${d.name} ${d.id}`} id={d.id}/>);
	
	let messageData = [
		{id: 1, message: 'text'},
		{id: 2, message: 'text'},
		{id: 3, message: 'text'},
		{id: 4, message: 'text'},
	];
	
	let messages = messageData.map(m => <Message msgId={`${m.id} ${m.message}`}/>);
	
	return (
		<div className={s.mainDialogs}>
			<div>
				{dialogs}
			</div>
			<div>
				{messages}
			</div>
		</div>
	);
};

