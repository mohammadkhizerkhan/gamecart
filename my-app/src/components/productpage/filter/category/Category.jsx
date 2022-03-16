import React from 'react'

function Category() {
    return (
        <div>
            <div class="filter-item filter-category">
            <h3>Category</h3>
            <label for="games" class="filter-label">
              <input
                type="checkbox"
                name="category"
                id="games"
                class="filter-check"
              />
              Games
            </label>
            <label for="consoles" class="filter-label">
              <input
                type="checkbox"
                name="category"
                id="consoles"
                class="filter-check"
              />
              Consoles
            </label>
            <label for="accessories" class="filter-label">
              <input
                type="checkbox"
                name="category"
                id="accessories"
                class="filter-check"
              />
              Accessories
            </label>
          </div>
        </div>
    )
}

export default Category
