import { ADD, REMOVE } from "./cart.actions";

export function cartReducer(state = { products: [] }, action) {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        products: [...state.products, action.payload.product],
      };
    case REMOVE:
      const modifiedUsers = state.products.filter(
        (product) => product.id !== action.payload.productId
      );
      return { ...state, products: [modifiedUsers] };
    default:
      return state;
  }
}
