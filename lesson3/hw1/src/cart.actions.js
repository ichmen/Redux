export const ADD = "CART/ADD";
export const REMOVE = "CART/REMOVE";

export function addProduct(product) {
  return {
    type: ADD,
    payload: {
      product,
    },
  };
}

export function removeProduct(productId) {
  return {
    type: REMOVE,
    payload: {
      productId,
    },
  };
}
