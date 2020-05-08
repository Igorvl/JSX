//actions
const ADD_NEW_POST_TEXT = 'ADD_NEW_POST_TEXT';
const ADD_POST = 'ADD_POST';

export default (state, action) => {
	switch (action.type) {
		// add new post in profilePage-postData
		case 'ADD_POST':
			state.postData.push({
				id: 3,
				msg: state.newMsgTxt,
				like: 777,
				dislike: 666,
				key: 3,
			},);
			state.newMsgTxt = "";
			return state;
		
		// add text in textarea in profilePage
		case 'ADD_NEW_POST_TEXT':
			state.newMsgTxt = action.messageTxt;
			return state;
		
		default:
			return state;
	}
}

// action creators
//for MyPosts NewPostText addPost
export const addNewPostTextAC = messageTxt => ({type: ADD_NEW_POST_TEXT, messageTxt: messageTxt});
export const addPostAC = () => ({type: ADD_POST});