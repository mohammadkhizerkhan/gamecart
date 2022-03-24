import React from "react";
import { ACTION_TYPE } from "../../../../store/Actions";
import {useFilter} from "../../../../store/data/FilterContext"
function FilterHeader() {
  const {filterDispatch} =useFilter();

  return (
    <div>
        <div class="filter-item filter-header">
          <h2>Filters</h2>
          <button class="btn btn-s btn-link" onClick={()=>filterDispatch({type:ACTION_TYPE.RESET})}>clear</button>
        </div>
    </div>
  );
}

export default FilterHeader;
