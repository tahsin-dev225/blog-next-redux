import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";


const UserRoute = ({role,children}) => {
    const isUser = useSelector(state => state?.userReducer?.userData)
    const router = useRouter()
    
    // console.log(isUser)
    // const user = useSelector(state => state?.userReducer?.isAdmin)
    
    if(isUser){
        return <div className="w-full">
            {children}
        </div>
    }
    return router.push('/login')

};

export default UserRoute;