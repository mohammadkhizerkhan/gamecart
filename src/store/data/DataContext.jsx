import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const DataContext=createContext();


const DataProvider=({children})=>{
    const [products, setProducts] = useState([])
    
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

    return (
        <DataContext.Provider value={{data:products}}>
            {children}
        </DataContext.Provider>
    )
}

const useData=()=>useContext(DataContext);
export {useData,DataProvider}