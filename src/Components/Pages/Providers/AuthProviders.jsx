import React, { createContext, useEffect, useState } from 'react';
import app from '../../firebase/firebase.config';
import {GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth';

export const AuthContext = createContext();
const auth = getAuth(app)


const AuthProviders = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    
    const googleProvider = new GoogleAuthProvider();

    // create user
    const createUser = (email, password) => {
        setLoading(false);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // user sign in 
    const signIn = (email, password) => {
        setLoading(false);
        return signInWithEmailAndPassword(auth, email, password)
    }

    // google sign in
    const googleSignIn = () =>{
        setLoading(false);
        return signInWithPopup(auth, googleProvider);
    }  

    // use sign out
    const logOut = () => {
      return signOut(auth)  
    }

    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
          });
    }
    
    useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, 
        (currentUser)=> {
        console.log('inside auth state changed', currentUser);
        setLoading(false);
        setUser(currentUser)
    
    });


    return () => {
        unsubscribe();
    }
    },[])

    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut,
        googleSignIn,
        updateUserProfile
    }

    return (
        <AuthContext.Provider value={authInfo}>
           {children} 
        </AuthContext.Provider>
    );
};

export default AuthProviders;