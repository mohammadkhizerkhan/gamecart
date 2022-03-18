import React from "react";

function Product({item}) {
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
        <button class="btn product-btn btn-s">Add To Wishlist</button>
        <button class="btn product-btn btn-s">Add To Cart</button>
      </div>
    </div>
  );
}

export {Product};
