import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import state, {subscribe} from './components/Redux/state';
import {BrowserRouter} from "react-router-dom";

export let rerenderEntireTree = () => {
	ReactDOM.render(
		<BrowserRouter>
			<App
				profilePage={state.profilePage}
				dialogsPage={state.dialogsPage}
			/>
		</BrowserRouter>,
		document.getElementById('root'));
};

rerenderEntireTree();

subscribe(rerenderEntireTree);

serviceWorker.register();
