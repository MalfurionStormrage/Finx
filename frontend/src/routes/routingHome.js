import views from './views';
import { pathHome, pathProductos, pathChart } from './paths';

const Shome = {
    component: views.homeView,
    path: pathHome,
    isPrivate: true
}

const productos = {
    component: views.productoView,
    path: pathProductos,
    isPrivate: true
}

const chart = {
    component: views.chartView,
    path: pathChart,
    isPrivate: true
}

const page404Home = {
    component: views.page404Home,
    path: "/**",
    isPrivate: false
}

export default [Shome, productos, chart, page404Home];