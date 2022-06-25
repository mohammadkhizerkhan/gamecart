import axios from "axios";
import { ACTION_TYPE } from "../store/Actions";

const addAddress = async (token, address, userDispatch) => {
  try {
    const res = await axios.post(
      "api/user/address",
      {
        address,
      },
      {
        headers: {
          authorization: token,
        },
      }
    );
    userDispatch({type:ACTION_TYPE.ADD_ADDRESS,payload:res.data.address})
  } catch (error) {
    console.error("error in address post", error);
  }
};

const getAddress=async(token,userDispatch)=>{
    try {
        const res = await axios.get("api/user/address", {
          headers: {
            authorization: token,
          },
        });
        console.log(res.data.address)
      } catch (error) {
        console.error("error in address get", error);
      }
}
const deleteAddress=async(token,_id,userDispatch)=>{
    try {
        const res = await axios.delete(`api/user/address/${_id}`, {
          headers: {
            authorization: token,
          },
        });
        console.log(res.data.address)
      } catch (error) {
        console.error("error in address delete", error);
      }
}


export { addAddress,getAddress,deleteAddress };
