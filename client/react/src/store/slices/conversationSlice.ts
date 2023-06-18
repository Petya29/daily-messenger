import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Conversation } from "../../models/entities";
import { getConversationsAPI } from "../../services/ConversationService";

interface ConversationState {
	conversations: Conversation[];
	isFetching: boolean;
	isFetched: boolean;
	isError: boolean;
}

const initialState: ConversationState = {
	conversations: [],
	isFetching: false,
	isFetched: false,
	isError: false,
};

export const getConversations = createAsyncThunk(
	"game/getConversations",
	async ({ userId }: { userId: string }, { rejectWithValue }) => {
		try {
			const response = await getConversationsAPI(userId);
			return response.data;
		} catch (e: any) {
			return rejectWithValue(e.response?.data?.errors || "Unexpected error");
		}
	}
);

export const conversationSlice = createSlice({
	name: "conversation",
	initialState,
	reducers: {},
	extraReducers(builder) {
		builder.addCase(
			getConversations.fulfilled,
			(state, actions: PayloadAction<Conversation[]>) => {
				state.conversations = actions.payload;
				state.isFetched = true;
				state.isFetching = false;
			}
		);
		builder.addCase(getConversations.pending, (state) => {
			state.isFetching = true;
		});
		builder.addCase(getConversations.rejected, (state) => {
			state.isFetched = false;
			state.isFetching = false;
			state.isError = true;
		});
	},
});

export default conversationSlice.reducer;
export const {} = conversationSlice.actions;
