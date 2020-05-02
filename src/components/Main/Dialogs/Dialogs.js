import React from 'react';
import s from '../../../css/Dialogs.module.css';
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";

export default (props) => {
	
	let dialogs = props.dialogData.map(d => <DialogItem name={`${d.name} ${d.id}`} id={d.id}/>);
	let messages = props.messageData.map(m => <Message msgId={`${m.id} ${m.message}`}/>);
	
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

