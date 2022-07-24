import { createContext, useContext, useReducer } from "react";
import { faker } from "@faker-js/faker";
import { cartReducer, filterReducer } from "./Reducer";
import { ProductType, CartState, CartReducer, CartActions, FilterReducer } from "../models";

interface FullState {
  state: CartState;
  dispatch: React.Dispatch<CartActions>;
}

const ShoppingCart: React.Context<any> = createContext({});
faker.seed(99);

const Context: React.FC<{ children: JSX.Element }> = (props) => {

  const products: ProductType[] = [...Array(20)].map(() => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(1, 10),
    image: faker.image.abstract(1000, 1000, true),
    inStock: faker.helpers.arrayElement([0, 5]),
    fastDelivery: faker.datatype.boolean(),
    rating: faker.helpers.arrayElement([1, 2, 3, 4, 5]),
  }));

  const [state, dispatch] = useReducer<CartReducer>(cartReducer, {
    products,
    cart: [],
  });

  const [filterState, filterDispatch] = useReducer<FilterReducer>(filterReducer, {
    byStock: false,
    byFastDelivery: false,
    byRating: 0,
    searchQuery: ""
  });

  return (
    <ShoppingCart.Provider value={{state, dispatch}}>
      {props.children}
    </ShoppingCart.Provider>
  );
};

export default Context;

export const ShoppingCartState = () => {
  return useContext<FullState>(ShoppingCart);
};
