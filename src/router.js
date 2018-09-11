const routers = [
    {
        path: '/',
        meta: {
            title: ''
        },
        component: (resolve) => require(['./views/index.vue'], resolve)
    },
    {
        path: '/test',
        meta: {
            title: ''
        },
        component: (resolve) => require(['./views/test.vue'], resolve)
    }
];
export default routers;