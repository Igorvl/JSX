import React from 'react';
import s from '../../../css/Dialogs.module.css';
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import logo from "../../../Images/logo.svg";
import Icon28Send from '@vkontakte/icons/dist/28/send';

export default (props) => {
	let dialogs = props.dialogData.map(d => <DialogItem name={`${d.name} ${d.id}`} id={d.id}/>);
	let messages = props.messageData.map(m =>
		<Message
			msgId={`${m.id} ${m.message}`}
			addNewCommentTxt={props.addNewCommentTxt}
			addNewComment={props.addNewComment}
			newCommentTxt={props.newCommentTxt}
			key={m.id}
		/>);
	
	return (
		<div className={s.mainDialogs}>
			<div>
				{dialogs}
			</div>
			<div>
				{messages}
				<div>
					<span>Комментировать</span>
					<div className={s.commentBlock}>
						<img src={logo} className={s.logo} alt=""/>
						<textarea className={s.messageTxt}
						          onChange={(p)=>{
							          props.dispatch({
								          type:'ADD_NEW_COMMENT_TEXT',
								          messageTxt: p.target.value
							          })}}
						          value={props.newCommentTxt}/>
						<Icon28Send onClick={()=>{props.dispatch({type: 'ADD_NEW_COMMENT'})}} className={s.messageBtn} fill={'#264a64'}/>
					</div>
				</div>
			</div>
		</div>
	);
};

