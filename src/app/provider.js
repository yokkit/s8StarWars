import React, {createContext, useState} from 'react'

export default function Provider({children}) {
    const [items, setItems] = useState([]);
    return (
        <AppContext.Provider value={[items, setItems]}>
            {children}
        </AppContext.Provider>
    )
}

export const AppContext = createContext();
