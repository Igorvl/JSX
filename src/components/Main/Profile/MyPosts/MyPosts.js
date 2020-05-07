import React from 'react';
import s from '../../../../css/MyPosts.module.css';
import Post from "./Post/Post";

export default (props) => {
	
	let posts = props.postData.map(p => <Post id={p.id} msg={p.msg} like={p.like} dislike={p.dislike} key={p.id}/>);
	
	// let inputNewMsgTxt = (p)=>{	};
	
	return (
		<div>
			<span>Ввести комментарий</span>
			<div>
				<textarea value={props.newMsgTxt} onChange={(p)=> props.dispatch({
					type: 'ADD_NEW_POST_TEXT',
					messageTxt: p.target.value,
				})} name="#" id="" cols="60" rows="5"/>
			</div>
			<button onClick={()=>props.dispatch({type: 'ADD_POST',})} className={s.postBtn}>Add post</button>
			
			<div className={s.posts}>
				{posts}
			</div>
		</div>
	);
};

