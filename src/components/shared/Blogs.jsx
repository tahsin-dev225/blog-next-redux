"use client"
import Image from "next/image";
import Link from "next/link";
import { FaClock } from "react-icons/fa6";
import { TiArrowRightThick } from "react-icons/ti";

const Blogs = ({blog}) => {
    return (
        <div className="border bg-slate-200 text-slate-800 border-slate-900 rounded-md w-full ">
           <div className="flex justify-center rounded-t items-center min-h-[300px] max-h-[300px] overflow-hidden"> 
                <Image className="w-full rounded-t object-cover mx-auto  h-[300px]" src={blog?.photo} width={500} height={300} alt="blog" />
           </div>
            <div className=" px-3 py-3 ">
                <h1 className="text-[21px] font-medium text-slate-900 my-2">{blog?.title}</h1>
                <div className="text-[14px]  my-2 font-thin line-clamp-2" dangerouslySetInnerHTML={{ __html: blog?.discription }} />
                <div className="flex justify-between w-full">
                    <p className="flex gap-1 justify-center items-center text-[14px] text-slate-700"><FaClock />{blog?.date}</p>
                    <Link className="text-xl  flex w-max  justify-center items-center gap-1 text-sky-400" href={`/blogDetails/${blog?._id}`}>Read <TiArrowRightThick/></Link>
                </div>
                
            </div>
        </div>
    );
};

export default Blogs;