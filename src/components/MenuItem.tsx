import type { Dispatch } from "react";
import type { MenuItem as TypeMenuItem } from "../types";
import type { OrderActions } from "../reducers/OrderReducer";

type MenuItemProps = {
  item: TypeMenuItem;
  dispatch: Dispatch<OrderActions>;
};

const MenuItem = ({ item, dispatch }: MenuItemProps) => {
  return (
    <button
      type="button"
      className="flex justify-between w-full gap-4 px-4 py-2 transition-all rounded-md ring-1 ring-zinc-300 hover:ring-amber-400 hover:bg-amber-50/50 sm:hover:scale-105 focus:bg-amber-50 focus:ring-amber-400 focus:ring-2"
      onClick={() => dispatch({ type: "ADD_ITEM", payload: { item } })}
    >
      <p className="font-semibold">{item.name}</p>
      <p className="font-bold">${item.price}</p>
    </button>
  );
};

export default MenuItem;
