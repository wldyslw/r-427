import { createStore, applyMiddleware } from 'redux'
import reducers from './reducers'
import thunkMiddleware from 'redux-thunk'

const configureStore = () => createStore(
    reducers,
    applyMiddleware(thunkMiddleware)
);

export default configureStore;
