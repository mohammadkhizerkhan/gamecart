import React, { useState } from "react";
import { Category, FilterHeader, Range, Rating, SortBy } from "../filter";
import { useData } from "../../../store/data/DataContext";
import { useFilter } from "../../../store/data/FilterContext";
import {Product} from "./Product.jsx"
import { BsFilterLeft } from "react-icons/bs";
// import {filterToggleHandler} from "../../../services/utils"

function ProductListing() {
  const { data } = useData();
  const {filterState} =useFilter();
  const {sort,category,range,rating}=filterState;
  const [showFilter,setShowFilter]=useState(false)
  const filterdData=()=>{
    let sortedProducts=[...data]
    
    if(sort){
     sortedProducts= sortedProducts.sort((a,b)=>sort === "HIGH_TO_LOW" ? Number(b.price) - Number(a.price) : Number(a.price) - Number(b.price))
    }
    if(category.length>0){
      sortedProducts=sortedProducts.filter((item)=>category.includes(item.categoryName))
    }
    if(range){
      sortedProducts=sortedProducts.filter((item)=>Number(item.price)<=Number(range))
    }
    if(rating){
      sortedProducts=sortedProducts.filter((item)=>Number(item.rating)>Number(rating))
    }
    return sortedProducts;
  }

  const filterToggleHandler=()=>{
    setShowFilter(!showFilter)
  }
  
  return (
    <div>
      <div class="product-container">
        <button  onClick={()=>filterToggleHandler()} className="btn btn-icon hammerBtn">
        <BsFilterLeft />
        </button>
        <div class={`filter-container ${showFilter && "showMobileFilter"}`} >
          <FilterHeader />
          <SortBy />
          <Category />
          <Range />
          <Rating />
        </div>
        <div class="product-items-container">
        <div className={`modal-div ${showFilter && "drawer-modal-body"}`} onClick={()=>filterToggleHandler()}></div>
          <h1>
            Showing {filterdData().length} Products{"  "}
            
          </h1>
          <div class="product-items">
            {filterdData().map((item) => {
              return (
               <Product item={item} key={item._id}/>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductListing;
