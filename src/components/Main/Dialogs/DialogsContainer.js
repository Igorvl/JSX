// import React from 'react';
import {addNewComment, addNewCommentText} from "../../Redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

// export default (props) => {
// 	// callback for Dialog's textarea
// 	let addNewCommentTextCB = text => {
// 		props.dispatch(addNewCommentTextAC(text))
// 	};
// 	// callback for Dialog's button
// 	let addNewCommentCB = () => {
// 		props.dispatch(addNewCommentAC())
// 	};
//
// 	return (
// 		<Dialogs
// 			dialogData={props.dialogData}
// 			messageData={props.messageData}
// 			addNewCommentText={addNewCommentTextCB}
// 			addNewComment={addNewCommentCB}
// 			logo={logo}
// 		/>
// 	);
// };


const mapStateToProps = (state) => {
	return ({
		// data from (redux-store)-state for Dialogs. Default values defined in redux-store and dialogReducer
		dialogData: state.dialogsPage.dialogData,
		messageData: state.dialogsPage.messageData,
		newCommentTxt: state.dialogsPage.newCommentTxt,
	})
};
const mapDispatchToProps = (dispatch) => {
	return (
		{
			// callbacks for textarea and button from Dialog
			addNewCommentTextCB: txt =>	dispatch(addNewCommentText(txt)),
			addNewCommentCB: () => dispatch(addNewComment()),
		}
	)
};
export default connect(mapStateToProps, mapDispatchToProps)(Dialogs);

