import axios from "axios";
const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

export const addBlogs = createAsyncThunk("addBlogs", async(newBlogs,{rejectWithValue})=>{
    try {
        const resp = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/pendingBlogs`, newBlogs ,{withCredentials : true});
        // console.log(resp)
        return resp?.data
    } catch (error) {
        console.log('err main ', error);
        return rejectWithValue(error.response?.data || error.message);
    }
})

export const deleteBlogs = createAsyncThunk("deleteBlogs", async(deleteId,{rejectWithValue})=>{
    try {
        const resp = await axios.delete(`${process.env.NEXT_PUBLIC_BASE_URL}/pendingBlogs/${deleteId}`,{withCredentials : true});
        // console.log(resp)
        return resp?.data
    } catch (error) {
        console.log('err main ', error);
        return rejectWithValue(error.response?.data || error.message);
    }
})

export const approvedPendeigBlog = createAsyncThunk("approvedPendeigBlog", async(blog,{rejectWithValue})=>{
    
    try {
        const resp = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/approvedgBlogs`,blog ,{withCredentials : true});
        // console.log('mainn',resp)
        return resp?.data
    } catch (error) {
        console.log('err main ', error);
        return rejectWithValue(error.response?.data || error.message);
    }
})

const blogSlice = createSlice({
    name : 'blogs',
    initialState : {
        isLoading : false,
        data : null,
    },
    reducers : {},
    extraReducers : (builder)=>{
        builder.addCase(addBlogs.pending , (state , action )=>{
            state.isLoading = true
        });
        builder.addCase(addBlogs.fulfilled, (state,action)=>{
            // console.log('action', action.payload);
            state.isLoading = false;
            state.data = action.payload;
        });
        
        builder.addCase(addBlogs.rejected , (state , action)=>{
            state.isLoading = false
            console.log("eroor", action.payload);
        })
        

        builder.addCase(deleteBlogs.pending , (state , action )=>{
            state.isLoading = true
        });builder.addCase(deleteBlogs.fulfilled, (state,action)=>{
            // console.log('action', action.payload);
            state.isLoading = false;
        });
        
        builder.addCase(deleteBlogs.rejected , (state , action)=>{
            state.isLoading = false
            console.log("eroor", action.payload);
        })
        

        builder.addCase(approvedPendeigBlog.pending , (state , action )=>{
            state.isLoading = true
        });builder.addCase(approvedPendeigBlog.fulfilled, (state,action)=>{
            // console.log('action', action.payload);
            state.isLoading = false;
        });
        
        builder.addCase(approvedPendeigBlog.rejected , (state , action)=>{
            state.isLoading = false
            console.log("eroor", action.payload);
        })
    }
})

export default blogSlice.reducer;