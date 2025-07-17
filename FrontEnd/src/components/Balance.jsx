import React from "react";
import { useContext } from "react";
import { Context } from "./Context";

const Balance = () => {
  const{balance} = useContext(Context)

  return (
    // console.log("Balance component rendered", balance),
    <div className="flex">
      <div className="font-bold text-lg">Your balance</div>
      <div className="font-semibold ml-4 text-lg">Rs {balance}</div>
    </div>
  );
};

export default Balance;
