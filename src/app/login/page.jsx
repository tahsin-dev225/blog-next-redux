"use client"
import useFirebase from '@/firebase/useFirebase';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
// import { useRouter as nextRoute } from 'next/navigation';
import { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { useDispatch, useSelector } from 'react-redux';

const page = () => {
    const {signIn,googleSignIn } = useFirebase();
    const dispatch = useDispatch();
    const router = useRouter();
    const [disable, setdisable] = useState(false)
    // const route = nextRoute()
    const isUser = useSelector(state => state?.userReducer?.userData)

    const normalButton = "py-2 w-full rounded bg-blue-900/90 text-white my-7"
    const disablelButton = "w-full text-black my-6 py-2 bg-slate-400 rounded"

    if(isUser){
        return router.push('/')
    }

    const googleLogin = ()=>{
        googleSignIn()
        .then(res =>{
            router.push('/')
        }).catch(err =>{
            console.error(err)
        })
    }

    const handleLogin = e =>{
        setdisable(true)
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        signIn(email,password)
        .then(res =>{
            setdisable(false)
            router.push('/')
        })
        .catch(error =>{
            alert('You dont have any account sign up first.')
            console.log('error from login', error)
            setdisable(false)
        }
        )
    }

    return (
        <div className="h-screen w-full ">
            <h1 className="text-5xl text-center mx-auto my-4 ">Login page.</h1>
            <div className="w-[40%] mx-auto my-8 rounded bg-red-200/10 border border-slate-600 p-6">
                <form onSubmit={handleLogin} className="">
                    <h2 className="text-3xl mb-6 mx-auto text-center">Login.</h2>
                    <input type="text" placeholder="email" name="email" className="py-2 px-3 w-full my-4 rounded bg-slate-100 text-slate-900" required />
                    <input type="text" placeholder="password" name="password" className="py-2 px-3 w-full my-4 rounded bg-slate-100 text-slate-900" required />
                    <input disabled={disable} className={`${disable ? disablelButton : normalButton}  `} type="submit" value="Login" />
                    
                    
                </form>
                <div className="w-full my-4 flex justify-center items-center">
                    <button onClick={()=> googleLogin()} className="btn "><FcGoogle className="text-2xl" /> Login with Google.</button>
                </div>
                <p className="text-center mx-auto ">Don't have account?<Link href='/signup' className="btn btn-link btn-sm">Sign-up.</Link></p>
            </div>
        </div>
    );
};

export default page;