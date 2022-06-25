import React from "react";
import { useState } from "react";
import { useAuth } from "../store/data";

function AddressModal({onClose}) {
    const {userData,userDispatch,token}=useAuth();
    const [address,setAddress]=useState({
        name:"",
        street:"",
        city:"",
        state:"",
        country:"",
        zipCode:"",
        mobile:""
    })
    const handleChange=(e)=>{
        setAddress(prev=>({...prev,[e.target.name]:e.target.value}))
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        // addAddress(token,address,userDispatch)
        onClose();
    }
  return (
    <aside className="modal-container">
      <div className="modal">
        <h2>Address Form</h2>
        <form class="form">
          <label htmlFor="" class="input-label">
            <input
              type="text"
              placeholder="Enter your name here"
              class="input"
              value={address.name}
              name="name"
              onChange={(e)=>handleChange(e)}
            />
          </label>
          <label htmlFor="" class="input-label">
            <input
              type="text"
              placeholder="Enter House, Street, Colony"
              class="input"
              value={address.street}
              name="street"
              onChange={(e)=>handleChange(e)}
            />
          </label>
          <label htmlFor="" class="input-label">
            <input
              type="text"
              placeholder="Enter City"
              class="input"
              value={address.city}
              name="city"
              onChange={(e)=>handleChange(e)}
            />
          </label>
          <label htmlFor="" class="input-label">
            <input
              type="text"
              placeholder="Enter State"
              class="input"
              value={address.state}
              name="state"
              onChange={(e)=>handleChange(e)}
            />
          </label>
          <label htmlFor="" class="input-label">
            <input
              type="text"
              placeholder="Enter Country"
              class="input"
              value={address.country}
              name="country"
              onChange={(e)=>handleChange(e)}
            />
          </label>
          <label htmlFor="" class="input-label">
            <input
              type="text"
              placeholder="Enter Zipcode"
              class="input"
              value={address.zipCode}
              name="zipCode"
              onChange={(e)=>handleChange(e)}
            />
          </label>
          <label htmlFor="" class="input-label">
            <input
              type="text"
              placeholder="Enter Mobile Number"
              class="input"
              value={address.mobile}
              name="mobile"
              onChange={(e)=>handleChange(e)}
            />
          </label>
        </form>
        <div className="btn-container">
          <button
            type="submit"
            className="btn cart-btn btn-s order-btn font-bold"
            onClick={(e)=>handleSubmit(e)}
          >
            ADD
          </button>
          <button
            type="button"
            className="btn cart-btn btn-s order-btn font-bold"
          >
            cancel
          </button>
        </div>
      </div>
    </aside>
  );
}

export default AddressModal;
