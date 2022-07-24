import { ProductType, CartState, CartActions, FilterState, FilterActions } from "../models";

export const cartReducer = (state: CartState, action: CartActions) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, qty: 1 }],
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter(
          (c: ProductType) => c.id !== action.payload.id
        ),
      };
    case "CHANGE_CART_QUANTITY":
      return {
        ...state,
        cart: state.cart.filter((c: ProductType) =>
          c.id === action.payload.id ? (c.qty = action.payload.qty) : c.qty
        ),
      };
    default:
      return state;
  }
};

export const filterReducer = (state: FilterState, action: FilterActions) => {
  switch (action.type) {

    
    default:
      return state;
  }
}
