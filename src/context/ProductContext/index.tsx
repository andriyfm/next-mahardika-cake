import { ProductType } from "data/dataProducts";
import * as React from "react";
import ProductReducer, { ActionType } from "./Product.reducer";

export type StateType = {
  product: ProductType | null;
};

const initialState: StateType = {
  product: null,
};

export type DefaultValueType = {
  state: typeof initialState;
  dispatch: React.Dispatch<ActionType>;
};

const defaultValue: DefaultValueType = {
  state: initialState,
  dispatch: () => undefined,
};

const ProductContext = React.createContext(defaultValue);

export const useProduct = () => React.useContext(ProductContext);

const ProductProvider: React.FC = ({ children }) => {
  const [state, dispatch] = React.useReducer(ProductReducer, initialState);

  return (
    <ProductContext.Provider value={{ state, dispatch }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
