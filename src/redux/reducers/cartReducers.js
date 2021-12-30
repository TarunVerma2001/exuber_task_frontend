import { ActionTypes } from '../constants/actionTypes';

const initialState = {
  products: [],
};

export const cartReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.ADD_TO_CART: {

      const matchedProductIndex = state.products.findIndex(
        (el) => el._id === payload._id
        );
        // console.log('mactched', matchedProductIndex);
      let newProducts;
      if (matchedProductIndex !== -1) {
        newProducts = [...state.products];
        newProducts[matchedProductIndex].quantity++;
        return {
          ...state,
          products: newProducts,
        };
      }
      const newProduct = payload;
      newProduct.quantity = 1;
      newProducts = [...state.products, newProduct];
      return {
        ...state,
        products: newProducts,
      };
    }

    case ActionTypes.INCREMENT_PRODUCT: {
      const matchedProductIndex = state.products.findIndex(
        (el) => el._id === payload
      );

      const newProducts = [...state.products];
      newProducts[matchedProductIndex].quantity++;
      return {
        ...state,
        products: newProducts,
      };
    }

    case ActionTypes.DECREMENT_PRODUCT: {
      const matchedProductIndex = state.products.findIndex(
        (el) => el._id === payload
      );
      
      const newProducts = [...state.products];
      if(newProducts[matchedProductIndex].quantity === 1){
        newProducts.splice(matchedProductIndex, 1);
        return {
          ...state,
          products: newProducts,
        };
      }
      newProducts[matchedProductIndex].quantity--;
      return {
        ...state,
        products: newProducts,
      };
    }
    default:
      return state;
  }
};
