// cardsSelectors.js
import { useSelector } from "react-redux";

export const useCardsStore = () =>
  useSelector((state) => state.cardsStore.items);
export const useStatusCardsStore = () =>
  useSelector((state) => state.cardsStore.status);
export const useErrorCardsStore = () =>
  useSelector((state) => state.cardsStore.error);
