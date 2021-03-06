import React, { useState } from 'react'
import './Login.css'
import { auth } from './firebase'
import { login } from './features/userSlice';
import { useDispatch } from 'react-redux';

function Login() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [semail, setSEmail] = useState('');
    const [spassword, setSPassword] = useState('');
    const [profilePic, setProfilePic] = useState('');

    const dispatch = useDispatch();

    const register = () => {
        if(!name) {
            return alert("Please enter full name");
        }

        auth.createUserWithEmailAndPassword(semail, spassword)
        .then((userAuth) => {
            userAuth.user.updateProfile({
                displayName: name,
                photoURL: profilePic,
            })
            .then(() => {
                dispatch(login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: name,
                    photoURL: profilePic,
                }))
            })
        })
        .catch((error) => alert(error.message))
    };

    const loginToApp = (e) => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(email, password)
        .then(userAuth => {
            dispatch(login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: userAuth.user.displayName,
                photoUrl: userAuth.user.photoURL,
            }))
        })
        .catch(error => alert(error))
    }

    return (
        <div className="login">
            <h3>Blinkedin</h3>

            <div className="login__container">
                <form>
                    <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" type="email" />
                    <input value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" type="password" />
                    <button type="submit" onClick={loginToApp} >Sign In</button>
                </form>

                <form>
                    <input value={name} onChange={e => setName(e.target.value)} placeholder="Full name (required if registering)" type="text"/>
                    <input value={profilePic} onChange={e => setProfilePic(e.target.value)} placeholder="Profile pic Url (optional)" type="url" />
                    <input value={semail} onChange={e => setSEmail(e.target.value)} placeholder="Email" type="email" />
                    <input value={spassword} onChange={e => setSPassword(e.target.value)} placeholder="Password" type="password" />
                    <button type="submit" onClick={register} >Sign Up</button>
                </form>
            </div>
        </div>
    )
}

export default Login
