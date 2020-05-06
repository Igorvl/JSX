let store = {
	
	// empty variable function for subscriber
	rerenderEntireTree() {
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
	
	// add new post in profilePage-postData
	addPost() {
		this._state.profilePage.postData.push({
			id: 3,
			msg: this._state.profilePage.newMsgTxt,
			like: 777,
			dislike: 666,
			key: 3,
		},);
		this._state.profilePage.newMsgTxt = "";
		this.rerenderEntireTree();
	},
	
	// adding text in textarea in profilePage
	addNewPostText(msg) {
		this._state.profilePage.newMsgTxt = msg;
		this.rerenderEntireTree();
	},
	
	// subscribing for rerender in index.js
	subscribe(observer) {
		this.rerenderEntireTree = observer;
	},
	
	// adding text in textarea in dialogsPage
	addNewCommentTxt(msg) {
		this._state.dialogsPage.newCommentTxt = msg;
		this.rerenderEntireTree();
	},
	
	// add new comment in dialogsPage-dialogData
	addNewComment() {
		this._state.dialogsPage.messageData.push({
			id: 5,
			message: this._state.dialogsPage.newCommentTxt,
		});
		this._state.dialogsPage.newCommentTxt = "";
		this.rerenderEntireTree();
	},
};

export default store;
window.store = store;