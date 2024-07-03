import React from 'react';
import Message from './message';
import usegetMessege from '../hooks/usegetMessege';
import { useSelector } from 'react-redux';

function Messages() {
    usegetMessege();
    const { messages } = useSelector(store => store.message);
    const { authUser } = useSelector(store => store.user);

    if (!messages || messages.length === 0) {
        return (
            <div className="px-4 flex-1 overflow-auto">
                <div className='flex flex-col justify-center items-center h-full'>
                    <h1 className='text-4xl text-blue-600 font-bold mb-4'>Hi, {authUser?.fullName}</h1>
                    <h1 className='text-2xl text-blue-600 mb-4'>No conversations to display</h1>
                    <img
                        src='https://img.freepik.com/free-vector/happy-people-communicating-via-social-network-mobile-screens-man-women-using-app-have-online-interview-with-employer-flat-vector-illustration-modern-technology-concept_74855-22490.jpg'
                        alt="No conversations"
                        className="w-52 h-auto" // Adjust width and maintain aspect ratio
                    />
                </div>
            </div>
        );
    }

    return (
        <div className="px-4 flex-1 overflow-auto">
            {messages.map((message) => (
                <Message key={message._id} message={message} />
            ))}
        </div>
    );
}

export default Messages;
