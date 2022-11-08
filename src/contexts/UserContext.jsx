import React, {createContext, useContext, useState} from 'react';

import {
    setTranslations,
    setDefaultLanguage,
    setLanguage
} from 'react-switch-lang';

import en from "../language/en.json";
import me from "../language/me.json";

setTranslations({ en, me });
setDefaultLanguage('en');

const UserContext = createContext({});

const UserProvider = ({children}) => {
    const [userData, setUserData] = useState(null);
    const [refreshLanguage, setRefreshLanguage] = useState(0);

    const data = {
      userData: userData,
      setUserData: (data) => setUserData(data),
      setLanguage: (key) => {
          setLanguage(key)
            setRefreshLanguage(prevState => prevState + 1)
        }
    }

    return( <UserContext.Provider key={refreshLanguage} value={data}>
        {children}
    </UserContext.Provider>)
}

export const useUser = () => {
    return useContext(UserContext)
}

export default UserProvider;