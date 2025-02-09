import Link from "next/link";
import { IoIosArrowDropright } from "react-icons/io";

const Banner = () => {
    return (
        <div className="3xl:container mb-10 bg-[url('/img/blogbnr.jpg')] w-full bg-cover relative mx-auto xl:max-h-[800px] 2xl:h-screen">
            <div className="w-full h-full flex justify-center items-center  bg-black/60">
                <div className="lg:w-[80%] py-8 rounded-md flex flex-col gap-5 bg-red-200/5">
                    <div className="p-5">
                        <h1 className="text-5xl font-serif">Read our blogs.</h1>
                        <p className="my-4">An online platform where people share their thoughts, knowledge, experiences, or information.</p>
                        <Link href='/blogs' className="btn btn-sm bg-blue-800/90 text-white border-0">Read Blogs<IoIosArrowDropright className="text-lg" /></Link>
                    </div>
                    <div className="p-5 flex justify-end">
                        <div className="-end">
                            <h1 className="text-5xl font-serif">You can share your blogs.</h1>
                            {/* <p className="my-4 ">An online platform where people share their thoughts, knowledge, experiences, or information.</p> */}
                            <Link href='/dashboard/add-blogs' className="btn btn-sm my-4 bg-amber-800/90 text-white border-0">Add Blogs<IoIosArrowDropright className="text-lg" /></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;