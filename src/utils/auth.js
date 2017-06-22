/**
 * Created by YasumasaTakemura on 2017/06/19.
 */
import * as firebase from "firebase";

const config = {
    apiKey: "AIzaSyC_w624RPOda7yqyyQ82UbLLV-WuN74vF0",
    authDomain: "myapp20170604.firebaseapp.com",
    databaseURL: "https://myapp20170604.firebaseio.com",
    projectId: "myapp20170604",
    storageBucket: "myapp20170604.appspot.com",
    messagingSenderId: "625148901019"
};

// firebase.initializeApp(config)
//
export const _firebase = firebase.initializeApp(config)

class UserAuthentication {
    constructor() {
        const config = {
            apiKey: "AIzaSyC_w624RPOda7yqyyQ82UbLLV-WuN74vF0",
            authDomain: "myapp20170604.firebaseapp.com",
            databaseURL: "https://myapp20170604.firebaseio.com",
            projectId: "myapp20170604",
            storageBucket: "myapp20170604.appspot.com",
            messagingSenderId: "625148901019"
        };

        this._firebase = firebase.initializeApp(config);
        const auth = this._firebase.auth();
    }


    signInWithGoogleAccount(callback) {
        var provider = new firebase.auth.GoogleAuthProvider();
        provider.addScope('https://www.googleapis.com/auth/plus.login');

        firebase.auth().signInWithPopup(provider).then(function (result) {
            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = result.credential.accessToken;
            // The signed-in user info.

            console.log(token)

            var user = result.user;
            console.log(user)

            callback();


            // ...
        }).catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;

            console.log(errorCode, errorMessage)
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
        });

    }


    onAuthStateChanged() {
        firebase.auth().onAuthStateChanged(user => {
            console.log(user);
            if (user)return user;
        });
    }


    sighOut() {
        firebase.auth().signOut();
    }


}

export const currentUser = firebase.auth().currentUser;

export function initFirebase() {
    const config = {
        apiKey: "AIzaSyC_w624RPOda7yqyyQ82UbLLV-WuN74vF0",
        authDomain: "myapp20170604.firebaseapp.com",
        databaseURL: "https://myapp20170604.firebaseio.com",
        projectId: "myapp20170604",
        storageBucket: "myapp20170604.appspot.com",
        messagingSenderId: "625148901019"
    };

    // const _firebase = firebase.initializeApp(config);
    // console.log(_firebase)
    const auth = firebase.auth();
    // const db = firebase.initializeApp(config).database();
    // const storage = firebase.initializeApp(config).storage();
    console.log('here')
    return {
        auth: auth,
        // db: db,
        // storage: storage,
    }

}


export function signInWithGoogleAccount(callback,updateUserState) {
    var provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/plus.login');

    firebase.auth().signInWithPopup(provider).then(function (result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        if(user){
            updateUserState()
        }
        callback('signInWithGoogleAccount');
        // ...
    }).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;

        console.log(errorCode, errorMessage)
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
    });

}


export function signInWithFacebookAccount(callback) {
    var provider = new firebase.auth.FacebookAuthProvider();
    provider.addScope('user_birthday');
    provider.addScope('public_profile');
    firebase.auth().signInWithPopup(provider).then(function (result) {
        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        console.log(token)

        var user = result.user;
        console.log(user)
        callback();
                console.log('passed??')
        // ...
    }).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;

                console.log(errorCode)
                console.log(errorMessage)
                console.log(email)
                console.log(credential)
        // ...
    });
}


export function onAuthStateChanged() {
    firebase.auth().onAuthStateChanged(user => {

        if (user){
            console.log(user);
            console.log(user.uid,);
            return user.uid;
        }
    });
}


export function sighOut() {
    firebase.auth().signOut();
}



