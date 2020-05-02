import React from 'react';
import s from './css/App.module.css';
import {BrowserRouter, Route} from "react-router-dom";
import Header from "./components/Header/Header";
import Navbar from "./components/Main/Navbar";
import MainAside from "./components/Main/MainAside";
import Profile from "./components/Main/Profile/Profile";
import Dialogs from "./components/Main/Dialogs/Dialogs";
import Music from "./components/Main/Music/Music";
import Games from "./components/Main/Games/Games";
import News from "./components/Main/News/News";
import Settings from "./components/Main/Settings/Settings";

export default () => {
	return (
		<BrowserRouter>
			<div className={s.app}>
				<Header/>
				<main className={s.body}>
					<Navbar/>
					<div className={s.mainField}>
						<Route component={Profile} path={'/profile'}/>
						<Route component={Dialogs} path={'/dialogs'}/>
						<Route component={Music} path={'/music'}/>
						<Route component={Games} path={'/games'}/>
						<Route component={News} path={'/news'}/>
						<Route component={Settings} path={'/settings'}/>
					</div>
					<MainAside/>
				</main>
			</div>
		</BrowserRouter>
	);
};

