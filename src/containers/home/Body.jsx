import React from 'react'
import { Link } from 'react-router-dom'
import { ACTION_TYPE } from '../../store/Actions';
import {useFilter} from "../../store/data/FilterContext"
import { useNavigate } from "react-router-dom";
function Body() {
    const {filterDispatch}=useFilter();
    const navigate=useNavigate();
    const categoryHandler=(categoryName)=>{
        navigate("/products")
        filterDispatch({type:ACTION_TYPE.CATEGORY,payload:categoryName})
    }
    return (
        <div>
            <div className="container">
        <section className="main">
            <div className="introduction"> 
                <h3>Welcome to Gamecart!!</h3>
                <h1 className="doc-para">This is where the FUN BEGINS..</h1>
                <Link to="products" className="main-btn primary-btn">Get Started</Link>
            </div>
        </section>
        <h1 className="text-center">Products</h1>
        <section className="products">
            <div className="product games" onClick={()=>categoryHandler("games")}>
                <h1>Explore Games</h1>
            </div>
            <div className="product accessories" onClick={()=>categoryHandler("accessories")}>
                <h1>Accessories</h1>
            </div>
            <div className="product console" onClick={()=>categoryHandler("consoles")}>
                <h1>Consoles</h1>
            </div>
        </section>
    </div>
        </div>
    )
}

export default Body
