
const { default: axiosInstance } = require("@/Helper/helper")
const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit")
const { default: axios } = require("axios")
const { cookies } = require("next/dist/client/components/headers")

const initialState={// delearing the initual state to be false
    status:"idle",
    isLogin:false,
    redirectTo:null
}

export const login = createAsyncThunk(
    'login',
    async (formdata) => {
      const response = await axiosInstance.post(`user/signin`,formdata)
      return response.data
    }
  )

  export const register  = createAsyncThunk(
    'registration',
    async (formdata) => {
      const response = await axiosInstance.post(`user/signup`,formdata)
      return response.data
    }
  )
  export const Authslice=createSlice({
    name:'Authentication',
    initialState,
    reducers:{
      
    },
    extraReducers:(builder)=>{
      builder
      .addCase(login.pending,(state,action)=>{
        state.status="loading"
      })
      .addCase(login.fulfilled,(state,action)=>{
        state.status="success"
        if(action.payload === 200){
          cookies().set('token',action.payload.token)
          state.isLogin=true
        }

      })
      .addCase(login.rejected,(state,action)=>{
        state.status="rejected"
      })

      .addCase(register.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(register.fulfilled, (state, { payload }) => {
        state.status = "idle";
        if (payload?.status === 200) {
          // toast(payload?.message)
        state.redirectTo = "/Login";
        // localStorage.setItem("name", payload?.data?.first_name);
        cookies().set('name',payload?.data?.first_name)
        }else{
          if(payload?.status==201){
              // toast(payload?.message)
             }
         }
      })
      .addCase(register.rejected, (state, action) => {
        state.status = "rejected";
      })
    }
    
  })
  export const {}=Authslice.actions