import React from "react";
import Navbar from "../../../containers/home/Navbar";
import { Category, FilterHeader, Range, Rating, SortBy } from "../filter";
import { accessories, controller, games,ps5_pink,xbox_series_x ,ps5,ps4,ps3, nintendo} from "../../../assets";
function ProductListing() {
  return (
    <div>

      <div class="product-container">
        <div class="filter-container">
          <FilterHeader />
          <SortBy />
          <Category />
          <Range />
          <Rating />
        </div>
        <div class="product-items-container">
          <h1>
            Showing All Products{"  "}
            <span>(showing 20 products)</span>
          </h1>
          <div class="product-items">
            <div class="card card-product">
              <div class="card-img-body card-product-body">
                <div class="card-product-img-cont">
                  <img src={ps3} alt="" class="card-img-bd img-responsive" />
                </div>
                <div class="card-body">
                  <header class="card-header">
                    <h3>Dragonwar Red Gear Gaming Mouse</h3>
                    <div class="price-container">
                      <h5>
                        RATING:   4/5 <span class="font-light">(200)</span>
                      </h5>
                    </div>
                    <div class="price-container">
                      <h3>
                        PRICE:   $25  {" "}
                        <span class="text-strike">$30</span>
                      </h3>
                    </div>
                  </header>
                </div>
              </div>
              <div class="card-btn-container">
                <button class="btn product-btn btn-s">Add To Wishlist</button>
                <button class="btn product-btn btn-s">Add To Cart</button>
              </div>
            </div>
            <div class="card card-product">
              <div class="card-img-body card-product-body">
                <div class="card-product-img-cont">
                  <img src={xbox_series_x} alt="" class="card-img-bd img-responsive" />
                </div>
                <div class="card-body">
                  <header class="card-header">
                    <h3>Dragonwar Red Gear Gaming Mouse</h3>
                    <div class="price-container">
                      <h5>
                        RATING:   4/5 <span class="font-light">(200)</span>
                      </h5>
                    </div>
                    <div class="price-container">
                      <h3>
                        PRICE:   $25  {" "}
                        <span class="text-strike">$30</span>
                      </h3>
                    </div>
                  </header>
                </div>
              </div>
              <div class="card-btn-container">
                <button class="btn product-btn btn-s">Add To Wishlist</button>
                <button class="btn product-btn btn-s">Add To Cart</button>
              </div>
            </div>
            <div class="card card-product">
              <div class="card-img-body card-product-body">
                <div class="card-product-img-cont">
                  <img src={ps5} alt="" class="card-img-bd img-responsive" />
                </div>
                <div class="card-body">
                  <header class="card-header">
                    <h3>Dragonwar Red Gear Gaming Mouse</h3>
                    <div class="price-container">
                      <h5>
                        RATING:   4/5 <span class="font-light">(200)</span>
                      </h5>
                    </div>
                    <div class="price-container">
                      <h3>
                        PRICE:   $25  {" "}
                        <span class="text-strike">$30</span>
                      </h3>
                    </div>
                  </header>
                </div>
              </div>
              <div class="card-btn-container">
                <button class="btn product-btn btn-s">Add To Wishlist</button>
                <button class="btn product-btn btn-s">Add To Cart</button>
              </div>
            </div>
            <div class="card card-product">
              <div class="card-img-body card-product-body">
                <div class="card-product-img-cont">
                  <img src={ps4} alt="" class="card-img-bd img-responsive" />
                </div>
                <div class="card-body">
                  <header class="card-header">
                    <h3>Dragonwar Red Gear Gaming Mouse</h3>
                    <div class="price-container">
                      <h5>
                        RATING:   4/5 <span class="font-light">(200)</span>
                      </h5>
                    </div>
                    <div class="price-container">
                      <h3>
                        PRICE:   $25  {" "}
                        <span class="text-strike">$30</span>
                      </h3>
                    </div>
                  </header>
                </div>
              </div>
              <div class="card-btn-container">
                <button class="btn product-btn btn-s">Add To Wishlist</button>
                <button class="btn product-btn btn-s">Add To Cart</button>
              </div>
            </div>
            <div class="card card-product">
              <div class="card-img-body card-product-body">
                <div class="card-product-img-cont">
                  <img src={ps5_pink} alt="" class="card-img-bd img-responsive" />
                </div>
                <div class="card-body">
                  <header class="card-header">
                    <h3>Dragonwar Red Gear Gaming Mouse</h3>
                    <div class="price-container">
                      <h5>
                        RATING:   4/5 <span class="font-light">(200)</span>
                      </h5>
                    </div>
                    <div class="price-container">
                      <h3>
                        PRICE:   $25  {" "}
                        <span class="text-strike">$30</span>
                      </h3>
                    </div>
                  </header>
                </div>
              </div>
              <div class="card-btn-container">
                <button class="btn product-btn btn-s">Add To Wishlist</button>
                <button class="btn product-btn btn-s">Add To Cart</button>
              </div>
            </div>
            <div class="card card-product">
              <div class="card-img-body card-product-body">
                <div class="card-product-img-cont">
                  <img src={nintendo} alt="" class="card-img-bd img-responsive" />
                </div>
                <div class="card-body">
                  <header class="card-header">
                    <h3>Dragonwar Red Gear Gaming Mouse</h3>
                    <div class="price-container">
                      <h5>
                        RATING:   4/5 <span class="font-light">(200)</span>
                      </h5>
                    </div>
                    <div class="price-container">
                      <h3>
                        PRICE:   $25  {" "}
                        <span class="text-strike">$30</span>
                      </h3>
                    </div>
                  </header>
                </div>
              </div>
              <div class="card-btn-container">
                <button class="btn product-btn btn-s">Add To Wishlist</button>
                <button class="btn product-btn btn-s">Add To Cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductListing;
