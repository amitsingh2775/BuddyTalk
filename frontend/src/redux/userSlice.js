import {createSlice} from "@reduxjs/toolkit"

const userSlice=createSlice({
    name:"user",
    initialState:{
        authUser:null,
        otherUsers:null,
        selectedUser:null
    },
    reducers:{
        setAuthUser:(state,action)=>{
            state.authUser=action.payload
        },
        setOtherUser:(state,action)=>{
            state.otherUsers=action.payload
        },
        setselectedUser:(state,action)=>{
            state.selectedUser=action.payload
        }

    }
})
export const {setAuthUser,setOtherUser,setselectedUser}=userSlice.actions
export default userSlice.reducer