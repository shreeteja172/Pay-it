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
  const [authKey, setAuthKey] = useState(0);

  const getToken = () => localStorage.getItem("token");

  const initialize = async () => {
    const token = getToken();
    if (!token) {
      console.error("No token found in localStorage");
      return;
    }

    try {
      const balanceRes = await axios.get(
        `${import.meta.env.VITE_BACKEND_APP_URL}/api/v1/account/balance`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setBalance(Number(balanceRes.data.balance).toFixed(2) || 0);

      const profileRes = await axios.get(
        `${import.meta.env.VITE_BACKEND_APP_URL}/api/v1/user/profile`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setFirstName(profileRes.data.user[0].firstName || "");
      setLastName(profileRes.data.user[0].lastName || "");

      const bulkRes = await axios.get(
        `${import.meta.env.VITE_BACKEND_APP_URL}/api/v1/user/bulk`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const currentUserId = JSON.parse(atob(token.split(".")[1])).userId;
      const filteredUsers =
        bulkRes.data.user?.filter((user) => user._id !== currentUserId) || [];
      setUsers(filteredUsers);
    } catch (err) {
      console.error("Initialization failed:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    initialize();
  }, [authKey]);

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
        loading,
        setLoading,
        setBalance,
        setUsers,
        authKey,
        setAuthKey,
      }}
    >
      {children}
    </Context.Provider>
  );
};
