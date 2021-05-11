import * as TYPES from "../types";

export function product(state = { list: [] }, action) {
  switch (action.type) {
    case TYPES.ADD_1_TO_PRODUCT_LIST:
      return { ...state, list: (state.list ?? []).concat(1) };

    default:
      return state;
  }
}
