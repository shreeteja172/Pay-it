import axios from "axios";
import { useEffect, useContext, useState, createContext } from "react";
import React from "react";

export const Context = createContext();

export const AppContextProvider = ({ children }) => {
  const [balance, setBalance] = useState(0);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  async function fetchUsers() {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        console.error("No token found in localStorage");
        return;
      }

      const response = await axios.get(
        "http://localhost:3000/api/v1/account/balance",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    //   console.log("Fetched users:", response.data);
      setBalance(Number(response.data.balance).toFixed(2) || 0);
      setFirstName(response.data.firstName || "");
      setLastName(response.data.lastName || "");
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <Context.Provider value={{ balance, firstName, lastName }}>
      {children}
    </Context.Provider>
  );
};
