import React from 'react';
import s from '../../../css/Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

export default () => {
	return (
		<div className={s.mainProfile}>
			<div >
				Avatar
				Status
				<MyPosts/>
			</div>
		</div>
	);
};

