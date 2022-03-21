import { createContext, useContext, useState } from "react";
import {loginService} from '../../services/AuthServices'

const AuthContext=createContext();

const AuthProvider=({children})=>{
    const localToken=JSON.parse(localStorage.getItem("login"))
    const localUser=JSON.parse(localStorage.getItem("user"))
    const [token,setToken]=useState(localToken?.token)
    const [user,setUser]=useState(localUser?.user)

    const login=async (email,password)=>{
        if(email && password !== ""){
            try {
                const {status,data:{encodedToken,foundUser}}=await loginService(email,password);
                if(status===200){
                    localStorage.setItem("login",JSON.stringify({token:encodedToken}))
                    localStorage.setItem("user",JSON.stringify({token:foundUser}))
                    setToken(encodedToken)
                    setUser(foundUser)
                }
            } catch (error) {
                console.log("error in login",error)
            }
        }
    }
    return(
        <AuthContext.Provider value={{token,login}}>
            {children}
        </AuthContext.Provider>
    )
}

const useAuth=()=>useContext(AuthContext)

export {useAuth,AuthProvider}