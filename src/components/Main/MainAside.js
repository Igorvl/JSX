import React, {Component} from 'react';
import s from '../../css/MainAside.module.css';

export default () => {
	return (
		<aside className={s.mainAside}>
			<nav className={s.asideNav}>
				<ul className={s.nav_ul}>
					<li><a className={s.nav_link} href="#">Новости</a></li>
					<li><a className={s.nav_link} href="#">Рекомендации</a></li>
					<li><a className={s.nav_link} href="#">Поиск</a></li>
					<li><a className={s.nav_link} href="#">Избранное</a></li>
					<li><a className={s.nav_link} href="#">Новое</a></li>
					<li><a className={s.nav_link} href="#">Замечания</a></li>
					<li><a className={s.nav_link} href="#">Самое интересное</a></li>
				</ul>
			</nav>
		</aside>
	);
};

