import React, {Component} from 'react';
import s from '../../../../css/MyPosts.module.css';
import Post from "./Post/Post";

export default () => {
	return (
		<div className={s.mainBlock}>
			<span>Ввести комментарий</span>
			<div>
				<textarea name="#" id="" cols="60" rows="5">111</textarea>
			</div>
			<div>
				<button>Like</button>
				<button>Dislike</button>
			</div>
			<div className={s.posts}>
				<Post/>
				<Post/>
				<Post/>
				<Post/>
			</div>


		</div>
	);
};

