import React from 'react';
import { signInWithPopup} from "firebase/auth";
import {auth, provider} from '../firebase-config'



function SignIn() {
    

    const signInWithGoogle =  () => {
        signInWithPopup(auth,provider)
        };
    
    return (
        <div style={{ display: 'flex', justifyContent: 'center', height: '100vh', alignItems: 'center' }}>
            <button onClick={signInWithGoogle} style={{ padding: '30px', fontSize: '20px', borderRadius: '0', fontWeight: '600' }}>Sign In With Google</button>
        </div>
    )
}

export default SignIn
