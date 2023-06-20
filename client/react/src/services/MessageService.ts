import { AxiosResponse } from "axios";
import { GetConversationMessagesResponse } from "../models/responses";
import API from "../lib/axios";

const API_URL = import.meta.env.VITE_APP_API_URL;

export const getConversationMessagesAPI = async (
	conversationId: string
): Promise<AxiosResponse<GetConversationMessagesResponse>> => {
	return await API.get<GetConversationMessagesResponse>(
		`${API_URL}/message/${conversationId}`
	);
};
