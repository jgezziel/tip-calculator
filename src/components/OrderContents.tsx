import type { Dispatch } from "react";
import { formatCurrency } from "../helpers";
import type { OrderActions } from "../reducers/OrderReducer";
import type { OrderItem } from "../types";

type OrderContentsProps = {
  order: OrderItem[];
  dispatch: Dispatch<OrderActions>;
};
const OrderContents = ({ order, dispatch }: OrderContentsProps) => {
  return (
    <div>
      <div className="grid grid-cols-2 gap-4 mb-3 text-lg font-bold border-b sm:grid-cols-4 border-zinc-300">
        <h3>Articulo</h3>
        <h3 className="text-center">Precio</h3>
        <h3 className="hidden text-right sm:block">Subtotal</h3>
      </div>
      {order.map((item) => (
        <article
          key={item.id}
          className="grid items-center grid-cols-2 gap-4 py-3 border-b sm:grid-cols-4 border-zinc-200"
        >
          <h3 className="font-bold">
            {item.name} (&#215;{item.quantity})
          </h3>
          <p className="text-center">{formatCurrency(item.price)}</p>
          <p className="col-span-2 text-right sm:col-span-1 sm:font-bold">
            <span className="font-bold sm:hidden sm:text-center">
              Subtotal:
            </span>
            {formatCurrency(item.price * item.quantity)}
          </p>
          <div className="col-span-2 text-right sm:col-span-1">
            <button
              onClick={() =>
                dispatch({ type: "REMOVE_ITEM", payload: { id: item.id } })
              }
              type="button"
              className="transition-all bg-red-500 rounded sm:rounded-full sm:size-8 hover:bg-red-600 hover:scale-95"
            >
              <span className="px-2 font-bold text-white sm:hidden">
                Eliminar
              </span>
              <span className="hidden -mt-1 text-3xl leading-none text-white sm:block">
                &#215;
              </span>
            </button>
          </div>
        </article>
      ))}
    </div>
  );
};

export default OrderContents;
