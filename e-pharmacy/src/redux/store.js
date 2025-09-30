import { configureStore } from "@reduxjs/toolkit";
import cardReducer from "./cardMedicine/cardMedicine-reducer";
import cardsStoreReducer from "./cardStore/cardStore-reducer";
import authReducer from "./auth/auth-reducer";
import basketReducer from "./Basket/basket-reducer";

const store = configureStore({
  reducer: {
    cards: cardReducer,
    cardsStore: cardsStoreReducer,
    auth: authReducer,
    basket: basketReducer,
  },
});

export default store;
