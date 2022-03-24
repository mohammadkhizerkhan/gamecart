import React, { useState,useEffect } from "react";
import { useCart } from "../../store/data/CartContext";
import {useNavigate} from 'react-router-dom'
import { ACTION_TYPE } from "../../store/Actions";
import {useAuth} from "../../store/data/AuthContext"
import {updateCartHandler} from "../../services/CartServices"
import { calculateTotalSummary, calculateDiscount } from "../../services/PriceServices";


function Cart() {
  const navigate=useNavigate();
  const {cartState,cartDispatch}=useCart();
  const {token} =useAuth();

  // const [total,setTotal]=useState(0)
  // const [totalDeliveryCharge,setTotalDeliveryCharge]=useState(0)

  const [totalSummary,setTotalSummary]=useState({
    totalOriginalPrice:0,
    totalDiscount:0,
    totalDeliveryCharge:0,
    totalAmount:0,
    totalSavedAmount:0
  })

  const cartHandler=(item,type)=>{
    if(token){
      updateCartHandler(token,item,type,cartDispatch)
    }
  }
  

  // useEffect(() => {
  //   console.log(cartState.cart)
  //   setTotal(cartState.cart.reduce((acc,cur)=>acc+Number(cur.price)*Number(cur.qty),0))
  // }, [cartState.cart])


  useEffect(() => {
    const data=calculateTotalSummary(cartState.cart)
    setTotalSummary(data)
  }, [cartState.cart])
  


  return (
    <div>
      <div class="cart-container">
        <div class="cart-items-container">
          {cartState.cart.length>0?(
            cartState.cart.map((cartItem) => {
              const {_id,img,original_price,price,qty,title,deliveryCharge}=cartItem;
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
                        &#8377; {price} &nbsp; <span class="text-strike"> &#8377;({original_price})</span> &nbsp; <span>({Math.trunc(calculateDiscount(price,original_price))}%)</span>
                        </h4>
                        <h6 className="text-left">{deliveryCharge?"Not Eligible For Free Delivery":"Eligible For Free Delivery"}</h6>
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
              <h3>&#8377;{totalSummary.totalOriginalPrice}</h3>
            </div>
            <div class="discount charges-amt">
              <p>Discount</p>
              <h3>-&#8377;{totalSummary.totalDiscount}</h3>
            </div>
            <div class="Delivery charges-amt">
              <p>Delivery Charges</p>
              <h3>&#8377;{totalSummary.totalDeliveryCharge}</h3>
            </div>
          </div>
          <div class="divider-line"></div>
          <div class="total charges-amt">
            <h3>TOTAL AMOUNT</h3>
            <h2>&#8377;{totalSummary.totalAmount}</h2>
          </div>
          <div class="divider-line"></div>
          <p>You will save &#8377; {totalSummary.totalSavedAmount} on this order</p>
          <button class="btn cart-btn btn-s">PLACE ORDER</button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
