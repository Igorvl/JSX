import React, {Component} from 'react';
import s from '../../../../../css/Post.module.css';
import icon from '../../../../../Images/logo.svg'

export default () => {
	return (
		<div className={s.mainBlock}>
			<img src={icon} alt=""/>
			<p>Post 1</p>
		</div>
	);
};

