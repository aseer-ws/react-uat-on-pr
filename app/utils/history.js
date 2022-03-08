import { createBrowserHistory } from 'history';
import routeConstants from '@utils/routeConstants';
import { isUAT } from './index';
const routes = Object.keys(routeConstants);
let pathname = window.location.pathname;
// let pathname = window.location.pathname.replace('/index.html', '');
let baseUrl = '';
if (isUAT()) {
  let isMatchedOnce = false;
  routes.forEach(routeKey => {
    const route = routeConstants[routeKey].route;
    if (pathname.endsWith(route)) {
      baseUrl = pathname.substring(0, pathname.length - route.length);
      isMatchedOnce = true;
    } else if (pathname.endsWith(`${route}/`)) {
      baseUrl = pathname.substring(0, pathname.length - route.length - 1);
      isMatchedOnce = true;
    }
  });
  if (!isMatchedOnce) {
    baseUrl = pathname;
  }
}

console.log({ baseUrl, isUAT: isUAT(), pathname });

const history = createBrowserHistory({ basename: baseUrl });
export default history;
