import React, { useState } from 'react';
import googleIcon from '../assets/icon.jpeg';
import chatAppImage from '../assets/Chatting-pana.png';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const [user, setUser] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: ""
  });

  const navigate = useNavigate();

  const handleRadioChange = (e) => {
    setUser({ ...user, gender: e.target.value });
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    if (user.password !== user.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    try {
      const res = await axios.post(`http://localhost:8080/api/v1/user/register`, user, {
        headers: {
          'Content-Type': 'application/json'
        },
        withCredentials: true
      });
      
      if (res.data.success) {
        navigate("/login");
        toast.success(res.data.message);
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      toast.error("An error occurred during registration");
      console.error(error);
    }

    setUser({
      fullName: "",
      username: "",
      password: "",
      confirmPassword: "",
      gender: ""
    });
  };

  return (
    <div className="flex flex-col md:flex-row">
      <div className="relative hidden md:flex md:w-1/2 bg-blue-600 justify-center items-center">
        <div className="mx-auto py-16 px-8 text-white">
          <div className="flex justify-center md:justify-start">
            <a href="#" className="text-2xl font-bold text-white">
              ConvoSphere..
            </a>
          </div>
          <img className="mx-auto w-11/12 max-w-lg rounded-lg object-cover mt-4" src={chatAppImage} alt="Chat App" />
        </div>
      </div>
      <div className="flex w-full md:w-1/2">
        <div className="flex flex-col justify-center items-center p-8 w-full">
          <h1 className="text-3xl font-bold mb-8 text-center">Create your free account</h1>
          <form onSubmit={onSubmitHandler} className="w-full max-w-md">
            <div className="mb-4">
              <input
                onChange={(e) => setUser({ ...user, fullName: e.target.value })}
                value={user.fullName}
                type="text"
                id="fullName"
                name="fullName"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-400"
                placeholder="Full Name"
                required
              />
            </div>
            <div className="mb-4">
              <input
                onChange={(e) => setUser({ ...user, username: e.target.value })}
                value={user.username}
                type="text"
                id="username"
                name="username"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-400"
                placeholder="Username, email"
                required
              />
            </div>
            <div className="mb-4">
              <input
                onChange={(e) => setUser({ ...user, password: e.target.value })}
                value={user.password}
                type="password"
                id="password"
                name="password"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-400"
                placeholder="Password"
                required
              />
            </div>
            <div className="mb-4">
              <input
                onChange={(e) => setUser({ ...user, confirmPassword: e.target.value })}
                value={user.confirmPassword}
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-400"
                placeholder="Confirm Password"
                required
              />
            </div>
            <div className="mb-4 flex items-center">
              <input
                type="radio"
                id="male"
                name="gender"
                value="male"
                checked={user.gender === "male"}
                onChange={handleRadioChange}
                className="mr-2"
              />
              <label htmlFor="male" className="mr-4">Male</label>
              <input
                type="radio"
                id="female"
                name="gender"
                value="female"
                checked={user.gender === "female"}
                onChange={handleRadioChange}
                className="mr-2"
              />
              <label htmlFor="female">Female</label>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 rounded-md transition duration-300"
            >
              Sign Up
            </button>
          </form>
          <p className="mt-4 text-center">
            Already using ConvoSphere?{' '}
            <a href="/login" className="font-semibold text-blue-700">
              Login here
            </a>
          </p>
          <button className="mt-8 flex items-center justify-center rounded-md border px-4 py-1 outline-none ring-gray-400 ring-offset-2 transition hover:border-transparent hover:bg-black hover:text-white focus:ring-2">
            <img className="mr-2 h-5" src={googleIcon} alt="Google" /> Get started with Google
          </button>
        </div>
      </div>
    </div>
  );
}

export default Signup;
