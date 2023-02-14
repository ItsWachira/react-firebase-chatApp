import React, { useState } from 'react'
import { db, auth, app } from '../firebase-config'
import { collection,addDoc,query,limit, serverTimestamp, orderBy} from "firebase/firestore";
import '../App.css'

function SendMessage({ scroll }) {
    const [msg, setMsg] = useState('')
    const messagesRef = collection(db, "messages");
 



       const sendMsg = async (e) => {
        const { uid, photoURL } = auth.currentUser

        
        await addDoc(messagesRef, {
            text: msg,
            createdAt: serverTimestamp(),
            uid: uid,
            photoURL: photoURL
        })
        setMsg('');

     
      };

    return (
        <div>
            
            <div className="sendMsg">
                    <input style={{ width: '78%', fontSize: '15px', fontWeight: '550', marginLeft: '5px', marginBottom: '-3px' }} placeholder='Message...' 
                    type="text" value={msg} 
                    onChange={(e) => setMsg(e.target.value)} />

                    <button style={{ width: '18%', fontSize: '15px', fontWeight: '550', margin: '4px 5% -13px 5%', maxWidth: '200px', borderRadius: '12px', background: '#8EC1D6'}} type="submit"
                    onClick={sendMsg}
                    >Send</button>
                </div>
       
        </div>
    )
}

export default SendMessage
