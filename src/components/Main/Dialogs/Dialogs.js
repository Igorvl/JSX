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
	return (
		<div className={s.mainDialogs}>
			<div >
				<DialogItem name={'User1'} id={'1'}/>
				<DialogItem name={'User2'} id={'2'}/>
				<DialogItem name={'User3'} id={'3'}/>
				<DialogItem name={'User4'} id={'4'}/>

			</div>
			<div>
				<Message msgId={'1'}/>
				<Message msgId={'2'}/>
				<Message msgId={'3'}/>
				<Message msgId={'4'}/>
			</div>
		</div>
	);
};

