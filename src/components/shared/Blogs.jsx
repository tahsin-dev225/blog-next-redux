"use client"
import Image from "next/image";
import Link from "next/link";
import { TiArrowRightThick } from "react-icons/ti";

const Blogs = ({blog}) => {
    return (
        <div className="border border-slate-700 rounded-md w-full ">
            <Image className="w-full mx-auto max-h-96 " src={blog?.photo} width={500} height={300} alt="blog" />
            <div className="flex justify-between px-2 py-1 items-center">
                <h1 className="text-3xl  my-2">{blog?.title}</h1>
                <Link className="text-2xl p-2 rounded-full border border-slate-700" href={`/blogDetails/${blog?._id}`}><TiArrowRightThick/></Link>
            </div>
        </div>
    );
};

export default Blogs;