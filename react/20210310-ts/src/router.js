import HelloWord from './hooks/helloWorld';
import EffectHook from './hooks/effectHook';
import FriendHook from './hooks/selfHook';
import Container, { ContextHook } from './hooks/contextHook';
import ReducerHook from './hooks/reducerHook';
import CallbackHook from './hooks/callbackHook';

const routes = [
    {
        path: '/hellworld',
        component: HelloWord,
    },
    {
        path: '/effect',
        component: EffectHook
    },
    {
        path: '/self',
        component: FriendHook
    },
    {
        path: '/context1',
        component: Container
    },
    {
        path: '/context2',
        component: ContextHook
    },
    {
        path: '/reducer',
        component: ReducerHook
    },
    {
        path: '/callback',
        component: CallbackHook
    }
];

export default routes;
