import React from 'react'
import { accessories, controller, games, ps5 } from "../../assets";
function Wishlist() {
    return (
        <div>
        <h1 class="text-center cart-heading">MY WISHLIST</h1>
        <div class="wishlist-container">
        <div class="card-wishlist">
        <div class="wishlist-img-cont">
                <img
                src={games}
                alt="" class="card-img img-responsive" />
        </div>
            <div class="card-body">
                <header class="card-header">
                    <h3>Dragonwar Red Gear Gaming Mouse</h3>
                    <h4>$20 &nbsp <span class="text-strike">$30</span></h4>
                </header>
            </div>
            <div class="card-footer">
            <button class="btn wishlist-btn btn-s">
                     Remove
                </button>
                <button class="btn wishlist-btn btn-s">
                    Move To Cart
                </button>
            </div>
        </div>
        <div class="card-wishlist">
        <div class="wishlist-img-cont">
                <img
                src={ps5}
                alt="" class="card-img img-responsive" />
        </div>
            <div class="card-body">
                <header class="card-header">
                    <h3>Dragonwar Red Gear Gaming Mouse</h3>
                    <h4>$20 &nbsp <span class="text-strike">$30</span></h4>
                </header>
            </div>
            <div class="card-footer">
                <button class="btn wishlist-btn btn-s">
                     Remove
                </button>
                <button class="btn wishlist-btn btn-s">
                    Move To Cart
                </button>
            </div>
        </div>
        <div class="card-wishlist">
        <div class="wishlist-img-cont">
                <img
                src={accessories}
                alt="" class="card-img img-responsive" />
        </div>
            <div class="card-body">
                <header class="card-header">
                    <h3>Dragonwar Red Gear Gaming Mouse</h3>
                    <h4>$20 &nbsp <span class="text-strike">$30</span></h4>
                </header>
            </div>
            <div class="card-footer">
            <button class="btn wishlist-btn btn-s">
                     Remove
                </button>
                <button class="btn wishlist-btn btn-s">
                    Move To Cart
                </button>
            </div>
        </div>
        <div class="card-wishlist">
        <div class="wishlist-img-cont">
                <img
                src={ps5}
                alt="" class="card-img img-responsive" />
        </div>
            <div class="card-body">
                <header class="card-header">
                    <h3>Dragonwar Red Gear Gaming Mouse</h3>
                    <h4>$20 &nbsp <span class="text-strike">$30</span></h4>
                </header>
            </div>
            <div class="card-footer">
            <button class="btn wishlist-btn btn-s">
                     Remove
                </button>
                <button class="btn wishlist-btn btn-s">
                    Move To Cart
                </button>
            </div>
        </div>
        <div class="card-wishlist">
        <div class="wishlist-img-cont">
                <img
                src={accessories}
                alt="" class="card-img img-responsive" />
        </div>
            <div class="card-body">
                <header class="card-header">
                    <h3>Dragonwar Red Gear Gaming Mouse</h3>
                    <h4>$20 &nbsp <span class="text-strike">$30</span></h4>
                </header>
            </div>
            <div class="card-footer">
            <button class="btn wishlist-btn btn-s">
                     Remove
                </button>
                <button class="btn wishlist-btn btn-s">
                    Move To Cart
                </button>
            </div>
        </div>
        <div class="card-wishlist">
        <div class="card-img-cont">
                <img
                src={controller}
                alt="" class="card-img img-responsive" />
        </div>
            <div class="card-body">
                <header class="card-header">
                    <h3>Dragonwar Red Gear Gaming Mouse</h3>
                    <h4>$20 &nbsp <span class="text-strike">$30</span></h4>
                </header>
            </div>
            <div class="card-footer">
            <button class="btn wishlist-btn btn-s">
                     Remove
                </button>
                <button class="btn wishlist-btn btn-s">
                    Move To Cart
                </button>
            </div>
        </div>
    </div>
        </div>
    )
}

export default Wishlist
