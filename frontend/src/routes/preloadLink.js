import { matchPath } from 'react-router-dom';
import routing from './routing';
import routingHome from './routingHome';

const routes = [...routing, ...routingHome];

const findComponentForRoute = (path, routes) => {

    const matchingRoute = routes.find((route) =>
        matchPath(path, {
            path: route.path,
            exact: true,
        })
    );

    return matchingRoute ? matchingRoute.component : null;
};


export const preloadRouteComponent = (path) => {
    const component = findComponentForRoute(path, routes);

    if (component && component.preload) {
        component.preload();
    }
};