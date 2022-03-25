import React from "react";
import { useAuth } from "../../../store/data/AuthContext";
import { useNavigate } from "react-router-dom";
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
  console.log(wishlistState.wishlist)
  const {
    _id,
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
    } else {
      navigate("/login");
    }
  };

  // const removeCartHandler = () => {
  //   if (token) {
  //     // navigate("/carts")
  //     removeFromCart(token, item, cartDispatch);
  //   } else {
  //     navigate("/login");
  //   }
  //   console.log("removed");
  // };

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
        <div class="card-product-img-cont">
          <img src={img} alt="" class="card-img-bd img-responsive" />
        </div>
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
                <span>
                  ({Math.trunc(calculateDiscount(price, original_price))}%)
                </span>
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
