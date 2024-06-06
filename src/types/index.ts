export type MenuItem = {
  id: number;
  name: string;
  price: number;
};

export type OrderItem = MenuItem & {
  quantity: number;
};

export type TipPercentage = {
  id: string;
  value: number;
  label: string;
};