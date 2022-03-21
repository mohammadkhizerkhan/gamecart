import React from 'react'
import { useAuth } from "../../store/data/AuthContext";
import { useNavigate } from "react-router-dom";
function Logout() {
    const { login, token,setToken,user,setUser } = useAuth();
    const logOutHandler=(e)=>{
        e.preventDefault();
        setToken("");
        setUser()
    }
    return (
        <div>
            <div class="form-container">
          <form class="form">
            <label htmlFor="" class="input-label text-center">
              <button
                type="submit"
                href=""
                onClick={(e) => logOutHandler(e)}
                class="btn-link formBtn"
              >
                Log-out
              </button>
            </label>
          </form>
        </div>
        </div>
    )
}

export default Logout
