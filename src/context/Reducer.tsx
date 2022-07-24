import { ProductType, State, Actions } from "../models";

export type ActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
      }
    : {
        type: Key;
        payload: M[Key];
      };
};

export type ProductActions = ActionMap<ProductType>[keyof ActionMap<ProductType>];

export const cartReducer = (state: State, action: Actions) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, qty: 1 }],
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((c: { id: string; }) => c.id !== action.payload.id),
      };
    default:
      return state;
  }
};
