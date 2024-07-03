import React, { useState } from 'react'
import { IoMdSend } from "react-icons/io";
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import {setMessages} from '../redux/messageSilce'
import store from '../redux/store';

function SendInput() {
  const [message,setmessage]=useState("")
  const dispatch=useDispatch()
  const {selectedUser}=useSelector(store=>store.user)
  const {messages} =useSelector(store=>store.message)

   // send message
    const Onsubmit=async(e)=>{
    e.preventDefault()
    try {
       const res=await axios.post(`http://localhost:8080/api/v1/message/send/${selectedUser?._id}`,{message},{
        headers: {
          'Content-Type': 'application/json'
        },
        withCredentials: true
       })
      //  console.log(res);
      //  alert(res)
      dispatch(setMessages([...messages,res?.data?.newMessage]))
    } catch (error) {
      console.log(error);
    }

    setmessage("")

    }
  return (
    <form onSubmit={Onsubmit} className="flex items-center justify-between p-2">
      <input
        type="text"
        value={message}
        onChange={(e)=>setmessage(e.target.value)}
        placeholder="Write your message..."
        className="flex-1 mr-2 px-4 py-2 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500 text-black"
      />
      <button
        type="submit"
        className="px-4 py-2 text-sm font-medium text-white bg-gray-700 rounded-lg  focus:outline-none focus:ring focus:ring-blue-300"
      >
        <IoMdSend/>
      </button>
    </form>
  )
}

export default SendInput