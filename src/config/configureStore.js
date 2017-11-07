import AppNavigation from '../Navigation/AppNavigation'
import { createStore, applyMiddleware, compose } from 'redux'
import ReduxThunk from 'redux-thunk'
import createLogger from 'redux-logger'
import reducers from '../reducers'


export default configureStore = () => {
  const logger = createLogger();
  let store = createStore(reducers, {}, compose(applyMiddleware(ReduxThunk, logger)));
  //compose(applyMiddleware(ReduxThunk))(createStore)(reducers);
  //createStore(reducers, {}, compose(applyMiddleware(ReduxThunk)));
  return store;
}

// {} - initial state which we need to pass to redux store application.