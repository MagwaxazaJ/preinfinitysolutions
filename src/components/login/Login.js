import React,{useState} from 'react';
import './Login.css';
import {Link} from 'react-router-dom';
// import {auth} from '../firebase';

export default function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = (e) =>{
        e.preventDefault();
        // auth.signInWithEmailAndPassword(email, password)
        // .then((auth)=> {

        // })
        // .catch(err => alert(err.message))
    }

    const register = (e) =>{
        e.preventDefault();
        // auth.createUserWithEmailAndPassword(email, password)
        // .then((auth)=> {

        // })
        // .catch(err => alert(err.message))
    }

    return(
        <div className='login'>
            <Link to='/'>
            <h2 className='login__logo'>amazon</h2>
            </Link>

            <div className='login__container'>
                <h1>Sign in</h1>
                <form>
                    <h5>Email</h5>
                    <input type='text' value={email} onChange={(e) => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type='password' value={password} onChange={(e) => setPassword(e.target.value)}/>

                    <button className='login__signInButton' type='submit' onClick={signIn}>Sign In</button>
                </form>

                <p>
                    By signing-in you agree to Amazon's Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>

                <button className='login__registerButton' onClick={register}>Create your amazon account</button>

            </div>
        </div>
    )
}