import { createBrowserHistory } from 'history';
export default createBrowserHistory({ basename: window.APP_CONFIG.app.APP_CONTEXT_PATH });