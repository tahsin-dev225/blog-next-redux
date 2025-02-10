"use client"
import PrivateRoute from "@/components/provider/PrivateRoute";
import { approvedPendeigBlog, deleteBlogs } from "@/components/redux/addBlog/addBlogSlice";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import { IoMdAddCircleOutline } from "react-icons/io";
import { TiDeleteOutline } from "react-icons/ti";
import { useDispatch, useSelector } from "react-redux";

const page = () => {
    const [pendingBlogs,setPendingBlogs] = useState([])
    const loading = useSelector(state => state?.blogReducer?.isLoading)
    const data = useSelector(state => state?.blogReducer?.data)
    const dispatch = useDispatch()
    const role = ['admin']

    const handleDelete = (id)=>{
        dispatch(deleteBlogs(id))
    }

    const handleApprove = (blog)=>{
        dispatch(approvedPendeigBlog(blog))
    }

    useEffect(()=>{
        axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/pendingBlogs`,{withCredentials : true})
        .then(res =>{
            setPendingBlogs(res?.data)
        })
        .catch(err =>{
            console.error('error form maname blogs',err)
        })
    },[loading,data])

    return (
        <PrivateRoute role={role}>
        <div className="w-full">
            <h1 className="text-white text-xl lg:text-3xl font-bold flex justify-center items-center">Services Details</h1>
            <div className="overflow-x-auto w-full my-14">
            <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th  className="hidden lg:flex"></th>
                            <th>Photo</th>
                            <th className="hidden lg:flex">Title Name</th>
                            <th>Category</th>
                            <th>Date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        pendingBlogs.map((blog,inx) =><tr key={inx}>
                            <th className="hidden lg:flex">{inx + 1}</th>
                            <td>
                                <Image src={blog.photo} width={50} height={30} alt="Service" />
                                <p className="text- lg:hidden my-2">{blog?.title}</p>
                            </td>
                            <td className="hidden lg:block ">{blog?.title}</td>
                            <td>{blog?.category}</td>
                            <td>{blog?.date}</td>
                            <td className="flex gap-3  items-center">
                                {/* <Link href={`/my-bookings/update/${service._id}`} ><button className="btn text-white btn-primary">Edit</button></Link> */}
                                <button onClick={()=> handleDelete(blog?._id)} className=" text-red-600 text-2xl md:text-3xl "><TiDeleteOutline/></button>
                                <button onClick={()=> handleApprove(blog)} className=" text-white bg-green-700 flex justify-center items-center gap-2  text-lg md:text-lg border rounded-md px-2 ">Add <IoMdAddCircleOutline/></button>
                            </td>
                        </tr>)
                    }
                    </tbody>
                </table>
            </div>
        </div>
        </PrivateRoute>
    );
};

export default page;