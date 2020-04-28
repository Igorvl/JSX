import React, {Component} from 'react';
import s from './App.module.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Main/Navbar";
import MainAside from "./components/Main/MainAside";
import Profile from "./components/Main/Profile/Profile";

export default () => {
	return (
		<div className={s.app}>
			<Header/>
			<main className={s.main}>
				<Navbar/>
				<Profile/>
				<MainAside/>
			</main>
		</div>
	);
};

