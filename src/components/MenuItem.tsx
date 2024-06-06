import type { MenuItem as TypeMenuItem } from "../types";

type MenuItemProps = {
  item: TypeMenuItem;
  addItem: (item: TypeMenuItem) => void;
};

const MenuItem = ({ item, addItem }: MenuItemProps) => {
  return (
    <button
      type="button"
      className="w-full flex justify-between ring-1 ring-zinc-300 gap-4 px-4 py-2 rounded-md hover:ring-amber-400 hover:bg-amber-50/50 sm:hover:scale-105 focus:bg-amber-50 focus:ring-amber-400 focus:ring-2 transition-all"
      onClick={() => addItem(item)}
    >
      <p className="font-semibold">{item.name}</p>
      <p className="font-bold">${item.price}</p>
    </button>
  );
};

export default MenuItem;
