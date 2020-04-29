import React, {Component} from 'react';
import s from '../../css/Navbar.module.css';
import logoNav from "../../Images/logo.svg"

export default () => {
	return (
				<nav className={s.leftNav}>
					<ul className={s.nav_ul}>
						<li>
							<a href="#" className={s.nav_link}>
								<img src={logoNav} className={s.logo_nav} alt=""/>
								<span className={s.nav_txt}>
										Profile
									</span>
							</a>
						</li>
						<li>
							<a href="#" className={s.nav_link}>
								<img src={logoNav} className={s.logo_nav} alt=""/>
								<span className={s.nav_txt}>
										Messages
									</span>
							</a>
						</li>
						<li>
							<a href="#" className={s.nav_link}>
								<img src={logoNav} className={s.logo_nav} alt=""/>
								<span className={s.nav_txt}>
										News
									</span>
							</a>
						</li>
						<li>
							<a href="#" className={s.nav_link}>
								<img src={logoNav} className={s.logo_nav} alt=""/>
								<span className={s.nav_txt}>
										Music
									</span>
							</a>
						</li>
						<li>
							<a href="#" className={s.nav_link}>
								<img src={logoNav} className={s.logo_nav} alt=""/>
								<span className={s.nav_txt}>
										Games
									</span>
							</a>
						</li>
						<li>
							<a href="#" className={s.nav_link}>
								<img src={logoNav} className={s.logo_nav} alt=""/>
								<span className={s.nav_txt}>
										Settings
									</span>
							</a>
						</li>
					</ul>
				</nav>
	);
};

