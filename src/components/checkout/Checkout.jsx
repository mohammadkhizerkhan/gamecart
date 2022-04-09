import axios from "axios";
import React, { useEffect,useState } from "react";
import { useAuth } from "../../store/data/AuthContext";
import Address from "../address/Address";

function Checkout() {
  const { token } = useAuth();
  const [addressData, setAddressData] = useState([])
    useEffect(() => {
      (async () => {
        try {
          const res = await axios.get("api/user/address", {
            headers: {
              authorization: token,
            },
          });
          setAddressData(prev=>[...prev,...res.data.address])
        } catch (error) {
            console.error("error in address get", error);
        }
    })();
}, []);

console.log(addressData.map(item=>item))

  return (
    <div className="checkout-div">
        <h3>this is checkout page</h3>
      <div className="checkout-cont">
        <div className="address-cont">
            <h3 className="text-center">Select Address</h3>
            {
                addressData.map((addressData)=>{
                    return <Address data={addressData}/>
                })
            }
        </div>
        <div className="checkout-details">
            <h3 className="text-center">Checkout</h3>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
