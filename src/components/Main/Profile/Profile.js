import React, {Component} from 'react';
import s from './Profile.module.css';

export default () => {
	return (
		<div className={s.mainBlock}>
			<div className={s.profile}>
				<p>Post 1</p>
				<p>Post 2</p>
				<p>Post 3</p>
			</div>
		</div>
	);
};

