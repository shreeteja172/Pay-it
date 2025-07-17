import axios from "axios";
import { useEffect, useState } from "react";
import React from "react";
import { Context } from "../lib/contextapi";

export const AppContextProvider = ({ children }) => {
  const [balance, setBalance] = useState(0);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  async function fetchData() {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        console.error("No token found in localStorage");
        return;
      }

      const response = await axios.get(`${import.meta.env.VITE_BACKEND_APP_URL}/api/v1/account/balance`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("Fetched", response.data);
      setBalance(Number(response.data.balance).toFixed(2) || 0);
    } catch (error) {
      console.error("Error fetching", error);
    }
  }

  async function fetchUserData() {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        console.error("No token found in localStorage");
        return;
      }
      const response = await axios.get(`${import.meta.env.VITE_BACKEND_APP_URL}/api/v1/user/profile`,{
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      console.log("Fetched user data:", response.data);
      setFirstName(response.data.user[0].firstName || "");
      setLastName(response.data.user[0].lastName || "");
    }
    catch (error) {
      console.error("Error fetching user data:", error);
    }
  }
  useEffect(() => {
    fetchData();
    fetchUserData();
  }, []);

  return (
    <Context.Provider value={{ balance, firstName, lastName }}>
      {children}
    </Context.Provider>
  );
};
