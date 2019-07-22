import React, {useState} from 'react';
import ClassNames from 'classnames';
import css from './App.module.less';

import FuncOne from './components/FuncOne';
import FuncTwo from './components/FuncTwo';

function App() {
    let [name, changeName] = useState('哈哈');

    return (
        <div className={ClassNames(css['app'])}>
            <div>
                <div className={css['tabs']}>
                    <span onClick={() => {changeName('哈哈')}}>哈哈</span>
                    <span> | </span>
                    <span onClick={() => {changeName('呵呵')}}>呵呵</span>
                </div>
                <hr />
                {
                    name === '哈哈'
                    ? <FuncOne name={`FuncOne ${name}`} />
                    : <FuncTwo name={`FuncTwo ${name}`} />
                }
            </div>
        </div>
    );
}

export default App;
