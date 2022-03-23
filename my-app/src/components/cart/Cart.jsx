import React, { useState,useEffect } from "react";
import { useCart } from "../../store/data/CartContext";
import {useNavigate} from 'react-router-dom'
import { ACTION_TYPE } from "../../store/Actions";
import {useAuth} from "../../store/data/AuthContext"
import {updateCartHandler} from "../../services/CartServices"


function Cart() {
  const navigate=useNavigate();
  const {cartState,cartDispatch}=useCart();
  const {token} =useAuth();
  const [total,setTotal]=useState(0)
  // console.log(cartState.cart)

  const cartHandler=(item,type)=>{
    if(token){
      updateCartHandler(token,item,type,cartDispatch)
    }
  }
  

  useEffect(() => {
    console.log(cartState.cart)
    setTotal(cartState.cart.reduce((acc,cur)=>acc+Number(cur.price)*Number(cur.qty),0))
  }, [cartState.cart])


  return (
    <div>
      <div class="cart-container">
        <div class="cart-items-container">
          {cartState.cart.length>0?(
            cartState.cart.map((cartItem) => {
              const {_id,img,original_price,price,qty,title}=cartItem;
              return (
                <div class="cart-item card">
                  <div class="card-cont"></div>
                  <div class="card-img-body cart-img-body">
                    <div class="card-img-cont cart-img-cont">
                      <img
                        src={img}
                        alt=""
                        class="card-img-bd img-responsive"
                      />
                    </div>
                    <div class="card-body cart-body">
                      <header class="card-header">
                        <h3>{title}</h3>
                        <h4>
                        &#8377; {price} &nbsp; <span class="text-strike">${original_price}</span>
                        </h4>
                      </header>
                      <div class="quantity-container">
                        <h4>Quantity:</h4>
                        <div class="quantity-input">
                          <button class="quantity-btn" onClick={()=>cartHandler(cartItem,ACTION_TYPE.DECR_QTY)} disabled={cartItem.qty>1?false:true}>-</button>
                          <span>{qty}</span>
                          <button class="quantity-btn" onClick={()=>cartHandler(cartItem,ACTION_TYPE.INCR_QTY)} disabled={cartItem.qty>=1?false:true}>+</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="card-btn-container">
                    <button class="btn cart-btn btn-s">Move To Wishlist</button>
                    <button class="btn product-btn btn-s" onClick={()=>cartDispatch({type:ACTION_TYPE.REMOVE_FROM_CART,payload:cartItem})}>Remove From Cart</button>
                  </div>
                </div>
              );
            })
          ):(
            <>
            <h1 >cart is empty</h1>
            <div class="card-btn-container">
                    <button class="btn cart-btn btn-s" onClick={()=>navigate("/products")}>Go To Products</button>
            </div>
            </>
          )}
        </div>
        <div class="price-details">
          <h3 class="text-left">PRICE DETAILS</h3>
          <div class="divider-line"></div>
          <div class="charges">
            <div class="price charges-amt">
              <p>Price(2 items)</p>
              <h3>&#8377;20</h3>
            </div>
            <div class="discount charges-amt">
              <p>Discount</p>
              <h3>-&#8377;5</h3>
            </div>
            <div class="Delivery charges-amt">
              <p>Delivery Charges</p>
              <h3>&#8377;10</h3>
            </div>
          </div>
          <div class="divider-line"></div>
          <div class="total charges-amt">
            <h3>TOTAL AMOUNT</h3>
            <h2>&#8377;{total}</h2>
          </div>
          <div class="divider-line"></div>
          <p>You will save $5 on this order</p>
          <button class="btn cart-btn btn-s">PLACE ORDER</button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
