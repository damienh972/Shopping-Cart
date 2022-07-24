///// Cart types
export interface CartState {
  products: ProductType[];
  cart: ProductType[];
}

export interface CartActions {
  type: "ADD_TO_CART" | "REMOVE_FROM_CART" | "CHANGE_CART_QUANTITY";
  payload: ProductType;
};

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
  byStock: boolean;
  byFastDelivery: boolean;
  byRating: number;
  searchQuery: string;
}

export interface FilterActions {
  type: "ADD_TO_CART" | "REMOVE_FROM_CART" | "CHANGE_CART_QUANTITY";
  payload: ProductType;
};

export interface FilterReducer {
  (state: FilterState, action: FilterActions):{
    byStock: boolean;
    byFastDelivery: boolean;
    byRating: number;
    searchQuery: string;
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