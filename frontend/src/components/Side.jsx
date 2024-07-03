import React, { useState } from 'react'
import OtherUsers from './OtherUsers'
import axios from 'axios'
import toast from 'react-hot-toast'
import {useNavigate} from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'
import store from '../redux/store'
import {setOtherUser} from '../redux/userSlice'


function SideBar() {
  const [search,setSearch]=useState()
 // const{otherUsers}=useSelector(store=>store.user)
  const navigate=useNavigate()
 // const dispatch=useDispatch()
  const logout=async()=>{
     try {
       const res=await axios.get(`http://localhost:8080/api/v1/user/logout`)
       toast.success(res.data.message)
       navigate("/login")
     } catch (error) {
          toast.error(error.message)
     }
  }
// searching logic

//  const  searchHander=(e)=>{
   
//    e.preventDefault()
//    const cover_user=otherUsers?.find((user)=>user.fullName.toLowerCase().includes(search.toLowerCase()))
//    if(cover_user){
//     dispatch(setOtherUser([cover_user]));
// }else{
//     toast.error("User not found!");
// }
//  }
  return (
    <>
       {/* search bar */}
       <div className='border-r border-slate-500 p-4 flex flex-col'>
       <form className="max-w-md mx-auto">
  <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
  <div className="relative">
    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
      <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
      </svg>
    </div>
    <input 
      type="search" 
      value={search}
      onChange={(e)=>setSearch(e.target.value)}
      id="default-search" 
      className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
      placeholder="Search" 
      required 
    />
    <button 
      type="submit" 
      
      className="text-white absolute right-2.5 top-1/2 transform -translate-y-1/2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      Search
    </button>
  </div>
</form>

    <div className='divider px-3'></div>
    <OtherUsers/>
    <div>
    <button onClick={logout}
     class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded flex-1">
            Logout
          </button>
    </div>
    
    </div>
    </>
   
  )
}

export default SideBar