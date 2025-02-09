"use client"
import axios from "axios";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const PrivateRoute = ({role,children}) => {
    const isUser = useSelector(state => state?.userReducer?.userData)
    
    console.log(isUser)
    const user = useSelector(state => state?.userReducer?.isAdmin)
    console.log(user)
    const isMatched = role.includes(user?.role)
    

    if(isMatched === true){
        return <div className="w-full">
            {children}
        </div>
    }
    return <div className="w-full flex h-screen justify-center items-center">
        <h1 className="text-3xl">You are not valid.</h1>
    </div>

    
};

export default PrivateRoute;