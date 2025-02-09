"use client"
import useFirebase from "@/firebase/useFirebase";
import Link from "next/link";
import { IoMdLogOut, IoMdPersonAdd } from "react-icons/io";
import { useSelector } from "react-redux";

const Navebar = () => {
    const {logOut, } = useFirebase();
    const isUser = useSelector(state => state?.userReducer?.userData)
    const user = useSelector(state => state?.userReducer?.isAdmin)

    console.log(isUser)

    return (
        <div className="navbar bg-base-100">
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
                <Link href='/' className="btn btn-ghost">BLOG-y</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                {
                    navItems?.map((item,idx) =><Link key={idx} className="mx-3" href={item.path}>{item?.title}</Link>)
                }
                {user?.role === 'admin' && <Link className="mx-3" href="/dashboard">Dashboard</Link>}
                {user?.email && <Link className="mx-3" href="/dashboard/add-blogs">Add Blog</Link>}
            </div>
            <div className="navbar-end">
                {
                     isUser ?  
                    <button onClick={()=> logOut()} className="btn btn-primary text-white btn-sm"><IoMdLogOut />Log out</button>
                     :
                     <Link href='/login' className="btn btn-primary text-white btn-sm"><IoMdPersonAdd />login</Link>
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