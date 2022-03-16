import React from "react";
import { Link } from "react-router-dom";
import {Logo} from "../../assets"

function Navbar() {
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
              to="wishlist"
              class="link"
              target="_blank"
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
            <Link to="carts" class="link" target="_blank">
              <div class="badge-container">
                <i class="fas fa-shopping-cart fa-icon"></i>
                <div class="badge badge-large badge-right">
                  <span>0</span>
                </div>
              </div>
            </Link>
          </li>
          <li>
            <a href="/components/auth/login.html" class="link" target="_blank">
              <i class="fas fa-user fa-icon"></i>
            </a>
          </li>
        </ul>
      </nav>
    
  );
}

export default Navbar;
