import React from 'react';
import s from '../../../../css/MyPosts.module.css';
import Post from "./Post/Post";

export default (props) => {
	
	let posts = props.postData.map(p => <Post id={p.id} msg={p.msg} like={p.like} dislike={p.dislike} key={p.id}/>);
	let newPostText =  '';
	
	debugger
	
	return (
		<div>
			<span>Ввести комментарий</span>
			<div>
				<textarea onChange={(p)=> props.addPost(p.target.value)} name="#" id="" cols="60" rows="5"/>
			</div>
			<button onClick={props.addPost(newPostText)} className={s.postBtn}>Add post</button>
			<div className={s.posts}>
				{posts}
			</div>
		</div>
	);
};

