import { app} from 'config/firebaseConfig'
import React, { useState, useEffect } from 'react';
import { Button } from 'antd';
import { getAuth, SAMLAuthProvider, signInWithPopup } from "firebase/auth";
import Head from 'next/head';
export default function Home() {
  const auth = getAuth(app);
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (auth.currentUser) {
      setUser(auth.currentUser);
    }

    return () => {

    }
  }, [])


  const handleSSO = () => {

    const provider = new SAMLAuthProvider('saml.firebase-saml');
    signInWithPopup(auth, provider)
      .then((result) => {
        // User is signed in.
        setUser(result.user.getIdToken());
        console.log(result)
        // Provider data available in result.additionalUserInfo.profile,
        // or from the user's ID token obtained from result.user.getIdToken()
        // as an object in the firebase.sign_in_attributes custom claim.
      })
      .catch((error) => {
        // Handle error.
      })
  };

  const handleSignOut = () => {
    auth.signOut();
  }

  return (<>
  <Head>
    
  </Head>
    <div className='flex flex-col h-screen w-screen justify-center place-items-center' >
      <div className='flex flex-col w-[300px] h-[300px] p-12 bg-slate-100 rounded-xl space-y-4'>
        <p>{user}</p>
        <Button type="default" onClick={handleSSO}>Sign in with Jump Cloud</Button>
        <Button type="default" onClick={handleSignOut}>Sign out</Button>
      </div>
    </div>
  </>
  )
}
