// cardsSelectors.js
import { useSelector } from "react-redux";

export const useCards = () => useSelector((state) => state.cards.items);
export const useCardsId = () => useSelector((state) => state.cards.itemID);
export const useStatus = () => useSelector((state) => state.cards.status);
export const useError = () => useSelector((state) => state.cards.error);
