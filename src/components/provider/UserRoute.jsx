import { useSelector } from "react-redux";


const UserRoute = ({role,children}) => {
    const isUser = useSelector(state => state?.userReducer?.userData)
    
    console.log(isUser)
    const user = useSelector(state => state?.userReducer?.isAdmin)
    
    if(isUser){
        return <div className="w-full">
            {children}
        </div>
    }
    return <div className="w-full flex h-screen justify-center items-center">
        <h1 className="text-3xl">You are not valid.</h1>
    </div>

};

export default UserRoute;