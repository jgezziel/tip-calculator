import type { MenuItem, OrderItem } from "../types";

export type OrderActions =
  | {
      type: "ADD_ITEM";
      payload: { item: MenuItem };
    }
  | {
      type: "REMOVE_ITEM";
      payload: { id: MenuItem["id"] };
    }
  | {
      type: "PLACE_ORDER";
    }
  | {
      type: "SET_TIP";
      payload: { tip: number };
    };

export type OrderState = {
  order: OrderItem[];
  tip: number;
};

export const initialState: OrderState = {
  order: [],
  tip: 0,
};

const [MAX_QUANTITY] = [10];

export const orderReducer = (
  state: OrderState = initialState,
  action: OrderActions
) => {
  switch (action.type) {
    case "ADD_ITEM": {
      const existingItem = state.order.find(
        (orderItem) => orderItem.id === action.payload.item.id
      );

      let order: OrderItem[] = [];

      if (existingItem) {
        if (existingItem.quantity >= MAX_QUANTITY) {
          alert(
            `Solo puedes ordenar hasta ${MAX_QUANTITY} de ${existingItem.name}`
          );
          return state;
        }

        order = state.order.map((orderItem) =>
          orderItem.id === action.payload.item.id
            ? { ...orderItem, quantity: orderItem.quantity + 1 }
            : orderItem
        );
      } else {
        const newItem: OrderItem = { ...action.payload.item, quantity: 1 };
        order = [...state.order, newItem];
      }

      return {
        ...state,
        order,
      };
    }
    case "REMOVE_ITEM": {
      const order = state.order.filter((item) => item.id !== action.payload.id);

      return {
        ...state,
        order,
      };
    }
    case "PLACE_ORDER": {
      return {
        ...state,
        order: [],
        tip: 0,
      };
    }
    case "SET_TIP": {
      const tip = action.payload.tip;
      return {
        ...state,
        tip,
      };
    }
    default: {
      return state;
    }
  }
};
