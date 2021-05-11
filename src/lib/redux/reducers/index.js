import { combineReducers } from "redux";
import { product } from "./product";
import { hat } from "./hat";

export const reducers = combineReducers({ product, hat });
