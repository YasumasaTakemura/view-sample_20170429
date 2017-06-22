import React, {Component} from 'react';
import {
    onAuthStateChanged,
    sighOut,
    signInWithGoogleAccount,
    currentUser,
    signInWithFacebookAccount,
    _firebase
} from "../../utils/auth";
import {
    BrowserRouter as Router, Switch, Route, Redirect, Link, NavLink, withRouter
} from 'react-router-dom'
import validator from "email-validator";

class LoggingPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            validEmail: false,
            password: '',
            valid: false,
            signedIn: onAuthStateChanged() ? true : false,
            currentUser: currentUser,
            userState:false,
        };
        this.updateUserState=this.updateUserState.bind(this);


    }

    updateUserState(){
        this.setState({userState:true})
    }

    pushToUserPage(d) {
        console.log(d)
        console.log(this.state.userState)
        console.log('ready???')
        if (this.state.userState) {
            console.log('signed IN>>>>??')
            this.props.history.push('/tasks')
            {/*return <Redirect to={'/tasks'}/>*/}
        }


    }

    _signInWithGoogleAccount() {
        signInWithGoogleAccount(this.pushToUserPage,this.updateUserState);
        // this.pushToUserPage()
    }

    _signInWithFacebookAccount() {
        signInWithFacebookAccount(this.pushToUserPage);
        // this.pushToUserPage()
    }

    getUserInfo() {
        var name, email, photoUrl, uid;

        if (this.onAuthStateChanged != null) {
            name = this.currentUser.displayName;
            email = this.currentUser.email;
            photoUrl = this.currentUser.photoURL;
            uid = this.currentUser.uid;

            // The user's ID, unique to the Firebase project. Do NOT use
            // this value to authenticate with your backend server, if
            // you have one. Use User.getToken() instead.
            console.log(name, email, photoUrl, uid)
        }
    }


    emailHandler(e) {
        console.log(this.state)
        console.log(e)
        this._updateEmail(e);
        this._validateEmail(e);

    }

    _updateEmail(e) {
        this.setState({email: e})


    }

    updatePassword(e) {
        this.setState({password: e})

    }

    _validateEmail(e) {
        const validEmail = validator.validate(e)
        if (validEmail)this.setState({validEmail: true})
        else this.setState({validEmail: false})
    }

    validatePassword(e) {
        console.log(this.state)
        if (this.state.password === e && this.state.password.length >= 6 && this.state.validEmail) {
            this.setState({valid: true})
        } else {
            this.setState({valid: false})
        }

    }

    validateEmailDuplicated() {


    }

    signIn() {
        const promise = _firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
        promise.then(()=>this.pushToUserPage())
        promise.catch(e=>console.log(e.message))
    }


    signUp() {
        const promise = _firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password);
        // promise.then(()=>this.pushToUserPage())
        promise.catch(e=>console.log(e.message))
    }

    render() {

        const {signedIn, email, password, valid, user} = this.state;

        const styles = {

            container: {
                display: 'flex',
                width: '100%',
                height: '100%',

                justifyContent: 'center'
            },
            subContainer: {
                // display:'flex',
                // width:'20%',
                // alignSelf:'center'
                // margin: '0 auto',
                // alignItems:'center',
            },
            google: {
                padding: 5,
                backgroundColor: 'green',
                color: 'white',
                borderRadius: 3,
                textAlign: 'center',

            },

            facebookLoginBtn: {
                padding: 5,
                backgroundColor: '#4267B2',
                color: 'white',
                borderRadius: 3,
                textAlign: 'center',

            },

            email: {},
            password: {},
            signInBtn: {
                padding: 3,
                backgroundColor: '#039BE5',
                color: 'white',
                borderRadius: 5,
                textAlign: 'center',
            },
            inValidSignUpBtn: {
                backgroundColor: 'rgba(200,200,200,0.7)',
                color: 'white',
                borderRadius: 3,
                padding: 5,
                textAlign: 'center',
            },
            signUpBtn: {
                backgroundColor: '#039BE5',
                color: 'white',
                borderRadius: 3,
                padding: 5,
                textAlign: 'center',
            },
            signOutBtn: {
                backgroundColor: '#039BE5',
                color: 'white',
                borderRadius: 3,
                padding: 5,
                textAlign: 'center',
            },
            invalid: {
                float: 'right',
                backgroundColor: 'white',
                width: 10,
                height: 10,
            },
            valid: {
                float: 'right',
                backgroundColor: 'green',
                width: 10,
                height: 10,
            },
        };

        this.getUserInfo()
        this.pushToUserPage()


        return <div style={styles.container}>

            <div style={styles.subContainer}>

                {signedIn ? <div>you are signed in already</div> : <div>not signed in</div>}

                <div style={styles.google} onClick={ () =>this._signInWithGoogleAccount()}>
                    <div>Sign In with Google</div>
                </div>

                <div style={styles.facebookLoginBtn} onClick={ () =>this._signInWithFacebookAccount()}>
                    <div>Sign In with Facebook</div>
                </div>


                <div>email</div>
                <div style={styles.email}>
                    <input onChange={e=>this.emailHandler(e.target.value)}/>
                </div>

                <div>password</div>
                <div style={styles.password}>
                    <input onChange={e=>this.updatePassword(e.target.value)}/>
                </div>


                <div>enter password again</div>
                <div style={this.state.valid ? styles.valid : styles.invalid}></div>
                <div style={styles.password}>
                    <input onChange={e=>this.validatePassword(e.target.value)}/>
                </div>


                <div style={styles.signInBtn} onClick={()=>this.signIn()}>sign in</div>
                {valid ? <div style={styles.signUpBtn} onClick={()=>this.signUp()}>sign up</div> :
                    <div style={styles.inValidSignUpBtn}>sign up</div>}
                {signedIn ? <div style={styles.signOutBtn}>sign out</div> : null}
            </div>

        </div>
    }
}

export default LoggingPage