import { createContext, useContext, useState } from 'react';
const RoleContext = createContext();

export const UserProvider = ({ children }) => {
    const [userData, setUserData] = useState({ roleid: null });
  
    return (
      <RoleContext.Provider value={{ userData, setUserData }}>
        {children}
      </RoleContext.Provider>
    );
  };

export const useRoleData =()=>{
    return useContext(RoleContext);
}