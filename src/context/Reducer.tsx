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
    case "SORT_BY_PRICE":
      return {
        ...state,
        sort: action.payload,
      };
    case "FILTER_BY_STOCK":
      return {
        ...state,
        byStock: !state.byStock,
      };
    case "FILTER_BY_DELIVERY":
      return {
        ...state,
        byFastDelivery: !state.byFastDelivery,
      };
    case "FILTER_BY_RATING":
      return {
        ...state,
        byRating: action.payload,
      };
    case "FILTER_BY_SEARCH":
      return {
        ...state,
        searchQuery: action.payload,
      };
    case "CLEAR_FILTERS":
      return {
        sort: "lowToHigh",
        byStock: false,
        byFastDelivery: false,
        byRating: 0,
        searchQuery: "",
      };

    default:
      return state;
  }
}
