"use client"
import PrivateRoute from "@/components/provider/PrivateRoute";
import UserRoute from "@/components/provider/UserRoute";
import { addBlogs } from "@/components/redux/addBlog/addBlogSlice";
import { useState } from "react";
import { useDispatch } from "react-redux";

const page = () => {
    const dispatch = useDispatch()
    const role = ['admin']
    const [disable, setdisable] = useState(false)
    
    const normalButton = "w-full my-10 py-2 bg-blue-900/90 rounded cursor-pointer"
    const disablelButton = "w-full text-black my-6 py-2 bg-slate-400 rounded"

    const handleAddBlogs = (e)=>{
        e.preventDefault();
        const newBlog= {
            title : e.target.title.value,
            category : e.target.category.value,
            discription : e.target.discription.value,
            photo : e.target.photo.value,
            date : e.target.date.value,
        }
        dispatch(addBlogs(newBlog))
        e.target.reset();
    }

    return (
        <UserRoute role={role}>
            <div className="w-full">
                <h1 className="text-center my-5 mx-auto text-xl md:text-4xl font-medium">Add Blogs.</h1>
                <div className="border border-slate-900 border-t-slate-700 my-6 border-e-slate-600  w-full lg:w-[80%] rounded-md  shrink-0 shadow-2xl mx-auto">
                    <form onSubmit={handleAddBlogs} 
                      className="px-3 xl:px-10 my-6">
                        <div className="flex flex-col lg:flex-row gap-4">
                            <div className="w-full">
                                <p className="my-3 text-sm font-thin">Blog title.</p>
                                <input type="text" name='title' placeholder="Title" className="input w-full input-bordered" required />
                            </div>
                            <div className="w-full">
                                <p className="my-3 text-sm font-thin">Category</p>
                                <input type="text" name='category' placeholder="Category" className="input w-full input-bordered" required />
                            </div>
                        </div>
                        <div className="flex gap-4 flex-col lg:flex-row">
                            <div className="w-full">
                                <p className="my-3 text-sm font-thin">Description.</p>
                                <input type="text" name='discription' placeholder="Discription" className="input w-full input-bordered" required />
                            </div>
                            <div className="w-full">
                                <p className="my-3 text-sm font-thin">Photo url</p>
                                <input type="text" name='photo' placeholder="Photo url" className="input w-full input-bordered" required />
                            </div>
                        </div>
                        <div className="">
                            <p className="my-3 text-sm font-thin">Date.</p>
                            <input type="date" name='date' placeholder="Date" className="input w-full input-bordered" required />
                        </div>
                        <input disabled={disable} className={`${disable ? disablelButton : normalButton}  `}  type="submit" value="Add Blogs" />
                    </form>
                </div>
            </div>
        </UserRoute>
    );
};

export default page;