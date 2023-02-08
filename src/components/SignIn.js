import React, {useState} from 'react';
import { signInWithPopup} from "firebase/auth";
import {auth, provider} from '../firebase-config'
import Button from '@mui/material/Button';
import '../App.css'


function SignIn() {
    const [user, setUser] = useState('')

    const signInWithGoogle =  () => {
        signInWithPopup(auth,provider)
        };
    
    return (
        <div style={{ display: 'flex', justifyContent: 'center', height: '100vh', alignItems: 'center' }}>
            <Button onClick={signInWithGoogle} style={{ padding: '30px', fontSize: '20px', borderRadius: '0', fontWeight: '600' }}>Sign In With Google</Button>
        </div>
    )
}

export default SignIn