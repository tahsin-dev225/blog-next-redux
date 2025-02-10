"use client"

import { useSelector } from "react-redux";
import Blogs from "../shared/Blogs";
import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

const BlogsHome = () => {
    const loading = useSelector(state => state?.blogReducer?.isLoading)
    const [blogs, setBlogs] = useState([])
    // console.log('loading', loading)

    useEffect(()=>{
        axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/approvedgBlogs`, {withCredentials : true})
        .then(res =>{
            // console.log('res form home blogs',res)
            setBlogs(res.data)
        })
        .catch(err =>{
            console.error('eror form blog home', err)
        })
    },[loading])

    return (
        <div className="my-20 ">
            <h1 className="text-center mx-auto text-5xl font-semibold">Our Blogs</h1>
            <p className="md:max-w-[60%] mx-auto my-4 mb-8 text-center ">Platform where people share their thoughts, knowledge, experiences, or information.</p>
            <div className="grid grid-cols-1 xl:grid-cols-4 gap-4 p-4 my-3">
                {blogs.slice(0,8).map((blog,idx)=><Blogs key={idx} blog={blog}>

                </Blogs>)}
            </div>
            <div className="flex justify-center">
                <Link href='/blogs' className="px-5 py-2 rounded bg-blue-800/80 text-white mx-auto my-4">See all blogs</Link>
            </div>
        </div>
    );
};

export default BlogsHome;