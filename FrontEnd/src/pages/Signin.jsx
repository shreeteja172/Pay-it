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
      console.log("Signin successful:", response.data);
      localStorage.setItem("token", response.data.token);
      navigate("/dashboard"); 
    } catch (error) {
      console.error("There was an error signing in:", error);
      alert("Signin failed. Please check your credentials.");
    }
  };

  return (
    <div className="bg-slate-300 h-screen flex justify-center">
      <div className="flex flex-col justify-center">
        <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
          <Heading label={"Sign in"} />
          <SubHeading label={"Enter your credentials to access your account"} />
          <InputBox
            onChange={(e) => setData({ ...data, email: e.target.value })}
            placeholder="harkirat@gmail.com"
            label={"Email"}
          />
          <InputBox
            onChange={(e) => setData({ ...data, password: e.target.value })}
            placeholder="123456"
            label={"Password"}
          />
          <div className="pt-4">
            <Button onClick={handleSignin} label={"Sign in"} />
          </div>
          <BottomWarning
            label={"Don't have an account?"}
            buttonText={"Sign up"}
            to={"/signup"}
          />
        </div>
      </div>
    </div>
  );
};

export default Signin;
