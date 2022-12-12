import { FILTERED_FARM, SELECTED_FARM } from "../actions/farm.action";

import { FARMS } from "../../data/farm";

const initialState = {
  farms: FARMS,
  filteredFarm: [],
  selected: null,
};

const FarmReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECTED_FARM:
      return {
        ...state,
        selected: state.farms.find((farm) => farm.id === action.farmId),
      };
    case FILTERED_FARM:
      return {
        ...state,
        filteredFarm: state.farms.filter(
          (farm) => farm.category === action.categoryID
        ),
      };
    default:
      return state;
  }
};

export default FarmReducer;