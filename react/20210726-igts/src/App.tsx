import { lazy, ExoticComponent, Suspense } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';

const routes = [
    {
        path: "/utils",
        component: lazy(() => import(/* webpackChunkName: 'utilsDemo' */ './pages/utilsDemo'))
    },
    {
        path: "/user",
        component: lazy(() => import(/* webpackChunkName: 'user' */ './pages/user'))
    },
    {
        path: "/list",
        component: lazy(() => import(/* webpackChunkName: 'selfList' */ './pages/selfList'))
    },
    {
        path: "/ui",
        component: lazy(() => import(/* webpackChunkName: 'testUI' */ './pages/ui'))
    },
    {
        path: "/effect",
        component: lazy(() => import(/* webpackChunkName: 'effect' */ './pages/effect'))
    },
    {
        path: "/uri",
        component: lazy(() => import(/* webpackChunkName: 'uri' */ './pages/uri'))
    },
    {
        path: "/input",
        component: lazy(() => import(/* webpackChunkName: 'input' */ './pages/input'))
    },
    {
        path: "/material",
        component: lazy(() => import(/* webpackChunkName: 'material' */ './pages/material'))
    },
    {
        path: "/scroll",
        component: lazy(() => import(/* webpackChunkName: 'scroll' */ './pages/scroll/index.jsx'))
    },
];

interface routItemTypes {
    path: string,
    component: ExoticComponent
}

function App() {
    return (
        <Suspense fallback={null}>
            <Router>
                <Switch>
                    {
                        routes.map(({
                            path,
                            component: SelfComponent
                        }: routItemTypes) => {
                            return (
                                <Route key={path} path={path}>
                                    <SelfComponent />
                                </Route>
                            );
                        })
                    }
                </Switch>
            </Router>
        </Suspense>
    );
}

export default App;
