import React from 'react'
import { useAuth } from "../../store/data/AuthContext";
import { useNavigate } from "react-router-dom";
function Logout() {
    const { login, token,setToken,user,setUser } = useAuth();
    const navigate=useNavigate();
    const logOutHandler=(e)=>{
        e.preventDefault();
        localStorage.removeItem("login");
    localStorage.removeItem("user");
    localStorage.removeItem("signup");
        setToken("");
        setUser()
        navigate("/")
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
