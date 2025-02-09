"use client"
import Link from "next/link";
import { useSelector } from "react-redux";

const layout = ({children}) => {
    const user = useSelector(state => state?.userReducer?.isAdmin)

    return (
        <div className="flex w-full ">
            <div className="flex flex-col py-5 border-r-[1px] border-r-slate-600 items-center h-screen px-3">
                {user?.role === 'admin' && <Link className="mx-3 btn btn-sm w-full my-3" href="/dashboard">Admin home</Link>}
                {
                    navItems?.map((item,idx) =><Link key={idx} className="mx-3 btn btn-sm w-full my-3" href={item.path}>{item?.title}</Link>)
                }
                {user?.role === 'admin' && <Link className="mx-3 btn btn-sm w-full my-3" href="/dashboard/manage-blogs">Manage Blogs</Link>}
            </div>
            {children}
        </div>
    );
};

const navItems = [
    
    {
        title : "Add Blogs",
        path : "/dashboard/add-blogs",
    },
]

export default layout;