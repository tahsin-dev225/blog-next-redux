"use client"
import useFirebase from '@/firebase/useFirebase';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';

const page = () => {
    const {signIn} = useFirebase();
    const dispatch = useDispatch();
    const router = useRouter();

    const handleLogin = e =>{
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        signIn(email,password)
        .then(res =>{
            router.push('/')
        })
        .catch(error =>{
            alert('You dont have any account sign up first.')
            console.log('error from login', error)
        }
        )

    }

    return (
        <div className="h-screen w-full ">
            <h1 className="text-5xl text-center mx-auto my-4 ">Login page.</h1>
            <div className="w-[40%] mx-auto my-8 rounded bg-red-200/10 border border-slate-600 p-6">
                <form onSubmit={handleLogin} className="">
                    <h2 className="text-3xl mb-6 mx-auto text-center">Login.</h2>
                    <input type="text" placeholder="email" name="email" className="py-2 px-3 w-full my-4 rounded bg-slate-100 text-slate-900" />
                    <input type="text" placeholder="password" name="password" className="py-2 px-3 w-full my-4 rounded bg-slate-100 text-slate-900" />
                    <input type="submit" className="py-2 w-full rounded bg-blue-900/90 text-white my-7" value="Login" />
                    <p className="text-center mx-auto ">Don't have account?<Link href='/signup' className="btn btn-link btn-sm">Sign-up.</Link></p>
                </form>
            </div>
        </div>
    );
};

export default page;