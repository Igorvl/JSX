import React from 'react';
import s from '../../../css/Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

export default () => {
	return (
		<div className={s.mainProfile}>
			<div>
				<ProfileInfo/>
				<MyPosts/>
			</div>
		</div>
	)
};

