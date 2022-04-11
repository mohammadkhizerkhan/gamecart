import React from "react";
import { ACTION_TYPE } from "../../store/Actions";
import { useOrder } from "../../store/data";
function Address({ data }) {
  const { orderState, orderDispatch } = useOrder();
  const { city, country, mobile, _id, zipCode, state, name, street } = data;
  return (
    <div className="address-select-cont">
      <label htmlFor="" className="address-label-radio">
        <input
          type="radio"
          name="address"
          className="address-input"
          checked={orderState.orderAddress._id === _id}
          onChange={() =>
            orderDispatch({ type: ACTION_TYPE.ADDRESS_DETAILS, payload: data })
          }
        />
        <p className="font-bold">{name}</p>
      </label>
      <div className="address-details-cont text-left">
        <p>
          {street},&nbsp; {city},&nbsp; {state},&nbsp; {zipCode}
        </p>
        <p>{country}</p>
        <p>Phone Number:{mobile}</p>
      </div>
    </div>
  );
}

export default Address;
