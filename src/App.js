import React from 'react';
import s from './css/App.module.css';
import {Route} from "react-router-dom";
import Header from "./components/Header/Header";
import Navbar from "./components/Main/Navbar";
import MainAside from "./components/Main/MainAside";
import Profile from "./components/Main/Profile/Profile";
import Dialogs from "./components/Main/Dialogs/Dialogs";
import Music from "./components/Main/Music/Music";
import Games from "./components/Main/Games/Games";
import News from "./components/Main/News/News";
import Settings from "./components/Main/Settings/Settings";

export default (props) => {
	return (
			<div className={s.app}>
				<Header/>
				<main className={s.body}>
					<Navbar/>
					<div className={s.mainField}>
						<Route render={()=> <Profile postData={props.postData}/>} path={'/profile'}/>
						<Route render={()=> <Dialogs
							dialogData={props.dialogsPage.dialogData}
						  messageData={props.dialogsPage.messageData}/>} path={'/dialogs'}/>
						<Route render={()=> <Music/>} path={'/music'}/>
						<Route render={()=> <Games/>} path={'/games'}/>
						<Route render={()=> <News/>} path={'/news'}/>
						<Route render={()=> <Settings/>} path={'/settings'}/>
					</div>
					<MainAside/>
				</main>
			</div>
	);
};

