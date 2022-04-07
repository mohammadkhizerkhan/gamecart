import React,{useEffect} from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useData } from "../../store/data/DataContext";
import { MdLocalOffer } from "react-icons/md";
import { useAuth } from "../../store/data/AuthContext";
import { useCart } from "../../store/data/CartContext";
import { useWishlist } from "../../store/data/WishlistContext";
import { addToCart, removeFromCart } from "../../services/CartServices";
import {
  addToWishlist,
  removeFromWishlist,
} from "../../services/WishlistServices";
import { calculateDiscount } from "../../services/PriceServices";
import axios from "axios";

function SingleProduct() {
  const { data } = useData();
  const navigate = useNavigate();
  const { cartState, cartDispatch } = useCart();
  const { wishlistState, wishlistDispatch } = useWishlist();
  const { token } = useAuth();
  const { productId } = useParams();

  //   const { title, img, price, original_price, rating, desc } = product;

  useEffect(() => {
      (async ()=>{
          try {
              const {data}=await axios.get(`/api/products/:${productId}`)
              console.log(data)
          } catch (error) {
              console.log("single page eroor",error)
          }
      })();
    //   if(data.length){
    //       console.log(data);
    //       const product = data.find((item) => item.id === productId);
    //       console.log(product.id);
    //   }
  }, [data]);

  const addCartHandler = () => {
    if (token) {
      // navigate("/carts")
      addToCart(token, item, cartDispatch);
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
    <div className="single-product-cont">
      {/* <div class="card card-product">
        <div class="card-img-body card-product-body">
          <div class="card-product-img-cont">
            <MdLocalOffer className="offer-icon" />
            <span className="offer-percentage">
              {Math.trunc(calculateDiscount(price, original_price))}%
            </span>
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
                <h3>PRICE: {price} &nbsp;</h3>
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
      </div> */}
    </div>
  );
}

export default SingleProduct;
