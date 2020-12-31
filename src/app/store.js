import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers';
import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk';
import rootSaga from 'app/sagas';

// import logger from 'redux-logger';


const sagaMiddleware = createSagaMiddleware();

const composeEnhancers =
    typeof window === 'object' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
        : compose;

const middlewares = [sagaMiddleware, thunk];
const enhancer = composeEnhancers(
    applyMiddleware(...middlewares)
);

const store = createStore(rootReducer, {}, enhancer);

sagaMiddleware.run(rootSaga);


export default store
