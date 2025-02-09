import { configureStore } from "@reduxjs/toolkit";
import userReducer from './user/userSlice'
import blogReducer from './addBlog/addBlogSlice'

export const store = configureStore({
    reducer : {userReducer , blogReducer} 
})
