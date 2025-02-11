import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";


const UserRoute = ({role,children}) => {
    const isUser = useSelector(state => state?.userReducer?.userData)
    const loading = useSelector(state => state?.userReducer?.isLoading)
    const router = useRouter()
    
    console.log('user route is user',isUser)
    // const user = useSelector(state => state?.userReducer?.isAdmin)

    console.log('loadin', loading)

    if(loading === true){
        return <div className="w-full h-screen flex justify-center items-center">
            <h1 className="text-xl">Loading.....</h1>
        </div>
    }
    
    if(isUser){
        return <div className="w-full">
            {children}
        </div>
    }
    if(isUser === null || isUser === undefined){
        return router.push('/login')
    }
    

};

export default UserRoute;