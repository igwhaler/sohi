import React from 'react';
import {
    Route
} from 'react-router-dom';
import {
    CSSTransition
} from 'react-transition-group';
import { routes } from './config.js';
import './index.scss';

export const RouterContent = (props) => {
    return (
        <div className="animate-route-container">
            {
                routes.map(item => {
                    return (
                        <Route
                            path={item.path}
                            exact={item.exact || true}
                            key={item.path}
                        >
                            {
                                (history) => {
                                    return (
                                        <CSSTransition
                                            classNames="route-page"
                                            in={history.match != null}
                                            timeout={300}
                                            unmountOnExit
                                        >
                                            <div className="route-page">
                                                <item.component {...history} />
                                            </div>
                                        </CSSTransition>
                                    );
                                }
                            }
                        </Route>
                    );
                })
            }
        </div>
    );
};
