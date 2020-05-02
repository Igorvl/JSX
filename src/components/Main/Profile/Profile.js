import React from 'react';
import s from '../../../css/Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

export default (props) => {

	return (
		<div className={s.mainProfile}>
			<div>
				<ProfileInfo/>
				<MyPosts postData={props.postData}/>
			</div>
		</div>
	)
};

