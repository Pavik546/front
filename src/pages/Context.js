// UserContext.js
import React, { createContext, useState, useContext } from 'react';

const UserContext = createContext();

export function UserProvider({ children }) {
  const [data, setData] = useState([]);
  const [roleid, setRoleid] = useState(null);
  const [userid, setUserid] = useState(null)
  return (
    <UserContext.Provider value={{ data, setData , roleid, setRoleid ,userid,setUserid}}>
      {children}
    </UserContext.Provider>
  );
}

export function useUserData() {
  return useContext(UserContext);
}
