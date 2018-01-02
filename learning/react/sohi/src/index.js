import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// 时间选择器汉化
import 'moment/locale/zh-cn';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
