import { type Dispatch, useMemo } from "react";
import type { OrderItem } from "../types";
import { formatCurrency } from "../helpers";
import type { OrderActions } from "../reducers/OrderReducer";

type OrderTotalsProps = {
  order: OrderItem[];
  tip: number;
  dispatch: Dispatch<OrderActions>;
};

const OrderTotals = ({ order, tip, dispatch }: OrderTotalsProps) => {
  const subTotalAmount = useMemo(
    () => order.reduce((acc, item) => acc + item.price * item.quantity, 0),
    [order]
  );
  const tipAmount = useMemo(() => subTotalAmount * tip, [tip, subTotalAmount]);
  const totalAmount = useMemo(
    () => subTotalAmount + tipAmount,
    [subTotalAmount, tipAmount]
  );

  const handlePlaceOrder = () => {
    if (window.confirm("¿Estás seguro de que deseas realizar el pedido?")) {
      dispatch({ type: "PLACE_ORDER" });
      alert("Tu pedido ha sido realizado con éxito. Gracias por tu compra!");
    }
  };

  return (
    <div>
      <h2 className="pb-2 mb-6 text-2xl font-extrabold border-b border-dashed">
        Total y propinas
      </h2>
      <ul className="mb-4 text-lg">
        <li>
          Subtotal:
          <span className="font-bold"> {formatCurrency(subTotalAmount)}</span>
        </li>
        <li>
          Propina:{" "}
          <span className="font-bold">{formatCurrency(tipAmount)}</span>
        </li>
        <li className="text-xl font-bold text-right">
          Total: <span>{formatCurrency(totalAmount)}</span>
        </li>
      </ul>
      <button
        type="button"
        className="w-full px-4 py-2 text-xl font-semibold transition-all rounded bg-amber-400 hover:ring-2 hover:ring-amber-400 hover:bg-amber-500 hover:text-white disabled:bg-zinc-200 disabled:text-zinc-400 disabled:cursor-not-allowed disabled:hover:ring-0 disabled:opacity-60"
        onClick={handlePlaceOrder}
        disabled={totalAmount === 0}
      >
        Guardar orden
      </button>
    </div>
  );
};

export default OrderTotals;
