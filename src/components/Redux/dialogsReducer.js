//actions
const ADD_NEW_COMMENT_TEXT = 'ADD_NEW_COMMENT_TEXT';
const ADD_NEW_COMMENT = 'ADD_NEW_COMMENT';

export default (state, action) => {
	switch (action.type) {
		// adding text in textarea in dialogsPage
		case 'ADD_NEW_COMMENT_TEXT':
			state.newCommentTxt = action.messageTxt;
			return state;
		
		// add new comment in dialogsPage-dialogData
		case 'ADD_NEW_COMMENT':
			state.messageData.push({
				id: 5,
				message: state.newCommentTxt,
			});
			state.newCommentTxt = "";
			return state;
		
		default:
			return state;
	}
}

// action creators
//for Dialogs NewCommentText andNewComment
export const addNewCommentTextAC = messageTxt => ({type: ADD_NEW_COMMENT_TEXT, messageTxt: messageTxt});
export const addNewCommentAC = () => ({type: ADD_NEW_COMMENT});
