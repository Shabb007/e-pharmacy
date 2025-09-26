// cardsSelectors.js
import { useSelector } from "react-redux";

export const useUserName = () => useSelector((state) => state.auth.name);
export const useStatus = () => useSelector((state) => state.auth.status);
export const useError = () => useSelector((state) => state.auth.error);
