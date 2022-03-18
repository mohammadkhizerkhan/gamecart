import axios from "axios";
import { createContext, useContext, useEffect, useReducer, useState } from "react";
import { ProductReducer } from "./reducer/Reducer";

const DataContext=createContext();


const DataProvider=({children})=>{
    const [products, setProducts] = useState([])
    const [state, dispatch] = useReducer(ProductReducer, {products:products})
    
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
    // console.log(products)
    return (
        <DataContext.Provider value={{data:products}}>
            {children}
        </DataContext.Provider>
    )
}

const useData=()=>useContext(DataContext);
export {useData,DataProvider}