import React, { useState } from 'react';
import googleIcon from '../assets/icon.jpeg';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setAuthUser } from '../redux/userSlice';

function Login() {
  const [user, setUser] = useState({
    username: "",
    password: ""
  });
  // hook for navigation
  const navigate = useNavigate();
  const dispatch=useDispatch()

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`http://localhost:8080/api/v1/user/login`, user, {
        headers: {
          'Content-Type': 'application/json'
        },
        withCredentials: true
      });


      navigate("/");
      //console.log(res);
      dispatch(setAuthUser(user))



    } catch (error) {
      toast.error(error.response.data.message);
      console.error(error);
    }
    setUser({
      username: "",
      password: "",
    });
  };

  return (
    <div className="flex flex-col md:flex-row">
      <div className="relative hidden md:flex md:w-1/2 bg-blue-600 justify-center items-center">
        <div className="mx-auto py-16 px-8 text-white">
          <h1 className="text-3xl font-bold mb-8">Welcome Back!</h1>
          <p className="mb-4 text-white">Login to access your account</p>
          <a href="#" className="font-semibold tracking-wide text-white underline underline-offset-4">
            Learn More
          </a>
        </div>
      </div>
      <div className="flex w-full md:w-1/2">
        <div className="flex flex-col justify-center items-center p-8 w-full">
          <h1 className="text-3xl font-bold mb-8">Login to Your Account</h1>
          <form onSubmit={onSubmitHandler} className="w-full max-w-md">
            <div className="mb-4">
              <input
                value={user.username}
                onChange={(e) => setUser({ ...user, username: e.target.value })}
                type="text"
                id="username"
                name="username"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-400"
                placeholder="Username"
              />
            </div>
            <div className="mb-4">
              <input
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
                type="password"
                id="password"
                name="password"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-400"
                placeholder="Password"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 rounded-md transition duration-300"
            >
              Login
            </button>
          </form>
          <p className="mt-4 text-center">
            Don't have an account?{' '}
            <a href="/register" className="font-semibold text-blue-700">
              Sign up here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
