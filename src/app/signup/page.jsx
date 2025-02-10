"use client"
import { addUser } from "@/components/redux/user/userSlice";
import useFirebase from "@/firebase/useFirebase";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useDispatch } from "react-redux";

const page = () => {
    const {user, createUser } = useFirebase();
    const dispatch = useDispatch();
    const router = useRouter()
    const [disable, setdisable] = useState(false)
    
    const normalButton = "py-2 w-full rounded bg-blue-900/90 text-white my-7"
    const disablelButton = "w-full text-black my-6 py-2 bg-slate-400 rounded"

    const handleSignUp = e =>{
        setdisable(true)
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        const name = e.target.name.value;
        const newUser = {
            name,email
        }
        
        // console.log('user from sign up'.user)
        createUser(email,password)
        .then(res =>{
            setdisable(false)
            // console.log('res from signup', res.user)
            if(res?.user){
                dispatch(addUser(newUser))
                router.pust('/')
            }
        })
        .catch(eror =>{
            setdisable(false)
            console.log('eror from sign up page', eror)
        })
    }

    return (
        <div className="h-screen w-full ">
            <h1 className="text-5xl text-center mx-auto my-4 ">Sign-Up page.</h1>
            <div className="w-[40%] mx-auto my-8 rounded bg-red-200/10 border border-slate-600 p-6">
                <form onSubmit={handleSignUp} className="">
                    <h2 className="text-3xl mb-6 mx-auto text-center">Sign-up.</h2>
                    <input type="text" placeholder="Name" name="name" className="py-2 px-3 w-full my-4 rounded bg-slate-100 text-slate-900" required />
                    <input type="text" placeholder="email" name="email" className="py-2 px-3 w-full my-4 rounded bg-slate-100 text-slate-900" required />
                    <input type="text" placeholder="password" name="password" className="py-2 px-3 w-full my-4 rounded bg-slate-100 text-slate-900" required/>
                    <input type="submit" disabled={disable} className={`${disable ? disablelButton : normalButton}  `} value="Sign-up" />
                    <p className="text-center mx-auto ">Already have account?<Link href='/login' className="btn btn-link btn-sm">Login.</Link></p>
                </form>
            </div>
        </div>
    );
};

export default page;