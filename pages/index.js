// import { app } from 'config/firebaseConfig'
// import React, { useState, useEffect } from 'react';
// import { Button } from 'antd';
// import { getAuth, SAMLAuthProvider, signInWithPopup } from "firebase/auth";
// import Head from 'next/head';
// export default function Home() {
//   const auth = getAuth(app);
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     if (auth.currentUser) {
//       setUser(auth.currentUser);
//     }

//     return () => {

//     }
//   }, [])


//   const handleSSO = () => {
//     const provider = new SAMLAuthProvider('saml.firebase-test');
//     signInWithPopup(auth, provider,)
//       .then((result) => {
//         // User is signed in.
//         setUser(result.user.email);
//         console.log(result.user.email)
//         // Provider data available in result.additionalUserInfo.profile,
//         // or from the user's ID token obtained from result.user.getIdToken()
//         // as an object in the firebase.sign_in_attributes custom claim.
//       })
//       .catch((error) => {
//         console.error(error.message)
//       })
//   };

//   const handleSignOut = () => {
//     auth.signOut();
//   }

//   return (<>
//     <Head>
//     </Head>
//     <div className='flex flex-col h-screen w-screen justify-center place-items-center' >
//       <div className='flex flex-col w-[300px] h-[300px] p-12 bg-slate-100 rounded-xl space-y-4'>
//         <p className='text-blue-900'>{user}</p>
//         <Button type="default" onClick={handleSSO}>Sign in with Jump Cloud</Button>
//         <Button type="default" onClick={handleSignOut}>Sign out</Button>
//       </div>
//     </div>
//   </>
//   )
// }


import Link from "next/link";

export default function IndexPage() {
  const redirecttoNativeApp = (/*potential params */) => {
    document.location = "myScheme://";
  };
  const redirecttoAndroidApp = (/*potential params */) => {
    document.location = "https://saml-integration-2ef60.web.app/";
  };
  return (
    <div className="flex h-screen w-screen place-items-center justify-center">
      <div className="flex flex-col " >
        <button onClick={redirecttoNativeApp} className="h-12 w-44 bg-slate-500 px-4 py-2 rounded-full">
          Open iOS App
        </button>
        <button onClick={redirecttoNativeApp} className="h-12 w-44 bg-blue-800 px-4 py-2 rounded-full">
          Open Android App
        </button>
      </div>
    </div>
  );
}