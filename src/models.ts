///// Cart types
export interface CartState {
  products: ProductType[];
  cart: ProductType[];
}

export interface CartActions {
  type: "ADD_TO_CART" | "REMOVE_FROM_CART" | "CHANGE_CART_QUANTITY";
  payload: ProductType;
};

export interface CartContext {
  state: CartState;
  filterState: FilterState;
  dispatch: React.Dispatch<CartActions>;
  filterDispatch: React.Dispatch<FilterActions>;
}

export interface CartReducer {
  (state: CartState, action: CartActions):{
    cart: (ProductType | {
        qty: number;
        id: string;
        name: string;
        price: string;
        image: string;
        inStock: number;
        fastDelivery: boolean;
        rating: number;
    })[];
    products: ProductType[];
  }
};
///// Filter types
export interface FilterState {
  sort?: string;
  byStock: boolean;
  byFastDelivery: boolean;
  byRating: number;
  searchQuery: string;
  show: boolean;
}

export interface FilterActions {
  type:
    | "SORT_BY_PRICE"
    | "FILTER_BY_STOCK"
    | "FILTER_BY_DELIVERY"
    | "FILTER_BY_RATING"
    | "FILTER_BY_SEARCH"
    | "CLEAR_FILTERS"
    | "TOGGLE_FILTERS";
  payload?: any;
};

export interface FilterReducer {
  (state: FilterState, action: FilterActions): {
    sort?: string;
    byStock: boolean;
    byFastDelivery: boolean;
    byRating: number;
    searchQuery: string;
    show: boolean;
  }
};
///// general types
export interface Location {
  hash: string;
  key: string;
  pathname: string;
  search: string;
  state: unknown | null;
};

export interface ProductType {
  qty?: number;
  id?: string;
  name?: string;
  price?: string;
  image?: string;
  inStock?: number;
  fastDelivery?: boolean;
  rating?: number;
};

export interface AllContext {

}