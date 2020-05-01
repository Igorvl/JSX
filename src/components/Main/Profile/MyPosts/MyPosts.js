import React from 'react';
import s from '../../../../css/MyPosts.module.css';
import Post from "./Post/Post";

export default () => {
	
	let postData = [
		{
			id: 1,
			msg: 'Message 1 Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.' +
				' Lorem ipsum dolor sit amet.',
			like: 5,
			dislike: 3
		},
		{
			id: 2,
			msg: 'Message 2 Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.',
			like: 4,
			dislike: 1
		},
	];
	
	let posts = postData.map(p => <Post id={p.id} msg={p.msg} like={p.like} dislike={p.dislike}/>);
	
	return (
		<div>
			<span>Ввести комментарий</span>
			<div>
				<textarea name="#" id="" cols="60" rows="5">111</textarea>
			</div>
			<button className={s.postBtn}>Add post</button>
			<div className={s.posts}>
				{posts}
			</div>
		</div>
	);
};

