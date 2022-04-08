import React from "react";
import { MdLocalOffer } from 'react-icons/md';
import { useAuth } from "../../../store/data/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../../../store/data/CartContext";
import { useWishlist } from "../../../store/data/WishlistContext";
import { addToCart, removeFromCart } from "../../../services/CartServices";
import {
  addToWishlist,
  removeFromWishlist,
} from "../../../services/WishlistServices";
import { calculateDiscount } from "../../../services/PriceServices";

function Product({ item }) {
  const navigate = useNavigate();
  const { cartState, cartDispatch } = useCart();
  const { wishlistState, wishlistDispatch } = useWishlist();
  const { token } = useAuth();
  const {
    _id,
    id,
    title,
    img,
    price,
    original_price,
    isPopular,
    rating,
    categoryName,
  } = item;

  const addCartHandler = () => {
    if (token) {
      // navigate("/carts")
      addToCart(token, item, cartDispatch);
      console.log(token,"product")
    } else {
      navigate("/login");
    }
  };


  const addWishlistHandler = () => {
    if (token) {
      // navigate("/wishlist")
      addToWishlist(token, item, wishlistDispatch);
    } else {
      navigate("/login");
    }
  };

  const removeWishlistHandler = () => {
    if (token) {
      // navigate("/wishlist")
      removeFromWishlist(token, item, wishlistDispatch);
    } else {
      navigate("/login");
    }
  };

  return (
    <div class="card card-product">
      <div class="card-img-body card-product-body">
        <Link to={`/product/${id}`}>
        <div class="card-product-img-cont">
          <MdLocalOffer className="offer-icon"/>
          <span className="offer-percentage">
                  {Math.trunc(calculateDiscount(price, original_price))}%
          </span>
          <img src={img} alt="" class="card-img-bd img-responsive" />
        </div>
        </Link>
        <div class="card-body">
          <header class="card-header">
            <h4 className="text-center">{title}</h4>
            <div class="price-container">
              <h5>
                RATING: {rating} <span class="font-light">(200)</span>
              </h5>
            </div>
            <div class="price-container">
              <h3>
                PRICE: {price} &nbsp;
              </h3>
            </div>
          </header>
        </div>
      </div>
      <div class="card-btn-container">

        {wishlistState.wishlist.some(
          (wishlistItem) => wishlistItem._id === item._id
        ) ? (
          <button
            class="btn product-btn btn-s"
            onClick={() => removeWishlistHandler()}
          >
            Remove From Wishlist
          </button>
        ) : (
          <button
            class="btn product-btn btn-s"
            onClick={() => addWishlistHandler()}
          >
            Add To Wishlist
          </button>
        )}

        {cartState.cart.some((cartItem) => cartItem._id === item._id) ? (
          <button
            class="btn product-btn btn-s"
            onClick={() => navigate("/carts")}
          >
            Go To Cart
          </button>
        ) : (
          <button
            class="btn product-btn btn-s"
            onClick={() => addCartHandler()}
          >
            Add To Cart
          </button>
        )}
      </div>
    </div>
  );
}

export { Product };
