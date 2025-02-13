"use client"
import UserRoute from "@/components/provider/UserRoute";
import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const page = ({params}) => {
    const loading = useSelector(state => state?.blogReducer?.isLoading)
    const [blog,setBlog] = useState()
    const {id} = React.use(params)

    useEffect(()=>{
        axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/approvedgBlogs/${id}`,{withCredentials : true})
        .then(res =>{
            setBlog(res?.data)
        })
        .catch(err =>{
            console.error('erro from blog details',err)
        })
    },[loading])

    return (
        <UserRoute>
            <div className="lg:w-[75%] mx-auto h-screen">
                <div className="flex p-5 gap-10">
                    <div className="max-w-[600px]"><Image className="w-full" src={blog?.photo} width={700} height={600} alt="blog" /></div>
                    <div className="">
                        <h1 className="text-4xl ">Title : {blog?.title}</h1>
                        <p className="text-lg my-4 ">Date : {blog?.date}</p>
                        <p className="text-lg my-4 ">Category : {blog?.category}</p>
                        <p className="text-lg my-8 px-2">description : {blog?.discription}</p>
                    </div>
                </div>
            </div>
        </UserRoute>
    );
};

export default page;