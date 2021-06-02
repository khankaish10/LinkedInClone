import React, { useState } from 'react'
import './Login.css'
import { auth } from './firebase'
import { useDispatch } from 'react-redux'
import { login } from './features/UserSlice'

function Login() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const [profilePic, setProfilePic] = useState("")
    const dispatch = useDispatch()

    const register = () => {


        if (!name) {
            return alert('please enter your name')
        }


        auth.createUserWithEmailAndPassword(email, password)
            .then((userAuth) => {
                const user = userAuth.user;
                user.updateProfile({
                    displayName: name,
                    photoURL: profilePic
                })
                dispatch(login({
                    email: user.email,
                    uid: user.uid,
                    displayName: name,
                    photoURL: profilePic
                }))
            })
            .catch(error => alert(error))
    }
    const Login = (e) => {
        e.preventDefault()

        auth.signInWithEmailAndPassword(email, password)
        .then(userAuth => {
            dispatch(login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: userAuth.user.displayName,
                photoURL: userAuth.user.profilePic
            }))
        })
        .catch( error => alert(error))
    }
    return (
        <div className='login'>
            <img
                src='https://www.pngitem.com/pimgs/m/579-5792572_linkedin-logo-png-linkedin-logo-svg-transparent-png.png'
                alt=''
            />
            <form>
                <input
                    type='text'
                    value={name}
                    onChange={e => setName(e.target.value)} placeholder='Enter Full name'
                />
                <input
                    type='text'
                    value={profilePic}
                    placeholder='profile picture url(optional)'
                    onChange={e => setProfilePic(e.target.value)}
                />
                <input
                    type='email'
                    value={email}
                    onChange={e => setEmail(e.target.value)} placeholder='Email'
                />
                <input
                    type='password'
                    value={password}
                    onChange={e => setPassword(e.target.value)} placeholder='password'
                />
                <button type='submit' onClick={Login} >Sign In</button>
            </form>
            <p>Not a member?
                <span className='login_register' onClick={register}>Register Now</span>
            </p>
        </div>
    )
}

export default Login
