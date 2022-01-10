import React, {createContext, useState} from 'react'

export default function Provider({children}) {
    const [isLogin, setIsLogin] = useState(false);
    return (
        <AppContext.Provider value={[isLogin, setIsLogin]}>
            {children}
        </AppContext.Provider>
    )
}

export const AppContext = createContext();
