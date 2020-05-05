import React from 'react';
import logo from '../../../../Images/logo.svg'
import Icon28Send from '@vkontakte/icons/dist/28/send';
import s from '../../../../css/Message.module.css';


export default (props) => {
	
	return (
		<div>
			<div className={s.commentTxt}>Message {props.msgId}</div>
			<div>
				<span>Комментировать</span>
				<div className={s.commentBlock}>
					<img src={logo} className={s.logo} alt=""/>
					<textarea className={s.messageTxt} value={props.}/>
					<Icon28Send className={s.messageBtn} fill={'#264a64'}/>
				</div>
			</div>
		</div>
	)
};



