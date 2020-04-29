import React, {Component} from 'react';
import s from './css/App.module.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Main/Navbar";
import MainAside from "./components/Main/MainAside";
import Profile from "./components/Main/Profile/Profile";
import Dialogs from "./components/Main/Dialogs/Dialogs";

export default () => {
	return (
		<div className={s.app}>
			<Header/>
			<main className={s.body}>
				<Navbar/>
				<div className={s.mainField}>
					{/*<Profile/>*/}
					<Dialogs/>
				</div>
				<MainAside/>
			</main>
		</div>
	);
};

