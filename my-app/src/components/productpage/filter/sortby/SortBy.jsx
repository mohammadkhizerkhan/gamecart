import React from "react";

function SortBy() {
  return (
    <div>
      <div className="filter-item filter-sortBy">
      <h3>Sort By</h3>
      <label class="filter-label">
        <input type="radio" name="sort" value="OUT_OF_STOCK" class="filter-check"/>
        low-to-high
      </label>
      <label class="filter-label" >
        <input type="radio" name="sort" value="FAST_DELIVERY" class="filter-check"/>
        high-to-low
      </label>
      </div>
    </div>
  );
}

export default SortBy;
