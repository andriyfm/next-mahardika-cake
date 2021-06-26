import { ProductType } from "data/dataProducts";
import { StateType } from ".";

type SetProductType = {
  type: "SET_PRODUCT";
  product: ProductType;
};

export type ActionType = SetProductType;

const ProductReducer = (state: StateType, action: ActionType): StateType => {
  switch (action.type) {
    case "SET_PRODUCT":
      return { ...state, product: action.product };
    default:
      return state;
  }
};

export default ProductReducer;
