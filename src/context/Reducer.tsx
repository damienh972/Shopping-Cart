import { ProductType } from "../models";

enum ActionsType {
  ADD = "ADD",
  DELETE = "DELETE",
}
export interface Actions {
  type: ActionsType;
  payload: ProductType;
}

type ActionMap<M extends { [index: string]: any }> = {
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

export const cartReducer = (state: ProductType[], action: Actions) => {
  switch (action.type) {
    default:
      return state;
  }
};
