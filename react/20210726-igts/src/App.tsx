import { lazy, Suspense } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
const UtilsDemo = lazy(() => import(/* webpackChunkName: 'utilsDemo' */ './pages/utilsDemo'));
const User = lazy(() => import(/* webpackChunkName: 'user' */ './pages/user'));
const SelfList = lazy(() => import(/* webpackChunkName: 'selfList' */ './pages/selfList'));
const TestUI = lazy(() => import(/* webpackChunkName: 'testUI' */ './pages/ui'));
const Effect = lazy(() => import(/* webpackChunkName: 'effect' */ './pages/effect'));

function App() {
    return (
        <Suspense fallback={null}>
            <Router>
                <Switch>
                    <Route path="/utils">
                        <UtilsDemo />
                    </Route>

                    <Route path="/user">
                        <User />
                    </Route>

                    <Route path="/list">
                        <SelfList />
                    </Route>

                    <Route path="/ui">
                        <TestUI />
                    </Route>

                    <Route path="/effect">
                        <Effect />
                    </Route>
                </Switch>
            </Router>
        </Suspense>
    );
}

export default App;
