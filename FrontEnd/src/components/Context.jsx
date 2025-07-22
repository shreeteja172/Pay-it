import axios from "axios";
import { useEffect, useState } from "react";
import React from "react";
import { Context } from "../lib/contextapi";

export const AppContextProvider = ({ children }) => {
  const [balance, setBalance] = useState(0);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState("");
  const [loading, setLoading] = useState(true);

  async function fetchData() {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        console.error("No token found in localStorage");
        return;
      }

      const response = await axios.get(
        `${import.meta.env.VITE_BACKEND_APP_URL}/api/v1/account/balance`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      // console.log("Fetched", response.data);
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
      const response = await axios.get(
        `${import.meta.env.VITE_BACKEND_APP_URL}/api/v1/user/profile`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      // console.log("Fetched user data:", response.data);
      setFirstName(response.data.user[0].firstName || "");
      setLastName(response.data.user[0].lastName || "");
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  }

  useEffect(() => {
    if (loading) {
      return; // Prevent multiple initializations
    }
    const initialize = async () => {
      await Promise.all([fetchData(), fetchUserData()]);
      setLoading(false);
    };
    initialize();
  }, [loading]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      console.error("No token found in localStorage");
      return;
    }
    // console.log("Making API call to fetch all users");
    axios
      .get(`${import.meta.env.VITE_BACKEND_APP_URL}/api/v1/user/bulk`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        // console.log("API Response:", response.data);
        const currentUserId = JSON.parse(atob(token.split(".")[1])).userId;
        const filteredUsers =
          response.data.user?.filter((user) => user._id !== currentUserId) ||
          [];
        // console.log("Users after filtering out current user:", filteredUsers);
        setUsers(filteredUsers);
      })
      .catch((error) => {
        console.error("API Error:", error);
        setUsers([]);
      });
  }, []);

  // useEffect(() => {
  //   fetchData();
  //   fetchUserData();
  // }, []);

  return (
    <Context.Provider
      value={{
        balance,
        firstName,
        lastName,
        users,
        filter,
        setFirstName,
        setLastName,
        setFilter,
      }}
    >
      {children}
    </Context.Provider>
  );
};
