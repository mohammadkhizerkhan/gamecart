import React from 'react'

function Range() {
    return (
        <div>
            <div class="filter-item filter-price">
            <h3>Price</h3>
            <div class="price-range">
              <p>50</p>
              <p>150</p>
              <p>200</p>
            </div>
            <input type="range" min="0" max="200" class="slider" />
          </div>
        </div>
    )
}

export default Range
