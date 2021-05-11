import * as TYPES from "../types";

export function hat(state = { listHat: [] }, action) {
  switch (action.type) {
    case TYPES.ADD_1_TO_PRODUCT_LIST:
      return { ...state, listHat: state.listHat.concat(1) };

    default:
      return state;
  }
}
