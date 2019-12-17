import MyNewHooks from '../views/MyNewHooks';
import SelfEffect from '../views/SelfEffect';
import SelfStorage from '../views/SelfStorage';
import ArrowFunc from '../views/ArrowFunc';
import ErrorModal from '../views/ErrorModal';

export const routes = [
    {
        path: '/',
        title: '首页',
        component: MyNewHooks
    },
    {
        path: '/selfEffect',
        title: 'SelfEffect',
        component: SelfEffect
    },
    {
        path: '/selfStorage',
        title: 'SelfStorage',
        component: SelfStorage
    },
    {
        path: '/arrowFunc',
        title: 'ArrowFunc',
        component: ArrowFunc
    },
    {
        path: '/errorModal',
        title: 'ErrorModal',
        component: ErrorModal
    }
];
