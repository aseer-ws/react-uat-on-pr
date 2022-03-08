import { createBrowserHistory } from 'history';
import routeConstants from '@utils/routeConstants';
import { isUAT } from './index';
const routes = Object.keys(routeConstants);
const pathname = window.location.pathname;
let baseUrl = '';
if (isUAT()) {
  routes.forEach(routeKey => {
    const route = routeConstants[routeKey].route;
    if (pathname.endsWith(route)) {
      baseUrl = pathname.substring(0, pathname.length - route.length);
    } else if (pathname.endsWith(`${route}/`)) {
      baseUrl = pathname.substring(0, pathname.length - route.length - 1);
    }
  });
}

console.log({ baseUrl, isUAT: isUAT(), pathname });

const history = createBrowserHistory({ basename: baseUrl });
export default history;
