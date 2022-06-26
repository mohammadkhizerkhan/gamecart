import React, { useEffect } from "react";
import { useAuth } from "../../store/data/AuthContext";
import { useNavigate } from "react-router-dom";
import Address from "../address/Address";
import AddressModal from "../AddressModal";
import { useState } from "react";
import { deleteAddress } from "../../services/AddressServices";
function Logout() {
  const { login, token, setToken, user, userData, setUser, userDispatch } =
    useAuth();
  const [address, setAddress] = useState([]);
  const [isEdit,setIsEdit]=useState(false)
  const [modalOpen, setOpenModal] = useState(false);
  const navigate = useNavigate();
  const logOutHandler = () => {
    localStorage.removeItem("login");
    localStorage.removeItem("user");
    localStorage.removeItem("signup");
    setToken("");
    setUser({});
    navigate("/");
  };
  useEffect(() => {
    setAddress((prev) => [...userData.address]);
  }, [userData]);
  // console.log(address)

  return (
    <div className="profile">
      <div className="form-container profile-container">
        <div className="user-container">
          <div className="profile-logo-div">
            <i class="far fa-user fa-icon"></i>
          </div>
          <div className="user-details">
            <h2 className="text-underline">profile Details</h2>
            <p>
              <span className="font-bold">Name:</span>
              {userData?.firstName}&nbsp;{userData?.lastName}
            </p>
            <p>
              <span className="font-bold">Email:</span>
              {userData?.email}
            </p>
          </div>
        </div>
        <button
          type="button"
          href=""
          onClick={() => logOutHandler()}
          class="btn cart-btn btn-s order-btn font-bold"
        >
          Log-out
        </button>
      </div>
      <div className="form-container profile-container">
        <div className="user-container">
          <div className="user-details">
            <h1 className="text-underline">Address:</h1>
            {console.log(address)}
            {address ? (
              address.map((addressData) => {
                const {
                  street,
                  city,
                  state,
                  zipCode,
                  country,
                  mobile,
                  name,
                  _id,
                } = addressData;
                return (
                  <>
                    <div className="address-details-cont text-left flex-row">
                      <div>
                        <h3>{name}</h3>
                        <p>
                          {street},&nbsp; {city},&nbsp; {state},&nbsp; {zipCode}
                        </p>
                        <p>{country}</p>
                        <p>Phone Number:{mobile}</p>
                      </div>
                      <button
                        className="btn btn-icon"
                        onClick={() =>
                          deleteAddress(token, _id, userDispatch)
                        }
                      >
                        <i class="far fa-trash-alt fa-delete-color"></i>
                      </button>
                      <button
                        className="btn btn-icon"
                        onClick={() =>
                          deleteAddress(token, _id, userDispatch)
                        }
                      >
                        <i class="far fa-edit fa-icon"></i>
                      </button>
                    </div>
                    <div className="divider-line"></div>
                  </>
                );
              })
            ) : (
              <h3>Please add the address</h3>
            )}
            <button
              class="btn cart-btn btn-s order-btn font-bold"
              onClick={() => setOpenModal(true)}
            >
              ADD NEW ADDRESS
            </button>
          </div>
        </div>
      </div>
      {modalOpen && <AddressModal onClose={() => setOpenModal(false)} />}
    </div>
  );
}

export default Logout;
