import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers/rootReducer'

const middlewares = [thunk]

export const store = createStore(
    rootReducer,
    applyMiddleware(...middlewares)
)