import React from 'react';
import s from '../../../css/Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

export default (props) => {

	return (
		<div className={s.mainProfile}>
			<div>
				<ProfileInfo/>
				<MyPostsContainer
					// postData={props.profilePage.postData}
					// newMsgTxt={props.profilePage.newMsgTxt}
					// store={props.store}
				/>
			</div>
		</div>
	)
};

