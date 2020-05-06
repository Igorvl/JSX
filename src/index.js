import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './components/Redux/state';
import {BrowserRouter} from "react-router-dom";

export let rerenderEntireTree = () => {
	ReactDOM.render(
		<BrowserRouter>
			<App
				profilePage={store.getState().profilePage}
				dialogsPage={store.getState().dialogsPage}
				store={store}
			/>
		</BrowserRouter>,
		document.getElementById('root'));
};

rerenderEntireTree();

store.subscribe(rerenderEntireTree);

serviceWorker.register();
