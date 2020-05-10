import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './components/Redux/redux-store';
import {BrowserRouter} from "react-router-dom";

export let rerenderEntireTree = () => {
	ReactDOM.render(
		<BrowserRouter>
			<App
				profilePage={store.getState().profilePage}
				dialogsPage={store.getState().dialogsPage}
				dispatch={store.dispatch.bind(store)}
				store={store}
			/>
		</BrowserRouter>,
		document.getElementById('root'));
};

rerenderEntireTree();

store.subscribe(rerenderEntireTree);

serviceWorker.register();
