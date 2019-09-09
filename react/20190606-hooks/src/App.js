import React, { Component } from 'react';
import {
    BrowserRouter as Router,
} from 'react-router-dom';
import AsideMenu from './components/AsideMenu/index.jsx';
import { RouterContent } from './routes';
import styles from './App.module.scss';

class App extends Component {
    render() {
        return (
            <Router>
                <div className={styles['App']}>
                    <div className={styles['App-aside-menu']}>
                        <AsideMenu />
                    </div>

                    <div className={styles['App-content']}>
                        <RouterContent />
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;
