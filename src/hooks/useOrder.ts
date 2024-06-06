import { useState } from "react";
import type { OrderItem, MenuItem } from "../types";

export default function useOrder() {
  const [order, setOrder] = useState<OrderItem[]>([]);
  const [tip, setTip] = useState(0);

  const [MAX_QUANTITY] = [10];

  const addItem = (item: MenuItem) => {
    const existingItem = order.find((orderItem) => orderItem.id === item.id);

    if (existingItem) {
      if (existingItem.quantity >= MAX_QUANTITY) {
        return alert(
          `Solo puedes ordenar hasta ${MAX_QUANTITY} de ${existingItem.name}`
        );
      }
      const updatedOrder = order.map((orderItem) =>
        orderItem.id === item.id
          ? { ...orderItem, quantity: orderItem.quantity + 1 }
          : orderItem
      );

      setOrder(updatedOrder);
    } else {
      const newItem = { ...item, quantity: 1 };

      setOrder([...order, newItem]);
    }
  };

  const removeItem = (id: MenuItem["id"]) => {
    const items = order.filter((item) => item.id !== id);
    setOrder(items);
  };

  const placeOrder = () => {
    if (window.confirm("¿Estás seguro de que deseas realizar el pedido?")) {
      setOrder([]);
      setTip(0);
      alert("Tu pedido ha sido realizado con éxito. Gracias por tu compra!");
    }
  };

  return { order, tip, setTip, addItem, removeItem, placeOrder };
}
