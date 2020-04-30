import React, {Component} from 'react';
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
						<Route component={Profile} path={'/Profile'}/>
						<Route component={Dialogs} path={'/Messages'}/>
						<Route component={Music} path={'/Music'}/>
						<Route component={Games} path={'/Games'}/>
						<Route component={News} path={'/News'}/>
						<Route component={Settings} path={'/Settings'}/>
					</div>
					<MainAside/>
				</main>
			</div>
		</BrowserRouter>
	);
};

