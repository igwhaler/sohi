import {
    Switch,
    Route,
    Link
} from 'react-router-dom';
import {
    QueryClient,
    QueryClientProvider
} from 'react-query';
import {ReactQueryDevtools} from 'react-query/devtools';
import './index.scss';
import {mapRoutes} from './const';
/* import {ChangeEvent, ReactEventHandler} from 'react';

interface PostgresFormData {
    userName: string,
    passWord: string,
    size: number
};

const handleChange = <T extends keyof PostgresFormData>(item: T): ReactEventHandler<HTMLInputElement>  => {
    return (event: ChangeEvent<HTMLInputElement>) => {
        const obj = {...{}} as PostgresFormData;
        obj[item] = event.currentTarget.value as PostgresFormData[T];
    };
}; */

const queryClient = new QueryClient(/* {
    defaultOptions: {
        queries: {
            refetchOnMount: false
        }
    }
} */);

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
                            mapRoutes.map(({path, component, exact}) => {
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
};

export default AllStores;
