import React from "react";
import { accessories, controller, games, ps5, ps5_white,ps5_pink } from "../../assets";
function Cart() {
  return (
    <div>
      <div class="cart-container">
        <div class="cart-items-container">
          <div class="cart-item card">
            <div class="card-cont"></div>
            <div class="card-img-body">
              <div class="card-img-cont">
                <img
                  src={ps5_white}
                  alt=""
                  class="card-img-bd img-responsive"
                />
              </div>
              <div class="card-body">
                <header class="card-header">
                  <h3>Dragonwar Red Gear Gaming Mouse</h3>
                  <h4>
                    $25 &nbsp <span class="text-strike">$30</span>
                  </h4>
                </header>
                <div class="quantity-container">
                  <h4>Quantity:</h4>
                  <div class="quantity-input">
                    <button class="quantity-btn">-</button>
                    <span>8</span>
                    <button class="quantity-btn">+</button>
                  </div>
                </div>
              </div>
            </div>
            <div class="card-btn-container">
              <button class="btn cart-btn btn-s">Move To Wishlist</button>
              <button class="btn cart-btn btn-s">Remove From Cart</button>
            </div>
          </div>
          <div class="cart-item card">
            <div class="card-cont"></div>
            <div class="card-img-body">
              <div class="card-img-cont">
                <img
                  src={ps5_pink}
                  alt=""
                  class="card-img-bd img-responsive"
                />
              </div>
              <div class="card-body">
                <header class="card-header">
                  <h3>Dragonwar Red Gear Gaming Mouse</h3>
                  <h4>
                    $25 &nbsp <span class="text-strike">$30</span>
                  </h4>
                </header>
                <div class="quantity-container">
                  <h4>Quantity:</h4>
                  <div class="quantity-input">
                    <button class="quantity-btn">-</button>
                    <span>8</span>
                    <button class="quantity-btn">+</button>
                  </div>
                </div>
              </div>
            </div>
            <div class="card-btn-container">
              <button class="btn cart-btn btn-s">Move To Wishlist</button>
              <button class="btn cart-btn btn-s">Remove From Cart</button>
            </div>
          </div>
          <div class="cart-item card">
            <div class="card-cont"></div>
            <div class="card-img-body">
              <div class="card-img-cont">
                <img
                  src={ps5}
                  alt=""
                  class="card-img-bd img-responsive"
                />
              </div>
              <div class="card-body">
                <header class="card-header">
                  <h3>Dragonwar Red Gear Gaming Mouse</h3>
                  <h4>
                    $25 &nbsp <span class="text-strike">$30</span>
                  </h4>
                </header>
                <div class="quantity-container">
                  <h4>Quantity:</h4>
                  <div class="quantity-input">
                    <button class="quantity-btn">-</button>
                    <span>8</span>
                    <button class="quantity-btn">+</button>
                  </div>
                </div>
              </div>
            </div>
            <div class="card-btn-container">
              <button class="btn cart-btn btn-s">Move To Wishlist</button>
              <button class="btn cart-btn btn-s">Remove From Cart</button>
            </div>
          </div>
          <div class="cart-item card">
            <div class="card-cont"></div>
            <div class="card-img-body">
              <div class="card-img-cont">
                <img
                  src={controller}
                  alt=""
                  class="card-img-bd img-responsive"
                />
              </div>
              <div class="card-body">
                <header class="card-header">
                  <h3>Dragonwar Red Gear Gaming Mouse</h3>
                  <h4>
                    $25 &nbsp <span class="text-strike">$30</span>
                  </h4>
                </header>
                <div class="quantity-container">
                  <h4>Quantity:</h4>
                  <div class="quantity-input">
                    <button class="quantity-btn">-</button>
                    <span>8</span>
                    <button class="quantity-btn">+</button>
                  </div>
                </div>
              </div>
            </div>
            <div class="card-btn-container">
              <button class="btn cart-btn btn-s">Move To Wishlist</button>
              <button class="btn cart-btn btn-s">Remove From Cart</button>
            </div>
          </div>
        </div>
        <div class="price-details">
          <h3 class="text-left">PRICE DETAILS</h3>
          <div class="divider-line"></div>
          <div class="charges">
            <div class="price charges-amt">
              <p>Price(2 items)</p>
              <h3>$20</h3>
            </div>
            <div class="discount charges-amt">
              <p>Discount</p>
              <h3>-$5</h3>
            </div>
            <div class="Delivery charges-amt">
              <p>Delivery Charges</p>
              <h3>$10</h3>
            </div>
          </div>
          <div class="divider-line"></div>
          <div class="total charges-amt">
            <h3>TOTAL AMOUNT</h3>
            <h2>$25</h2>
          </div>
          <div class="divider-line"></div>
          <p>You will save $5 on this order</p>
          <button class="btn cart-btn btn-s">PLACE ORDER</button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
