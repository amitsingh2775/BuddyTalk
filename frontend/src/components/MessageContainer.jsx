import React, { useEffect } from 'react'
import SendInput from './sendInput'
import Messages from './Messages'
import { useSelector ,useDispatch} from 'react-redux'
import {setselectedUser} from '../redux/userSlice'
function MessageContainer() {

  const {selectedUser,authUser}=useSelector(store=>store.user)
  const dispatch=useDispatch()
  useEffect(()=>{
    return () => dispatch(setselectedUser(null))
  },[])
  return (
  <>
  {
    selectedUser!==null?(
      <div className=' md:min-w-[550px] flex flex-col'>
        <div className='flex gap-2 items-center rounded px-4 py-2 mb-2 cursor-pointer bg-blue-600'>
          <div className='avatar online'>
            <div className='w-12 rounded-full'>
              <img src={selectedUser?.profilePhoto}></img>

            </div>

          </div>
          <div className='flex flex-col flex-1'>
            <div className=' flex justify-between gap-2'>
              <p className='text-white'>{selectedUser?.fullName}</p>
            </div>

          </div>


        </div>
        <Messages/>
        <SendInput/>

      </div>
    )
    :
    (
       <div className='md:min-w-[550px] flex flex-col justify-center items-center'>
                        <h1 className='text-4xl text-blue-600 font-bold'>Hi,{authUser?.fullName} </h1>
                        <h1 className='text-2xl text-blue-600'>Let's start conversation</h1>

                    </div>
                
    )
  }
  
  </>
      
    
  )
}

export default MessageContainer