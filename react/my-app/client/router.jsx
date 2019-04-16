import React, { lazy } from 'react';
import {
    Route,
    Switch,
    BrowserRouter as Router
} from 'react-router-dom';
import LazyComponent from './components/LazyComponent';

const Home = lazy(() => import(/* webpackChunkName: 'home' */ './pages/home'));
const My = lazy(() => import(/* webpackChunkName: 'my' */ './pages/my'));

const router = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" render={() => <LazyComponent component={Home} />} />
                <Route path="/my" render={() => <LazyComponent component={My} />} />
                <Route path="/my123" render={() => <LazyComponent component={My} />} />
            </Switch>
        </Router>
    );
};

export default router;
