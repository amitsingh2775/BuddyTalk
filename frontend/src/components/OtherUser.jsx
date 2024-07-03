import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setselectedUser } from '../redux/userSlice'


function OtherUser({ user }) {
    const dispach = useDispatch()
    const { selectedUser } = useSelector(store => store.user)
    const selectedUserhandler = (user) => {
        dispach(setselectedUser(user))
    } 
    return (

        <>
            <div onClick={() => selectedUserhandler(user)} className={` ${selectedUser?._id === user?._id ? 'bg-green-500 text-white' : 'text-black'} flex gap-2 items-center rounded p-2 cursor-pointer`}>
                <div className='avatar online'>
                    <div className='w-12 rounded-full'>
                        <img src={user?.profilePhoto} alt='profile' />

                    </div>

                </div>
                <div className='flex flex-col flex-1'>
                    <div className=' flex justify-between gap-2'>
                        <p>{user?.fullName}</p>
                    </div>

                </div>


            </div>

        </>
    )
}

export default OtherUser