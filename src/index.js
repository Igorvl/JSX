import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import state from './components/Redux/state';
import {BrowserRouter} from "react-router-dom";

ReactDOM.render(
	<BrowserRouter>
		<App
			postData={state.profilePage.postData}
			dialogsPage={state.dialogsPage}
		/>
	</BrowserRouter>,
	document.getElementById('root'));

serviceWorker.register();
