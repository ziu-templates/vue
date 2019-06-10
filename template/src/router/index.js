import Router from './Router';
import index from '../components/views/index';

let router = new Router({
    // mode: 'history',
    // base: '/xxx/xxx/',
    routes: [
        {
            path: '/index',
            name: 'index',
            component: index
        },
        {
            path: '*',
            redirect: {
                name: 'index'
            }
        }

    ]
});

router.beforeEach(function (to, from, next) {
    next();
});

export default router;
