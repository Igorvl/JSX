import React from 'react';
import s from '../../../../css/MyPosts.module.css';
import Post from "./Post/Post";

export default (props) => {
	
	let posts = props.postData.map(p => <Post id={p.id} msg={p.msg} like={p.like} dislike={p.dislike}/>);
	
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

