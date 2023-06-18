import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { User } from "../../models/entities";

interface AuthState {
	user: User;
	authError: {
		isError: boolean;
		msg: string;
	};
	isAuth: boolean;
	isAuthLoading: boolean;
	isAuthChecking: boolean;
}

const initialState: AuthState = {
	user: {} as User,
	authError: {
		isError: false,
		msg: "",
	},
	isAuth: false,
	isAuthLoading: false,
	isAuthChecking: true,
};

export const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		setUser(state, actions: PayloadAction<User>) {
			state.isAuth = true;
			state.user = actions.payload;
			state.isAuthChecking = false;
		},
	},
});

export default authSlice.reducer;
export const { setUser } = authSlice.actions;
