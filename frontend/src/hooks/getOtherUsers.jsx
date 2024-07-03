import React, { useEffect } from 'react'
import axios from 'axios'
import {useDispatch} from 'react-redux'
import {setOtherUser} from '../redux/userSlice'

function GetOtherUsers() {
  const dishpach=useDispatch()
    useEffect(()=>{
     
        const fetchOtherUsers=async()=>{
          try {
            axios.defaults.withCredentials=true
             const res=await axios.get(`http://localhost:8080/api/v1/user/search`)
            // store data on redux reducer
             dishpach(setOtherUser(res.data))
          } catch (error) {
            console.log(error);
          }
        }
        // jaise hi user home page per rendre ho sara user show ho jaye 
        // isliye yaha hamne fun call kiya hai
        fetchOtherUsers()
    },[])

}

export default GetOtherUsers