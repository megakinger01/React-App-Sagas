import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import saga from 'redux-saga'
import { authReducer } from './reducers/authReducer';
import { mensajesValidReducer } from './reducers/mensajesValidReducer';
import rootSaga from './sagas/rootSaga'



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const reducers = combineReducers({

    auth: authReducer,
    msg: mensajesValidReducer

})

const sagaMiddleware = saga()

export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(sagaMiddleware)
    )
)
sagaMiddleware.run(rootSaga)