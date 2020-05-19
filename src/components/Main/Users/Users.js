import React from 'react';
import s from '../../../css/Users.module.css';
import ava from '../../../Images/logo.svg';
import Icon24Like from '@vkontakte/icons/dist/24/like';
import Icon24LikeOutline from '@vkontakte/icons/dist/24/like_outline';

export default (props) => {
	// let users = props.usersData.map(u=>u);
	return (
		<div className={s.mainProfile}>
			<div>
				{props.usersData.map(u => {
					return (
						<div className={s.userMain}>
							<img className={s.ava} src={ava} alt=""/>
							<div>{u.name}</div>
							<div>
								{u.follow
									? <Icon24Like className={s.buttonFollow} onClick={() => props.unfollowCB(u.id)}/>
									: <Icon24LikeOutline className={s.buttonFollow} onClick={() => props.followCB(u.id)}/>
								}
							</div>
						</div>
					)
				})}
			</div>
		</div>
	);
};

