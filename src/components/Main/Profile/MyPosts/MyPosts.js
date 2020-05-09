import React from 'react';
import s from '../../../../css/MyPosts.module.css';
import Post from "./Post/Post";
import {addNewPostTextAC, addPostAC} from "../../../Redux/profileReducer";

export default (props) => {
	
	let posts = props.postData.map(p => <Post id={p.id} msg={p.msg} like={p.like} dislike={p.dislike} key={p.id}/>);
	
	return (
		<div>
			<span>Ввести комментарий</span>
			<div>
				<textarea value={props.newMsgTxt} onChange={(p)=> props.dispatch(addNewPostTextAC(p.target.value))} name="#" id="" cols="60" rows="5"/>
			</div>
			<button onClick={()=>props.dispatch(addPostAC())} className={s.postBtn}>Add post</button>
			
			<div className={s.posts}>
				{posts}
			</div>
		</div>
	);
};

