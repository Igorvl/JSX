import React from 'react';

import MyPosts from "./MyPosts";
import {addNewPostTextAC, addPostAC} from "../../../Redux/profileReducer";

export default (props) => {
	
	// callback for MyPost's textarea
	let addNewPostTextCB = postText => {
		props.store.dispatch(addNewPostTextAC(postText))
	};
	
	// callback for MyPost's button
	let addPostCB = () => {
		props.store.dispatch(addPostAC())
	};
	
	return <MyPosts
		postData={props.store.getState().profilePage.postData}
		addNewPostText={addNewPostTextCB}
		addPost={addPostCB}
	/>;
};

