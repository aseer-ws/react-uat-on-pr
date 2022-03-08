import { createBrowserHistory } from 'history';
import routeConstants from '@utils/routeConstants';
import { isUAT } from './index';
const routes = Object.keys(routeConstants);
const pathname = window.location.pathname;
let baseUrl = '';
if (isUAT()) {
  routes.forEach(routeKey => {
    const route = routeConstants[routeKey].route;
    if (pathname.includes(route)) {
      if (pathname.substring(pathname.length - route.length, pathname.length) === route) {
        baseUrl = pathname.substring(0, pathname.length - route.length);
      } else if (pathname.substring(pathname.length - route.length, pathname.length - 1) === `${route}/`) {
        baseUrl = pathname.substring(0, pathname.length - route.length - 1);
      }
    }
  });
}

console.log({ baseUrl });

const history = createBrowserHistory({ basename: baseUrl });
export default history;
