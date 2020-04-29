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
			<button className={s.postBtn}>Add post</button>
			<div className={s.posts}>
				<Post msg='Message 1 Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.' like='5' dislike='3'/>
				<Post msg='Message 2 Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.' like='3' dislike='2'/>
				<Post msg='Message 3 Lorem ipsum dolor sit amet.Lore' like='2' dislike='5'/>
			</div>
		</div>
	);
};

