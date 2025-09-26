// cardsSelectors.js
import { useSelector } from "react-redux";
export const useBasketHeader = () =>
  useSelector((state) => state.basket.BasketItems || []);
export const useBasketCard = () =>
  useSelector((state) => state.basket.BasketCart);
