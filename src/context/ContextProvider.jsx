import React from 'react'
import UseContext from './UseContext'

const ContextProvider = ({ children }) => {
    const role = "user";
    const authenticated = true;
    return (
        <UseContext.Provider value={{ role, authenticated }}>
            {children}
        </UseContext.Provider>
    )
}

export default ContextProvider