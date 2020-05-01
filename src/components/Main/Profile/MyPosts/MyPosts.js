import React from 'react';
import s from '../../../../css/MyPosts.module.css';
import Post from "./Post/Post";

export default () => {
	let postData = [
		{ id: 1,
			msg: 'Message 1 Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.' +
				' Lorem ipsum dolor sit amet.',
			like: 5,
			dislike: 3 },
		{ id: 2,
			msg: 'Message 2 Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.',
			like: 4,
			dislike: 1 },
		{ id: 3,
			msg: 'Message 3 Lorem ipsum dolor sit amet.Lore',
			like: 8,
			dislike: 2 },
	];
	return (
		<div>
			<span>Ввести комментарий</span>
			<div>
				<textarea name="#" id="" cols="60" rows="5">111</textarea>
			</div>
			<button className={s.postBtn}>Add post</button>
			<div className={s.posts}>
				<Post id={postData[0].id} msg={postData[0].msg} like={postData[0].like} dislike={postData[0].dislike}/>
				<Post id={postData[1].id} msg={postData[1].msg} like={postData[1].like} dislike={postData[1].dislike}/>
			</div>
		</div>
	);
};

