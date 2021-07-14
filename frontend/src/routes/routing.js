import views from './views';
import { pathLogin, pathRegistro, pathHome } from './paths';

const login = {
    component: views.loginView, //vista
    path: pathLogin,// string ruta (en este seria "/")
    isPrivate: false
}

const registro = {
    component: views.registroView,
    path: pathRegistro,
    isPrivate: false
}

const dashboardView = {
    component: views.dashboardView,
    path: pathHome,
    isPrivate: true
}

const page404 = {
    component: views.page404,
    path: !pathHome ? "/**" : null,
    isPrivate: false
}

export default [login, registro, dashboardView, page404];