import React from "react";
import Heading from "../components/Heading";
import SubHeading from "../components/SubHeading";
import InputBox from "../components/InputBox";
import Button from "../components/Button";
import BottomWarning from "../components/BottomWarning";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleSignin = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/v1/user/signin",
        data
      );
      localStorage.setItem("token", response.data.token);
      navigate("/dashboard"); 
    } catch (error) {
      console.error("There was an error signing in:", error);
      alert("Signin failed. Please check your credentials.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-blue-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white shadow-2xl rounded-2xl overflow-hidden relative">
        {/* Subtle animated background effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/20 to-blue-50/20 animate-pulse opacity-30"></div>
        
        <div className="relative z-10 p-8 space-y-6">
          <div className="text-center">
            <Heading label={<span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-blue-600">Sign In</span>} />
            <SubHeading label="Enter your credentials to access your account" />
          </div>
          
          <div className="space-y-5">
            <InputBox
              onChange={(e) => setData({ ...data, email: e.target.value })}
              placeholder="harkirat@gmail.com"
              label="Email"
              type="email"
              className="w-full px-4 py-3 bg-gray-50/50 border border-gray-200 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition-all duration-200 placeholder-gray-400"
            />
            <InputBox
              onChange={(e) => setData({ ...data, password: e.target.value })}
              placeholder="••••••••"
              label="Password"
              type="password"
              className="w-full px-4 py-3 bg-gray-50/50 border border-gray-200 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition-all duration-200 placeholder-gray-400"
            />
          </div>

          <div className="pt-2">
            <Button
              onClick={handleSignin}
              label={
                <span className="flex items-center justify-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 16l-4-4m0 0l4-4m-4 4h14"></path>
                  </svg>
                  Sign In
                </span>
              }
              className="w-full px-4 py-3 bg-gradient-to-r from-indigo-600 to-blue-600 text-white font-semibold rounded-xl shadow-lg hover:from-indigo-700 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-all duration-300 ease-in-out transform hover:-translate-y-0.5"
            />
          </div>

          <BottomWarning
            label="Don't have an account?"
            buttonText="Sign Up"
            to="/signup"
            className="text-gray-600 hover:text-indigo-600 transition-colors duration-200"
          />
        </div>
      </div>
    </div>
  );
};

export default Signin;