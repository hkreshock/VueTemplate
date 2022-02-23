const makeRoutes = (store) => {
    // This is where you define your apps routes --- our setup is to define a parent which is the layout wrapper,
    // then its children inherit that wrapper
    const routes = [
        {
            path: '/',
            component: () => import('layouts/MainLayout.vue'),
            children: [
                {
                    path: '',
                    name: 'dashboard',
                    component: () => import('pages/Dashboard.vue'),
                },
            ],
        },
        {
            path: '/dataTable',
            component: () => import('layouts/MainLayout.vue'),
            children: [
                {
                    path: '',
                    name: 'dataTablePage',
                    component: () => import('pages/DataTable.vue'),
                },
            ],
        },
    ];

    // Always leave this as last one
    if (process.env.MODE !== 'ssr') {
        routes.push({
            path: '/:catchAll(.*)*',
            component: () => import('pages/Error404.vue'),
        });
    }

    return routes;
};

export default makeRoutes;
