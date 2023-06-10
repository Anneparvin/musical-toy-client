import React, { createContext, useEffect, useState } from 'react';
import app from '../../firebase/firebase.config';
import {GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup} from 'firebase/auth';

export const AuthContext = createContext();
const auth = getAuth(app)

const googleProvider = new GoogleAuthProvider();

const AuthProviders = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setloading] = useState(true);

    // create user
    const createUser = (email, password) => {
        setloading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // user sign in 
    const signIn = (email, password) => {
        setloading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    // google sign in
    const googleSignIn = () =>{
        setloading(true);
        return signInWithPopup(auth, googleProvider);
    }  

    // use sign out
    const logOut = () => {
      return signOut(auth)  
    }
    
    useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, 
        (currentUser)=> {
        console.log('inside auth state changed', currentUser);
        setloading(false);
        setUser(currentUser)

    });
    return () => {
        unsubscribe();
    }
    },[])

    const authInfo = {
        createUser,
        signIn,
        logOut,
        googleSignIn
    }

    return (
        <AuthContext.Provider value={authInfo}>
           {children} 
        </AuthContext.Provider>
    );
};

export default AuthProviders;