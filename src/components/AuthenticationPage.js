import React, { useContext, useState, useRef } from 'react'
import { formValidation } from '../utils/validate'
import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";
import { auth } from "../utils/firebase";

const AuthenticationPage = () => {

  const [isSignIn, setIsSignIn] = useState(true)
  const [errorMsg, setErrorMsg] = useState(null)
  
  

  const email = useRef(null)
  const phoneNumber = useRef(null);
  const username = useRef(null);
  const password = useRef(null);

  const validationHandler = () => {

    const message = formValidation(email.current?.value || "", phoneNumber.current?.value || "", username.current?.value || "", password.current?.value || "");
    // console.log(message);
    setErrorMsg(message);
    if (message) return;

    // sign in / sign up logic
    if (!isSignIn) {
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user)
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorCode + "-" + errorMessage);
          // ..
        });
    } else {
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user)
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
           setErrorMsg(errorCode + "-" + errorMessage);
        });
    }
  }



  

   const signInHandler = () => {
     setIsSignIn(!isSignIn);
   }; 


    return (
      <form
        onSubmit={(event) => {
          event.preventDefault();
        }}
        className="flex flex-col items-center min-h-screen bg-gray-100 font-sans"
      >
        <div className="p-4 mt-20 mb-8">
          <h1 className="text-3xl font-bold">
            {isSignIn ? "Login" : "Sign Up"}
          </h1>
          <p onClick={signInHandler} className="text-[#FE5005] cursor-pointer">
            {isSignIn ? "or create new account" : "or login to your account"}
          </p>
        </div>

        <input
          ref={email}
          type="email"
          placeholder="email"
          className="border-gray-500 border-2 rounded-md w-80 h-14 px-2 pb-2  m-1 text-sm font-semibold"
          // onChange={(event) => setUserName(event.target.value)}
        ></input>

        {isSignIn ? null : (
          <>
            <input
              ref={username}
              type="text"
              placeholder="username"
              className="border-gray-500 border-2 rounded-md w-80 h-14 px-2 pb-2   m-1 text-sm font-semibold"
            ></input>

            <input
              ref={phoneNumber}
              type="text"
              placeholder="Phone Number"
              className="border-gray-500 border-2 rounded-md w-80 h-14 px-2 pb-2  m-1 text-sm font-semibold"
            ></input>
          </>
        )}

        <input
          ref={password}
          type="password"
          placeholder="Enter your password"
          className="border-gray-500 border-2 rounded-md w-80 h-14 px-2 pb-2  m-1 text-sm font-semibold"
          
        ></input>

        <p className="text-red-700 font-semibold">{errorMsg}</p>

        <button
          className="bg-[#FE5005] rounded-sm w-80 h-12 p-2 px-4 m-4 font-bold text-white"
          onClick={validationHandler}
        >
          {isSignIn ? "Login" : "Sign In"}
        </button>
      </form>
    );
}

export default AuthenticationPage