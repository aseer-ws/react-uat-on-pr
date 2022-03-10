import { createBrowserHistory } from 'history';
import { isUAT } from './index';
// let pathname = window.location.pathname;
let pathname = window.location.pathname.replace('/index.html', '');
let baseUrl = '';
if (isUAT()) {
  baseUrl = pathname;
}

const history = createBrowserHistory({ basename: baseUrl });
export default history;
