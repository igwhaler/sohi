import AllStoresHome from './views/home';
import StoresAll from './views/all';
import AllStoresList from './views/list';
import AllStoresInfo from './views/info';

export const mapRoutes = [
    {
        path: '/allStores/home',
        value: '首页',
        component: AllStoresHome,
        isMenu: true,
        exact: true,
    },
    {
        path: '/allStores/all',
        value: '全部',
        component: StoresAll,
        isMenu: true,
        exact: true,
    },
    {
        path: '/allStores/list/:id',
        value: '列表',
        component: AllStoresList,
        isMenu: false,
        exact: false,
    },
    {
        path: '/allStores/info',
        value: '个人信息',
        component: AllStoresInfo,
        isMenu: true,
    },
];
