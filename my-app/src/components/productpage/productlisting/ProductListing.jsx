import React from "react";
import { Category, FilterHeader, Range, Rating, SortBy } from "../filter";
import { useData } from "../../../store/data/DataContext";
import { useFilter } from "../../../store/data/FilterContext";
import {Product} from "./Product.jsx"

function ProductListing() {
  const { data } = useData();
  const {filterState} =useFilter();
  const {sort,category}=filterState;
  console.log(filterState)

  const filterdData=()=>{
    let sortedProducts=[...data]
    
    if(sort){
     sortedProducts= sortedProducts.sort((a,b)=>sort === "HIGH_TO_LOW" ? Number(b.price) - Number(a.price) : Number(a.price) - Number(b.price))
    }
    if(category.length>0){
      sortedProducts=sortedProducts.filter((item)=>category.includes(item.categoryName))
    }
    return sortedProducts;
  }

  console.log(filterdData())
  

  return (
    <div>
      <div class="product-container">
        <div class="filter-container">
          <FilterHeader />
          <SortBy />
          <Category />
          <Range />
          <Rating />
        </div>
        <div class="product-items-container">
          <h1>
            Showing {filterdData().length} Products{"  "}
            
          </h1>
          <div class="product-items">
            {filterdData().map((item) => {
              return (
               <Product item={item}/>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductListing;
