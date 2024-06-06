import { useMemo } from "react";
import type { OrderItem } from "../types";
import { formatCurrency } from "../helpers";

type OrderTotalsProps = {
  order: OrderItem[];
  tip: number;
  placeOrder: () => void;
};

const OrderTotals = ({ order, tip, placeOrder }: OrderTotalsProps) => {
  const subTotalAmount = useMemo(
    () => order.reduce((acc, item) => acc + item.price * item.quantity, 0),
    [order]
  );
  const tipAmount = useMemo(() => subTotalAmount * tip, [tip, subTotalAmount]);
  const totalAmount = useMemo(
    () => subTotalAmount + tipAmount,
    [subTotalAmount, tipAmount]
  );

  return (
    <div>
      <h2 className="pb-2 mb-6 text-2xl font-extrabold border-b border-dashed">
        Total y propinas
      </h2>
      <ul className="text-lg mb-4">
        <li>
          Subtotal:
          <span className="font-bold"> {formatCurrency(subTotalAmount)}</span>
        </li>
        <li>
          Propina:{" "}
          <span className="font-bold">{formatCurrency(tipAmount)}</span>
        </li>
        <li className="text-right text-xl font-bold">
          Total: <span>{formatCurrency(totalAmount)}</span>
        </li>
      </ul>
      <button
        type="button"
        className="w-full bg-amber-400 py-2 px-4 rounded hover:ring-2 hover:ring-amber-400 hover:bg-amber-500 transition-all font-semibold hover:text-white text-xl disabled:bg-zinc-200 disabled:text-zinc-400 disabled:cursor-not-allowed disabled:hover:ring-0 disabled:opacity-60"
        onClick={placeOrder}
        disabled={totalAmount === 0}
      >
        Guardar orden
      </button>
    </div>
  );
};

export default OrderTotals;
