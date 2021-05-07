import { all } from 'redux-saga/effects'
import sagaAuth from './authSaga'






export default function* rootSaga() {

    yield all([
       sagaAuth(),
       
    ])
  
}