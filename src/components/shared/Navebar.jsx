"use client"
import useFirebase from "@/firebase/useFirebase";
import Link from "next/link";
import { IoMdLogOut, IoMdPersonAdd } from "react-icons/io";
import { useSelector } from "react-redux";
import Drawer from 'react-modern-drawer'

import 'react-modern-drawer/dist/index.css'
import { useState } from "react";
import Image from "next/image";
import { FaRegCircleUser, FaRegUser } from "react-icons/fa6";

const Navebar = () => {
    const {logOut, } = useFirebase();
    const [isOpen, setIsOpen] = useState(false)
    const isUser = useSelector(state => state?.userReducer?.userData)
    const user = useSelector(state => state?.userReducer?.isAdmin)
    
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }
    // console.log(user)

    return (
        <div className="navbar bg-base-100/70">
            <div className="navbar-start">
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h8m-8 6h16" />
                    </svg>
                </div>
                <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                    
                </ul>
                </div>
                <Link href='/' className="mx-3"><Image className="rounded" src='/img/blog-logo2.jpg' width={80} height={40} alt="logo" /></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                {
                    navItems?.map((item,idx) =><Link key={idx} className="mx-3" href={item.path}>{item?.title}</Link>)
                }
                {user?.role === 'admin' && <Link className="mx-3" href="/dashboard">Dashboard</Link>}
                {isUser && <Link className="mx-3" href="/dashboard/add-blogs">Add Blog</Link>}
            </div>
            <div className="navbar-end">
                {
                     isUser ?  
                     <FaRegUser className="text-3xl cursor-pointer p-1 border mx-3 my-2 border-stone-500 rounded-full " onClick={toggleDrawer}/>
                    
                     :
                     <Link href='/login' className="btn btn-primary text-white btn-sm"><IoMdPersonAdd />login</Link>
                }
                {
                isUser &&
                <Drawer
                open={isOpen}
                onClose={toggleDrawer}
                direction='right'
                className=''
                >
                    <div className="flex justify-center flex-col h-full items-center">
                        <div className="">
                            <Image className="my-6 rounded-full" src={`/img/userDef.png`} width={80} height={80} alt="user" />
                            <p className="text-center text-slate-800">{user?.name}</p>
                        </div>
                        <button onClick={()=> logOut()} className="btn btn-primary my-8 text-white btn-sm"><IoMdLogOut />Log out</button>
                    </div>
                </Drawer>
                }
            </div>
            
        </div>
    );
};

const navItems = [
    {
        title : "Home",
        path : "/",
    },
    {
        title : "Blogs",
        path : "/blogs",
    },
]

export default Navebar;