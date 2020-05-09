//actions
const ADD_NEW_COMMENT_TEXT = 'ADD_NEW_COMMENT_TEXT';
const ADD_NEW_COMMENT = 'ADD_NEW_COMMENT';

//начальные значения для инициализации state redux
let initialState = {
	dialogData: [
		{id: 1, name: 'User'},
		{id: 2, name: 'User'},
		{id: 3, name: 'User'},
		{id: 4, name: 'User'},
	],
	messageData: [
		{id: 1, message: 'text Lorem ipsum dolor. Lorem ipsum dolor. Lorem ipsum dolor.'},
		{id: 2, message: 'text Lorem ipsum dolor. Lorem ipsum dolor. Lorem ipsum dolor.'},
		{id: 3, message: 'text Lorem ipsum dolor. Lorem ipsum dolor. Lorem ipsum dolor.'},
		{id: 4, message: 'text Lorem ipsum dolor. Lorem ipsum dolor. Lorem ipsum dolor.'},
	],
	newCommentTxt: '',
};

export default (state = initialState, action) => {
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
