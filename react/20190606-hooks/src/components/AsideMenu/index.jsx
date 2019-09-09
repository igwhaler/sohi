import React from 'react';
import { Link } from 'react-router-dom';
import { routes } from '../../routes/config';

const AsideMenu = (props) => {
    return (
        <div>
            {
                routes.map(item => {
                    return (
                        <p key={item.path}>
                            <Link to={item.path}>{item.title}</Link>
                        </p>
                    );
                })
            }
        </div>
    );
};

export default AsideMenu;
