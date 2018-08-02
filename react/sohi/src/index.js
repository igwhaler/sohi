import React from 'react';
import ReactDOM from 'react-dom';
import './common/interceptor'
import './assets/styles/common.less'
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
