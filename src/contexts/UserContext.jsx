/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import axios from "axios";
import { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user,setUser] = useState(null);

  const API_URL = "https://67b779ea2bddacfb270f1206.mockapi.io/api/sims-ppob/users"

  useEffect(()=> {
    const storedUserId = localStorage.getItem('user');
    if (storedUserId) {
      fetchUser(storedUserId);
    }
  }, []);

  const fetchUser = async (userId) => {
    try {
      const response = await axios.get(`${API_URL}/${userId}`);
      if (response.status === 200 ) {
        setUser(response.data)
      }
    } catch (error) {
      console.error("Failed to fetch user!", error)
    }
  };


  return (
    <UserContext.Provider value={{ user, setUser, fetchUser }}>
      {children}
    </UserContext.Provider>
  )
}