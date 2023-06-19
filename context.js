import {createContext, useState, useContext} from "react";



const context = createContext(null)
const contextProvider = ({children}) =>{
    const [address, setAddress] = useState("");
    value = {
        address,
        setAddress,
    }
    return <context.Provider value={value}>{children}</context.Provider>
}

export const useAddress =()=>{
    return useContext(contextProvider);
}

export default contextProvider;
