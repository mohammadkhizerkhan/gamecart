import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { useAuth } from "./AuthContext";
const DataContext=createContext();


const DataProvider=({children})=>{
    const {token} =useAuth();
    const [products, setProducts] = useState([])
    const [addressData, setAddressData] = useState([])
    useEffect(() => {
        (async ()=>{
            try {
                const {data}=await axios.get("/api/products")
                setProducts(prev=>[...prev,...data.products])
            } catch (error) {
                console.log(error)
            }
        })();
    }, [])

    useEffect(() => {
        
            (async () => {
              try {
                const res = await axios.get("api/user/address", {
                  headers: {
                    authorization: token,
                },
                });
                setAddressData(prev=>[...prev,...res.data.address])
            } catch (error) {
                console.error("error in address get", error);
            }
        })();
        
}, []);

    

    return (
        <DataContext.Provider value={{data:products,addressData}}>
            {children}
        </DataContext.Provider>
    )
}

const useData=()=>useContext(DataContext);
export {useData,DataProvider}