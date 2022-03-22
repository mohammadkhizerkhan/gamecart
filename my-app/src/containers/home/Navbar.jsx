import React from "react";
import { Link } from "react-router-dom";
import {Logo} from "../../assets"
import {useAuth} from '../../store/data/AuthContext'

function Navbar() {
  const {token}=useAuth();
  return (
    
      <nav class="navbar-landing">
        <a href="/index.html">
          <div class="logo-div">
            <Link to="/">
            <Logo/>
            </Link>
          </div>
        </a>
        <ul class="nav-ul">
          <li>
            <Link
              to={token?"wishlist":"login"}
              class="link"
            >
              <div class="badge-container">
                <i class="fas fa-heart fa-icon"></i>
                <div class="badge badge-large badge-right">
                  <span>0</span>
                </div>
              </div>
            </Link>
          </li>
          <li>
            <Link to={token?"carts":"login"} class="link" >
              <div class="badge-container">
                <i class="fas fa-shopping-cart fa-icon"></i>
                <div class="badge badge-large badge-right">
                  <span>0</span>
                </div>
              </div>
            </Link>
          </li>
          <li>
            <Link to={token?"logout":"signup"} class="link" target="_blank">
              <i class="fas fa-user fa-icon"></i>
            </Link>
          </li>
        </ul>
      </nav>
    
  );
}

export default Navbar;
