import React from 'react';
import {
    Route,
    Switch,
    BrowserRouter as Router
} from 'react-router-dom';
import routes from './router.js';

function App() {
    return (
        <Router>
            <Switch>
                {
                    routes.map(({path, component}) => {
                        return (
                            <Route
                                key={path}
                                path={path}
                                exact={false}
                                component={component}
                            />
                        );
                    })
                }
            </Switch>
        </Router>
  );
}

export default App;
