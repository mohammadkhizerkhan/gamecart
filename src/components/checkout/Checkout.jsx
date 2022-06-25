import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAddress } from "../../services/AddressServices";
import { clearCart } from "../../services/CartServices";
import { ACTION_TYPE } from "../../store/Actions";
import { useData, useCart, useOrder, useAuth } from "../../store/data";
import Address from "../address/Address";
import AddressModal from "../AddressModal";

function Checkout() {
  const [modalOpen, setOpenModal] = useState(false);
  const navigate = useNavigate();
  const { cartState, cartDispatch } = useCart();
  const { orderState, orderDispatch } = useOrder();
  const {
    userData: { firstName, lastName, email, address },
    token,
    userDispatch,
  } = useAuth();
  const { city, country, mobile, _id, zipCode, state, name, street } =
    orderState?.orderAddress;
  const {
    totalOriginalPrice,
    totalDiscount,
    totalDeliveryCharge,
    totalAmount,
    totalSavedAmount,
  } = orderState.orderPriceDetails;

  const loadScript = async (url) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = url;

      script.onload = () => {
        resolve(true);
      };

      script.onerror = () => {
        resolve(false);
      };

      document.body.appendChild(script);
    });
  };
  const displayRazorpay = async () => {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      return;
    }

    const options = {
      key: "rzp_test_0Xb0W4aUK4t87X",
      amount: totalAmount * 100,
      currency: "INR",
      name: "gamecart",
      description: "Thank you for shopping with us",
      image:
        "https://res.cloudinary.com/dgwzpbj4k/image/upload/v1647589272/shoemall/logo1_utxkw6.png",
      handler: function (response) {
        const orderData = {
          orderedProducts: [...cartState.cart],
          amount: totalAmount,
          paymentId: response.razorpay_payment_id,
          delivery: orderState.orderAddress,
        };
        orderDispatch({ type: ACTION_TYPE.ORDER_COMPLETE, payload: orderData });
        {
          orderData?.paymentId && navigate("/ordersummary");
        }
        clearCart(token, cartState.cart, cartDispatch);
      },
      prefill: {
        name: `${firstName} ${lastName}`,
        email: email,
        contact: "12356899",
      },
      theme: {
        color: "#007bb5",
      },
    };
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  const orderPlace = () => {
    if (orderState?.orderPriceDetails) {
      displayRazorpay();
    }
  };

  useEffect(() => {
    getAddress(token, userDispatch);
  }, []);

  return (
    <div className="checkout-div">
      <h3>this is checkout page</h3>
      <div className="checkout-cont">
        <div className="address-cont">
          <h3 className="text-center">Select Address</h3>
          {address?.map((addressData) => {
            return (
              <div className="address-select-cont">
                <Address data={addressData} />
              </div>
            );
          })}
          <button
            class="btn cart-btn btn-s order-btn font-bold"
            onClick={() => setOpenModal(true)}
          >
            ADD NEW ADDRESS
          </button>
        </div>
        <div className="checkout-details">
          <div className="divider-line"></div>
          <h3 className="text-center">Checkout Items</h3>
          <div className="divider-line"></div>
          <div className="checkout-item-details">
            <header className="checkout-headers">
              <div className="font-bold">Item</div>
              <div className="font-bold">Quantity</div>
            </header>
            {cartState.cart.map((cart) => {
              return (
                <div className="checkout-list">
                  <div>{cart.title}</div>
                  <div>{cart.qty}</div>
                </div>
              );
            })}
          </div>
          <div className="divider-line"></div>
          <h3 className="text-center">Checkout Items</h3>
          <div className="divider-line"></div>
          <div className="checkout-price-details">
            <ul className="price-details-list">
              <li className="checkout-list">
                <div>Price({cartState.cart.length} items)</div>
                <div>&#8377;{totalOriginalPrice}</div>
              </li>
              <li className="checkout-list">
                <div>Discount</div>
                <div>-&#8377;{totalDiscount}</div>
              </li>
              <li className="checkout-list">
                <div>Delivery Charges</div>
                <div>&#8377;{totalDeliveryCharge}</div>
              </li>
              <li className="checkout-list">
                <div>Saved Amount</div>
                <div>&#8377;{totalSavedAmount}</div>
              </li>
              <li className="checkout-list">
                <h2>TOTAL AMOUNT</h2>
                <div>&#8377;{totalAmount}</div>
              </li>
            </ul>
          </div>
          <div className="divider-line"></div>
          <h3 className="text-center">Deliver To</h3>
          <div className="divider-line"></div>
          {orderState.orderAddress.city ? (
            <div className="checkout-address-details">
              <div className="address-select-cont">
                <p className="font-bold">{name}</p>
                <div className="address-details-cont text-left">
                  <p>
                    {street},&nbsp; {city},&nbsp; {state},&nbsp; {zipCode}
                  </p>
                  <p>{country}</p>
                  <p>Phone Number:{mobile}</p>
                </div>
              </div>
            </div>
          ) : (
            <div className="address-select-cont">
              <p className="font-bold">please select the address</p>
            </div>
          )}
          <div className="divider-line"></div>
          <button
            class="btn cart-btn btn-s order-btn font-bold"
            onClick={() => orderPlace()}
          >
            PLACE ORDER
          </button>
        </div>
      </div>
      {modalOpen && <AddressModal onClose={() => setOpenModal(false)} />}
    </div>
  );
}

export default Checkout;
