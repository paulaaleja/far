import { combineReducers, createStore } from "redux";

import CategoryReducer from "./reducers/category.reducer";
import FarmReducer from "./reducers/farms.reducer";

const RootReducer = combineReducers({
  categories: CategoryReducer,
  farms: FarmReducer,
});

export default createStore(RootReducer);