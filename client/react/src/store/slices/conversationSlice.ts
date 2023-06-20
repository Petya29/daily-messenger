import {
	PayloadAction,
	createAsyncThunk,
	createSlice,
	isAnyOf,
} from "@reduxjs/toolkit";
import { Conversation } from "../../models/entities";
import { getConversationsAPI } from "../../services/ConversationService";
import { getConversationMessagesAPI } from "../../services/MessageService";
import { GetConversationMessagesResponse } from "../../models/responses";

interface ConversationState {
	conversations: Conversation[];
	currentConversationId: string | null;
	isFetching: boolean;
	isFetched: boolean;
	isError: boolean;
}

const initialState: ConversationState = {
	conversations: [],
	currentConversationId: null,
	isFetching: false,
	isFetched: false,
	isError: false,
};

export const getConversations = createAsyncThunk(
	"conversation/getConversations",
	async ({ userId }: { userId: string }, { rejectWithValue }) => {
		try {
			const response = await getConversationsAPI(userId);
			return response.data;
		} catch (e: any) {
			return rejectWithValue(e.response?.data?.errors || "Unexpected error");
		}
	}
);

export const getConversationMessages = createAsyncThunk(
	"conversation/getConversationMessages",
	async (
		{ conversationId }: { conversationId: string },
		{ rejectWithValue }
	) => {
		try {
			const response = await getConversationMessagesAPI(conversationId);
			return response.data;
		} catch (e: any) {
			return rejectWithValue(e.response?.data?.errors || "Unexpected error");
		}
	}
);

export const conversationSlice = createSlice({
	name: "conversation",
	initialState,
	reducers: {
		setCurrentConversationId(state, actions: PayloadAction<string | null>) {
			state.currentConversationId = actions.payload;
		},
	},
	extraReducers(builder) {
		builder.addCase(
			getConversations.fulfilled,
			(state, actions: PayloadAction<Conversation[]>) => {
				state.conversations = actions.payload;
				state.isFetched = true;
				state.isFetching = false;
			}
		);
		builder.addCase(
			getConversationMessages.fulfilled,
			(state, actions: PayloadAction<GetConversationMessagesResponse>) => {
				const { conversationId, messages } = actions.payload;

				const conversationIndex = state.conversations.findIndex(
					(conversation) => conversation.id === conversationId
				);
				if (conversationIndex !== -1) {
					state.conversations[conversationIndex].messages = messages;
				}
			}
		);
		builder.addCase(getConversations.pending, (state) => {
			state.isFetching = true;
		});
		builder.addMatcher(
			isAnyOf(getConversations.rejected, getConversationMessages.rejected),
			(state) => {
				state.isFetched = false;
				state.isFetching = false;
				state.isError = true;
			}
		);
	},
});

export default conversationSlice.reducer;
export const { setCurrentConversationId } = conversationSlice.actions;
