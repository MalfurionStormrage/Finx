import { lazy } from 'react';

const ReactLazyPreload = (importStatement) => {
    const Component = lazy(importStatement);
    Component.preload = importStatement;
    return Component;
};

/* apartados  */
const loginView = ReactLazyPreload(() => import('../views/login/loginView'));
const registroView = ReactLazyPreload(() => import('../views/registro/registroView'));
const dashboardView = ReactLazyPreload(() => import('../views/dashboard/dashboardView'));

/* sections */
const homeView = ReactLazyPreload(() => import('../views/dashboard/sections/home/homeView'));
const productoView = ReactLazyPreload(() => import('../views/dashboard/sections/producto/productoView'));
const chartView = ReactLazyPreload(() => import('../views/dashboard/sections/chart/chartView'));

/* 404 */
const page404 = ReactLazyPreload(() => import('../error/page404'));
const page404Home = ReactLazyPreload(() => import('../error/page404Home'));

export default {
    loginView,
    registroView,
    dashboardView,
    homeView,
    productoView,
    chartView,
    page404,
    page404Home
};