import React from "react";
import {useAuth} from "../../../store/data/AuthContext"
import {useNavigate} from 'react-router-dom'
function Product({item}) {
  const navigate=useNavigate();
  const {token}=useAuth();
  const {
    id,
    title,
    img,
    price,
    original_price,
    isPopular,
    rating,
    categoryName,
  } = item;
  const addCartHandler=(token,item)=>{
    if(token){
      navigate("/carts")
    }
    else{
      navigate("/login")
    }
  }
  const addWishlistHandler=(token,item)=>{
    if(token){
      navigate("/wishlist")
    }
    else{
      navigate("/login")
    }
  }
  return (
    <div class="card card-product">
      <div class="card-img-body card-product-body">
        <div class="card-product-img-cont">
          <img src={img} alt="" class="card-img-bd img-responsive" />
        </div>
        <div class="card-body">
          <header class="card-header">
            <h3>{title}</h3>
            <div class="price-container">
              <h5>
                RATING: {rating} <span class="font-light">(200)</span>
              </h5>
            </div>
            <div class="price-container">
              <h3>
                PRICE: {price}
                <span class="text-strike">{original_price}</span>
              </h3>
            </div>
          </header>
        </div>
      </div>
      <div class="card-btn-container">
        <button class="btn product-btn btn-s" onClick={()=>addWishlistHandler(token,item)}>Add To Wishlist</button>
        <button class="btn product-btn btn-s" onClick={()=>addCartHandler(token,item)}>Add To Cart</button>
      </div>
    </div>
  );
}

export {Product};
