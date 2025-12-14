import { useState } from "react";

export function useLocalStorage(key,initialValue){
    const[user,setUser] = useState(()=>{
        const person = localStorage.getItem(key);

        return person ? JSON.parse(person) : initialValue;
    });

    function setNewUser(data){
        setUser(data);
        localStorage.setItem(key,JSON.stringify(data))
    };

    return [user,setNewUser];
}