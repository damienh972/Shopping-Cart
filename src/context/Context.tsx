import { createContext, useContext, useReducer } from "react";
import { faker } from "@faker-js/faker";
import { cartReducer } from "./Reducer";
import { ProductType } from "../models";

const ShoppingCart: React.Context<{}> = createContext({});



const Context: React.FC<{ children:JSX.Element }> = (props) => {
  const products: ProductType[] = [...Array(20)].map(() => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.image.business(),
    inStock: faker.helpers.arrayElement([0, 3, 5, 6, 7]),
    fastDelivery: faker.datatype.boolean(),
    rating: faker.helpers.arrayElement([1, 2, 3, 4, 5]),
  }));

  const [state, dispatch] = useReducer<any>(cartReducer, {
    products,
    cart: [],
  });

  return (
    <ShoppingCart.Provider value={{ state, dispatch }}>
      {props.children}
    </ShoppingCart.Provider>
  );
};

export default Context;

export const ShoppingCartState = () => {
  return useContext(ShoppingCart);
}