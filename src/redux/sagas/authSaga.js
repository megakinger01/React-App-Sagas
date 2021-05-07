import { put, takeLatest } from 'redux-saga/effects'
import { facebookAuthProvider, firebase, googleAuthProvider } from '../../database/firebase-config'
import { errorAction, loginAction } from '../actions/auth/auth'
import { types } from '../types/types'





function* loginResults({ payload }) {
    const { email, password } = payload

    try {

        const resp = yield firebase.auth().signInWithEmailAndPassword(email, password)
        const { user } = resp
        const { uid, displayName } = user

        yield put(loginAction(uid, displayName))

    } catch (error) {
        yield put(errorAction(error))
    }
}




function* loginGoogleResult() {
    try {

        const respGoogle = yield firebase.auth().signInWithPopup(googleAuthProvider)
        const { user } = respGoogle
        const { uid, displayName } = user
        // console.log(uid, displayName);

        yield put(loginAction(uid, displayName))

    } catch (error) {

        put(errorAction(error))

    }
}




function* loginFacebookResp() {
    try {

        const respFace = yield firebase.auth().signInWithPopup(facebookAuthProvider)
        console.log(respFace);


    } catch (error) {

        put(errorAction(error))
        console.log(error);

    }
}



function* registerResp({ payload }) {
    // console.log(payload);
    const { name, email, password } = payload

    try {

        const respRegister = yield firebase.auth().createUserWithEmailAndPassword(email, password)
        const { user } = respRegister
        yield user.updateProfile({ displayName: name })
        yield put(loginAction(user.uid, user.displayName))


    } catch (error) {

        put(errorAction(error))
        console.log(error);

    }
}


function* logOutResp() {

    try {

        yield firebase.auth().signOut()


    } catch (error) {

        put(errorAction(error))
        console.log(error);

    }
}






export default function* sagaAuth() {
    yield takeLatest(types.startloading, loginResults)
    yield takeLatest(types.signInGoogle, loginGoogleResult)
    yield takeLatest(types.signInFacebook, loginFacebookResp)
    yield takeLatest(types.startRegister, registerResp)
    yield takeLatest(types.logout, logOutResp)
}