import React from 'react';
import s from '../../../css/Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import store from "../../Redux/state";

export default (props) => {

	return (
		<div className={s.mainProfile}>
			<div>
				<ProfileInfo/>
				<MyPosts
					postData={props.profilePage.postData}
					addNewPostText = {props.addNewPostText.bind(store)}
					addPost={props.addPost.bind(store)}
					newMsgTxt={props.newMsgTxt}
				/>
			</div>
		</div>
	)
};

