"use client"
import Blogs from "@/components/shared/Blogs";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const page = () => {
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
        <div className="mb-20 w-[95%] mx-auto mt-10">
            <h1 className="text-center mx-auto text-5xl font-semibold">Our Blogs</h1>
            <p className="md:max-w-[60%] mx-auto my-4 mb-8 text-center text-[15px]">Platform where people share their thoughts, knowledge, experiences, or information.</p>
            <div className="grid grid-cols-1 xl:grid-cols-4 gap-4 p-4 my-3">
                {blogs?.map((blog,idx)=><Blogs key={idx} blog={blog}></Blogs>)}
            </div>
        </div>
    );
};

export default page;