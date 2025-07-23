import React, { useState } from "react";
import Heading from "../components/Heading";
import SubHeading from "../components/SubHeading";
import InputBox from "../components/InputBox";
import Button from "../components/Button";
import BottomWarning from "../components/BottomWarning";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { useContext } from "react";
import { Context } from "../lib/contextapi";



const Signin = () => {
  const [data, setData] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const { setAuthKey } = useContext(Context);

  const handleSignin = async () => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_APP_URL}/api/v1/user/signin`,
        data
      );
      localStorage.setItem("token", response.data.token);
      setAuthKey((prev) => prev + 1);
      toast.success("Signed in successfully!");
      navigate("/dashboard");
    } catch (error) {
      toast.error(
        `Sign in failed: ${
          error.response?.data?.message || "Please try again later."
        }`
      );
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-neutral-900 text-white rounded-2xl border border-neutral-800 shadow-md p-6 md:p-8 space-y-6">
        <div className="text-center space-y-1">
          <Heading label="Sign In" />
          <SubHeading label="Access your account using your credentials" />
        </div>

        <div className="space-y-4">
          <InputBox
            type="email"
            label="Email"
            placeholder="you@example.com"
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />
          <InputBox
            type="password"
            label="Password"
            placeholder="••••••••"
            onChange={(e) => setData({ ...data, password: e.target.value })}
          />
        </div>

        <Button
          label="Sign In"
          onClick={handleSignin}
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl transition"
        />

        <BottomWarning
          label="Don't have an account?"
          buttonText="Sign Up"
          to="/signup"
          className="text-sm text-gray-400 hover:text-indigo-400 text-center"
        />
      </div>
    </div>
  );
};

export default Signin;
