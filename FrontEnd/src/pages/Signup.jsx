import React, { useState } from "react";
import Heading from "../components/Heading";
import SubHeading from "../components/SubHeading";
import InputBox from "../components/InputBox";
import Button from "../components/Button";
import BottomWarning from "../components/BottomWarning";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const Signup = () => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const [loading, setLoading] = useState(false); 

  const handleSignup = async () => {
    setLoading(true);
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_APP_URL}/api/v1/user/signup`,
        data
      );
      localStorage.setItem("token", response.data.token);
      toast.success("Signup successful! Redirected to dashboard...");
      navigate("/dashboard");
    } catch (error) {
      // console.error("Signup error:", error);
      toast.error(`Signup failed: ${error.response?.data?.message || "Please try again later."}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-neutral-950 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-neutral-900 text-white rounded-2xl border border-neutral-800 shadow-lg p-8">

        <div className="text-center mb-8">
          <Heading
            label={
              <span className="text-3xl font-bold text-white">
                Create your account
              </span>
            }
          />
          <SubHeading label="Start your journey with us today" />
        </div>

        <div className="space-y-5">
          <InputBox
            label="First Name"
            placeholder="John"
            type="text"
            onChange={(e) => setData({ ...data, firstName: e.target.value })}
          />
          <InputBox
            label="Last Name"
            placeholder="Doe"
            type="text"
            onChange={(e) => setData({ ...data, lastName: e.target.value })}
          />
          <InputBox
            label="Email"
            placeholder="you@example.com"
            type="email"
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />
          <InputBox
            label="Password"
            placeholder="••••••••"
            type="password"
            onChange={(e) => setData({ ...data, password: e.target.value })}
          />
        </div>

        <div className="mt-6">
          <Button
            onClick={handleSignup}
            label={loading ? "Signing up..." : "Sign Up"}
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl font-medium transition-colors"
            disabled={loading}
          />
        </div>

        <div className="mt-4">
          <BottomWarning
            label="Already have an account?"
            buttonText="Sign In"
            to="/signin"
            className="text-sm text-gray-400 hover:text-indigo-400 text-center"
          />
        </div>
      </div>
    </div>
  );
};

export default Signup;
