import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";
import conversationSlice from "./slices/conversationSlice";

const rootReducer = combineReducers({
	auth: authSlice,
	conversation: conversationSlice,
});

const setupStore = () => {
	return configureStore({
		reducer: rootReducer,
	});
};

export const store = setupStore();
export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
