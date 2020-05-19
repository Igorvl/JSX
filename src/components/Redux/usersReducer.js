import userLogo from "../../../src/Images/logo.svg";
//actions
// const ADD_NEW_COMMENT_TEXT = 'ADD_NEW_COMMENT_TEXT';
const GET_USERS = 'GET_USERS';
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';


//начальные значения для инициализации state redux
let initialState = {
	usersData: [
		{id: 1, logo: {userLogo}, name: 'User1', location: {country: 'Russia', city: 'Moscow'}, follow: true, key: 1},
		{id: 2, logo: {userLogo}, name: 'User2', location: {country: 'Russia', city: 'Moscow'}, follow: true, key: 2},
		{id: 3, logo: {userLogo}, name: 'User3', location: {country: 'Russia', city: 'Moscow'}, follow: true, key: 3},
		{id: 4, logo: {userLogo}, name: 'User4', location: {country: 'Russia', city: 'Moscow'}, follow: false, key: 4},
	],
};

export default (state = initialState, action) => {
	//поверхностное копирование state, принцип иммутабельности
	switch (action.type) {
		// adding text in textarea in dialogsPage
		case 'GET_USERS':
			//возвращает копию state, и обновляет newCommentTxt
			return {...state};
		
		// add new comment in dialogsPage-dialogData
		case 'FOLLOW':
			return {
				...state,
				usersData: state.usersData.map(u => {
					if (u.id === action.userId) {
						return {...u, follow: true}
					}
					return { ...u}
				})
			};
		
		case 'UNFOLLOW':
			return {
				...state,
				usersData: state.usersData.map(u => {
					if (u.id === action.userId) {
						return {...u, follow: false}
					}
					return { ...u}
				})
			};
		// case 'ADD_NEW_COMMENT':
		// 	//возвращает копию state, добавляет текст нового сообщения и обновляет newCommentTxt
		// 	return {...state, messageData: [...state.messageData, {id: 5, message: state.newCommentTxt}],	newCommentTxt: ""};
		
		default:
			return state;
	}
}

// action creators
//for Dialogs NewCommentText andNewComment
// export const addNewCommentText = messageTxt => ({type: ADD_NEW_COMMENT_TEXT, messageTxt: messageTxt});
export const getUsersAC = () => ({type: GET_USERS});
export const followAC = (userId) => ({type: FOLLOW, userId: userId});
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId: userId});
