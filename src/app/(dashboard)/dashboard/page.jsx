"use client"

import PrivateRoute from "@/components/provider/PrivateRoute";

const page = () => {
    return (
        <PrivateRoute role={['admin']}>
            <div className="p-3">
                
            </div>
        </PrivateRoute>
    );
};

export default page;