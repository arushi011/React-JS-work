import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ProfileList from './profiles.js'
import profiles from './App.js';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<ProfileList profiles={profiles} />, document.getElementById('root'));
registerServiceWorker();
/*ReactDOM.render(<ProfileList profiles={profiles} />, document.getElementById("app"));*/
