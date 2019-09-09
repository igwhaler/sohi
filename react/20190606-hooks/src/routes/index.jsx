import React from 'react';
import {
    Switch,
    Route
} from 'react-router-dom';
import {routes} from './config.js';

export const RouterContent = (props) => {
    return (
        <Switch>
            {
                routes.map(item => {
                    return (
                        <Route
                            path={item.path}
                            component={item.component}
                            exact={item.exact || true}
                            key={item.path}
                        />
                    );
                })
            }
        </Switch>
    );
};
