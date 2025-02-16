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
            <div className="lg:w-[75%] mx-auto min:h-screen">
                <div className="lg:flex p-5  gap-10">
                    <div className="xl:max-w-[600px] overflow-y-hidden flex-grow xl:min-w-[580px] min-h-[700px]">
                        <Image className="w-full min-h-[400px] object-cover" src={blog?.photo} width={900} height={600} alt="blog" />
                    </div>
                    <div className="my-5">
                        <h1 className="text-4xl ">Title : {blog?.title}</h1>
                        <p className="text-[14px] my-2 ">Date : {blog?.date}</p>
                        <p className="text-[15px] my-2 ">Category : {blog?.category}</p>
                        <div dangerouslySetInnerHTML={{ __html: blog?.discription }} />
                        
                    </div>
                </div>
            </div>
        </UserRoute>
    );
};

export default page;