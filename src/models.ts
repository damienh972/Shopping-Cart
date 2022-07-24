export interface ProductType {
  id: string;
  name: string;
  price: string;
  image: string;
  inStock: number;
  fastDelivery: boolean;
  rating: number;
};

export interface State {
  products: ProductType[];
  cart: ProductType[];
}

export interface Actions {
  type: "ADD_TO_CART" | "REMOVE_FROM_CART";
  payload: ProductType;
}

export interface CartReducer {
  (state: State, action: Actions):{
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
}