import { createContext, useState } from "react";

export const authContext = createContext();

export function AuthProvider({children}){

    const [user,setUser] = useState(null);

    function login(data){
        setUser(data)
    };
    function logout(){
        setUser(null)
    }

    const value = {
        user,
        isAuthenticated:!!user,
        login,
        logout,
    }
    return(
        <authContext.Provider value={value}>
        {children}
        </authContext.Provider>
    )
}