import React from "react";
import Heading from "../components/Heading";
import SubHeading from "../components/SubHeading";
import InputBox from "../components/InputBox";
import Button from "../components/Button";
import BottomWarning from "../components/BottomWarning";
import { useState } from "react";

const Signup = () => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  return (
    <div className="bg-slate-300 h-screen flex justify-center">
      <div className="flex flex-col justify-center">
        <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
          <Heading label={"Sign up"} />
          <SubHeading label={"Enter your infromation to create an account"} />
          <InputBox
            onChange={(e) => setData({ ...data, firstName: e.target.value })}
            placeholder="John"
            label={"First Name"}
          />
          <InputBox
            onChange={(e) => setData({ ...data, lastName: e.target.value })}
            placeholder="Doe"
            label={"Last Name"}
          />
          <InputBox
            onChange={(e) => setData({ ...data, email: e.target.value })}
            placeholder="abc@xyz.com"
            label={"Email"}
          />
          <InputBox
            onChange={(e) => setData({ ...data, password: e.target.value })}
            placeholder="******"
            label={"Password"}
          />
          <div className="pt-4">
            <Button label={"Sign up"} />
          </div>
          <BottomWarning
            label={"Already have an account?"}
            buttonText={"Sign in"}
            to={"/signin"}
          />
        </div>
      </div>
    </div>
  );
};

export default Signup;
