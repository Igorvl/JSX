import React from 'react';
import {addNewCommentAC, addNewCommentTextAC} from "../../Redux/dialogsReducer";
import Dialogs from "./Dialogs";
import logo from "../../../Images/logo.svg";
import Icon28Send from '@vkontakte/icons/dist/28/send';

export default (props) => {
	// callback for Dialog's textarea
	let addNewCommentTextCB = text=>{
		props.dispatch(addNewCommentTextAC(text))
	};
	// callback for Dialog's button
	let addNewCommentCB = ()=>{
		props.dispatch(addNewCommentAC())
	};
	
	return (
		<Dialogs
			dialogData={props.dialogData}
			messageData={props.messageData}
			addNewCommentText={addNewCommentTextCB}
			addNewComment={addNewCommentCB}
			logo={logo}
		/>
	);
};

