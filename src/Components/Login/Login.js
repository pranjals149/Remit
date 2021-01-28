import React from 'react'

import './Login.css';
import loginImg from '../../assets/Login.svg'
import { Button } from '@material-ui/core';
import { auth, provider } from '../../firebase';
import { login } from '../../features/userSlice';
import { useDispatch } from 'react-redux';

const Login = () => {
    const dispatch = useDispatch();

    const signIn = () => {
        auth.signInWithPopup(provider)
            .then(({ user }) => {
                dispatch(login({
                    displayName: user.displayName,
                    email: user.email,
                    photoUrl: user.photoURL
                }))
            })
            .catch(err => alert(err.message))
    }

    return (
        <div className='login'>
            <div className='login__container'>
                <img src={loginImg} alt='' />
                <Button
                    onClick={signIn}
                    variant='contained'
                    color='primary'
                >Login</Button>
            </div>
        </div>
    )
}

export default Login
