import React from 'react'

function Rating() {
    return (
        <div>
            <div class="filter-item filter-rating">
            <h3>Rating</h3>
            <label for="priceLH" class="filter-label">
              <input
                type="radio"
                name="category"
                id="priceLH"
                class="filter-check"
              />
              price-Low to High
            </label>
            <label for="priceHL" class="filter-label">
              <input
                type="radio"
                name="category"
                id="priceHL"
                class="filter-check"
              />
              price-High to Low
            </label>
          </div>
        </div>
    )
}

export default Rating
