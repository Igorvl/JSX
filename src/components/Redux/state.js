import {rerenderEntireTree} from "../../index";

// let newMsgTxt = '';

let state = {
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
		
		addPost: () => {
			state.profilePage.postData.push({
				id: 3,
				msg: state.profilePage.newMsgTxt,
				like: 777,
				dislike: 666,
				key: 3,
			},);
			state.profilePage.newMsgTxt = "";
			rerenderEntireTree();
		},
		
		addNewPostText: (msg) => {
			state.profilePage.newMsgTxt = msg;
			rerenderEntireTree();
		},
		
	},
	dialogsPage: {
		dialogData: [
			{id: 1, name: 'User'},
			{id: 2, name: 'User'},
			{id: 3, name: 'User'},
			{id: 4, name: 'User'},
		],
		messageData: [
			{id: 1, message: 'text'},
			{id: 2, message: 'text'},
			{id: 3, message: 'text'},
			{id: 4, message: 'text'},
		],
		
	},
};

export default state;