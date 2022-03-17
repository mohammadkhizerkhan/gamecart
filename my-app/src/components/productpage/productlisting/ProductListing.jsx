import React from "react";
import { Category, FilterHeader, Range, Rating, SortBy } from "../filter";
import { useData } from "../../../context/data/DataContext";
import {Product} from "./Product.jsx"
function ProductListing() {
  const { data } = useData();
  console.log(data);

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
            Showing All Products{"  "}
            <span>(showing 20 products)</span>
          </h1>
          <div class="product-items">
            {data.map((item) => {
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
