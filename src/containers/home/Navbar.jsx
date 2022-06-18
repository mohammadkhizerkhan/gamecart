import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Logo } from "../../assets";
import { useAuth } from "../../store/data/AuthContext";
import { useCart } from "../../store/data/CartContext";
import { useWishlist } from "../../store/data/WishlistContext";
import { useFilter } from "../../store/data/FilterContext";

import "../../css/search.css";
import { ACTION_TYPE } from "../../store/Actions";
function Navbar() {
  const { filterDispatch } = useFilter();
  const navigate = useNavigate();
  const { token } = useAuth();
  const { cartState } = useCart();
  const { wishlistState } = useWishlist();
  const [search, setSearch] = useState("");

  const clickSearchHandler = (e) => {
    e.preventDefault();
  };

  const searchHandler = (e) => {
    navigate("/products");
    setSearch(e.target.value);
    if (search) {
      filterDispatch({ type: ACTION_TYPE.SEARCH, payload: search });
    }
  };

  return (
    <nav class="navbar-landing">
      <div class="logo-div">
        <Link to="/">
          <Logo />
        </Link>
      </div>
      <div className="search-cont">
        <div class="input-icons">
          <div class="icon-cont">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon"
              link="http://www.w3.org/1999/xlink"
              aria-hidden="true"
              role="img"
              class="iconify iconify--bi"
              width="25"
              height="25"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 16 16"
            >
              <path
                fill="#dfdfdf"
                d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0a5.5 5.5 0 0 1 11 0z"
              ></path>
            </svg>
          </div>
          <form action="" onSubmit={(e) => clickSearchHandler(e)}>
            <input
              type="text"
              class="input input-search"
              value={search}
              onChange={searchHandler}
            />
          </form>
        </div>
      </div>
      <ul class="nav-ul">
        <li>
          <Link to="/products" class="link">
          <i class="fas fa-home fa-icon"></i>
          </Link>
        </li>
        <li>
          <Link to="/wishlist" class="link">
            <div class="badge-container">
              <i class="fas fa-heart fa-icon"></i>
              <div class="badge badge-large badge-right">
                <span>{wishlistState.wishlist.length}</span>
              </div>
            </div>
          </Link>
        </li>
        <li>
          <Link to="/carts" class="link">
            <div class="badge-container">
              <i class="fas fa-shopping-cart fa-icon"></i>
              <div class="badge badge-large badge-right">
                <span>{cartState.cart.length}</span>
              </div>
            </div>
          </Link>
        </li>
        <li>
          <Link to={token?"/logout":"/login"} class="link">
            <i class="fas fa-user fa-icon"></i>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
