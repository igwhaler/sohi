import {
    Switch,
    Route,
    Link
} from 'react-router-dom';
import {
    QueryClient,
    QueryClientProvider
} from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools'
import './index.scss'
import { mapRoutes } from './const';

const queryClient = new QueryClient();

const AllStores = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <div className="all-stores">
                <div className="menu">
                    {
                        mapRoutes.map(({path, value, isMenu}) => {
                            return (
                                isMenu && <Link
                                    className="link"
                                    key={path}
                                    to={path}
                                >
                                    {value}
                                </Link>
                            );
                        })
                    }
                </div>


                <div className="body">
                    <Switch>
                        {
                            mapRoutes.map(({ path, component, exact }) => {
                                return (
                                    <Route
                                        key={path}
                                        path={path}
                                        component={component}
                                        exact={exact}
                                    />
                                );
                            })
                        }
                    </Switch>
                </div>
            </div>
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    );
}

export default AllStores;
