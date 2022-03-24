import React from "react";
import { ImStarFull } from "react-icons/im";
import { ACTION_TYPE } from "../../../../store/Actions";
import { useFilter } from "../../../../store/data/FilterContext";
function Rating() {
  const {
    filterState:{rate},
    filterDispatch,
  } = useFilter();

  const ratings = [1, 2, 3, 4];
  return (
    <div>
      <div class="filter-item filter-rating">
        <h3>Rating</h3>
        {ratings.map((value) => {
          return (
            <label class="filter-label">
              <input
                type="radio"
                name="rate"
                value={value}
                class="filter-check"
                onChange={(e)=>filterDispatch({type:ACTION_TYPE.RATE,payload:e.target.value})}
              />
              {value} <ImStarFull/> and above
            </label>
          );
        })}
      </div>
    </div>
  );
}

export default Rating;
