import UserContext from "./UserContext";
import { useState } from "react";

function UserContextProvider ({ children }) {
  const [user, setUser] = useState({
    data: {},
    login: false,
  });

  const updateState = (userInfo,loginOrlogout) => {
    
    let isLogin = (loginOrlogout === 'login') ? true : false;
    let userData = (userInfo === null) ? null : userInfo.userDto;
    
    setUser({
      data: userData,
      login: isLogin
    })

  }

  return (
    <UserContext.Provider value={{ user, updateState }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
