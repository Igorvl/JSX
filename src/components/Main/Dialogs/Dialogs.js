import React from 'react';
import s from '../../../css/Dialogs.module.css';
import {NavLink} from "react-router-dom";

export default () => {
	return (
		<div className={s.mainDialogs}>
			<div >
				<div className={s.userItem}><NavLink to={'/dialogs/1'}>User1</NavLink></div>
				<div className={s.userItem}><NavLink to={'/dialogs/2'}>User2</NavLink></div>
				<div className={s.userItem}><NavLink to={'/dialogs/3'}>User3</NavLink></div>
				<div className={s.userItem}><NavLink to={'/dialogs/4'}>User4</NavLink></div>

			</div>
			<div>
				<div>Messages 1</div>
				<div>Messages 2</div>
				<div>Messages 3</div>
				<div>Messages 4</div>
			</div>
		</div>
	);
};

