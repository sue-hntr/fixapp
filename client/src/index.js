import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter } from 'react-router-dom' //don't need to specify localhost url in axios http address


// import './index.css';
// import * as serviceWorker from './serviceWorker';

import App from './components/App';

ReactDOM.render(
	<BrowserRouter>
		<App />
    </BrowserRouter>,
    document.getElementById('root'));

// serviceWorker.unregister();