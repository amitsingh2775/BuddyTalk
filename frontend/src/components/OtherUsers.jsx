import React from 'react'
import OtherUser from './OtherUser'
import GetOtherUsers from '../hooks/getOtherUsers'
import {useSelector} from 'react-redux'
import store from '../redux/store'


function OtherUsers() {
  // my custome hook used for renderding users
  GetOtherUsers()
  // get otherusers form store

  const {otherUsers} =useSelector(store=>store.user)
  if(!otherUsers) return // early return in react
  return (
    <div className='overflow-auto h-full flex-1'>
      {
        otherUsers?.map((user)=>{
          return(
            <OtherUser key={user._id} user={user}/>
          )
        })
      }
      
      
      
    </div>
  )
}

export default OtherUsers