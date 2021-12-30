import { ActionTypes } from '../constants/actionTypes';

export const addToCart = (product) => {
    return {
      type: ActionTypes.ADD_TO_CART,
      payload: product,
    };
};
export const incrementProduct = (productId) => {
    return {
      type: ActionTypes.INCREMENT_PRODUCT,
      payload: productId,
    };
};
export const decrementProduct = (productId) => {
    return {
      type: ActionTypes.DECREMENT_PRODUCT,
      payload: productId,
    };
};

