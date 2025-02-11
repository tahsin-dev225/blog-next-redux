"use client"
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import app from "./firebase.config";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getAdmin, getUser } from "@/components/redux/user/userSlice";

const auth = getAuth(app)

const useFirebase = () => {
    const [user,setUser] = useState(null)
    const dispatch = useDispatch();
    const googleProvider = new GoogleAuthProvider();

    const createUser = (email,passowrd)=>{
        return createUserWithEmailAndPassword(auth,email,passowrd)
    }

    const signIn = (email, passowrd)=>{
        return signInWithEmailAndPassword(auth , email,passowrd)
    }

    const googleSignIn = ()=>{
        return signInWithPopup(auth, googleProvider )
    }

    const logOut = ()=>{
        return signOut(auth)
    }

    useEffect(()=>{
         onAuthStateChanged(auth, currentUser =>{
            dispatch(getUser(currentUser?.email))
            dispatch(getAdmin(currentUser?.email))
            console.log("current user ", currentUser)
        })
    },[])

    return {createUser , signIn , logOut , googleSignIn }
};

export default useFirebase;