import { profilesReducer } from "./reducers";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    profiles: profilesReducer,
  },
});

export default store;
