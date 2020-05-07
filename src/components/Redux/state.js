//actions
const ADD_NEW_COMMENT_TEXT = 'ADD_NEW_COMMENT_TEXT';
const ADD_NEW_COMMENT = 'ADD_NEW_COMMENT';
const ADD_NEW_POST_TEXT = 'ADD_NEW_POST_TEXT';
const ADD_POST = 'ADD_POST';

let store = {
	
	// empty variable function for subscriber
	_rerenderEntireTree() {
	},
	
	_state: {
		profilePage: {
			newMsgTxt: '',
			postData: [
				{
					id: 1,
					msg: 'Message 1 Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.' +
						' Lorem ipsum dolor sit amet.',
					like: 5,
					dislike: 3,
					key: 1,
				},
				{
					id: 2,
					msg: 'Message 2 Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.',
					like: 4,
					dislike: 1,
					key: 2,
				},
			],
		},
		dialogsPage: {
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
		},
	},
	
	//state getter
	getState() {
		return this._state;
	},
	
	// subscribe for rerenderEntireTree form index.js
	subscribe(observer) {
		this._rerenderEntireTree = observer;
	},
	
	
	dispatch(action) {
		switch (action.type) {
			// add new post in profilePage-postData
			case 'ADD_POST':
				this._state.profilePage.postData.push({
					id: 3,
					msg: this._state.profilePage.newMsgTxt,
					like: 777,
					dislike: 666,
					key: 3,
				},);
				this._state.profilePage.newMsgTxt = "";
				this._rerenderEntireTree();
				break;
			
			// add text in textarea in profilePage
			case 'ADD_NEW_POST_TEXT':
				this._state.profilePage.newMsgTxt = action.messageTxt;
				this._rerenderEntireTree();
				break;
			
			// adding text in textarea in dialogsPage
			case 'ADD_NEW_COMMENT_TEXT':
				this._state.dialogsPage.newCommentTxt = action.messageTxt;
				this._rerenderEntireTree();
				break;
			
			// add new comment in dialogsPage-dialogData
				case 'ADD_NEW_COMMENT':
				this._state.dialogsPage.messageData.push({
					id: 5,
					message: this._state.dialogsPage.newCommentTxt,
				});
				this._state.dialogsPage.newCommentTxt = "";
				this._rerenderEntireTree();
				break;
				
			default:
				console.log('action undef')
		}
	},
};

// action creators
//for Dialogs NewCommentText andNewComment
export const addNewCommentTextAC = messageTxt => ({type:ADD_NEW_COMMENT_TEXT, messageTxt: messageTxt});
export const addNewCommentAC = () => ({type: ADD_NEW_COMMENT});
//for MyPosts NewPostText addPost
export const addNewPostTextAC = (messageTxt) => ({type: ADD_NEW_POST_TEXT,	messageTxt: messageTxt});
export const addPostAC = () => ({type: ADD_POST});

export default store;
window.store = store;