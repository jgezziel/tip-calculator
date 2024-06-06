import type { MenuItem, TipPercentage } from "../types";

export const menuItems: MenuItem[] = [
  { id: 1, name: "Pizza", price: 10 },
  { id: 2, name: "Hamburguesa", price: 8 },
  { id: 3, name: "Pasta", price: 12 },
  { id: 4, name: "Ensalada", price: 7 },
  { id: 5, name: "Sopa", price: 5 },
  { id: 6, name: "Sandwich", price: 6 },
  { id: 7, name: "Pollo asado", price: 11 },
  { id: 8, name: "Filete de pescado", price: 14 },
  { id: 9, name: "Tacos", price: 9 },
  { id: 10, name: "Paella", price: 15 },
  { id: 11, name: "Gazpacho", price: 6 },
  { id: 12, name: "Tarta de queso", price: 4 },
];

export const tipPercentages: TipPercentage[] = [
  { id: "tip-0", value: 0, label: "Nada - 0%" },
  { id: "tip-10", value: 0.1, label: "Poco - 10%" },
  { id: "tip-20", value: 0.2, label: "Bien - 20%" },
  { id: "tip-50", value: 0.5, label: "Generoso - 50%" },
];
