import { AxiosResponse } from "axios";
import { Conversation } from "../models/entities";
import API from "../lib/axios";

const API_URL = import.meta.env.VITE_APP_API_URL;

export const getConversationsAPI = async (
	userId: string
): Promise<AxiosResponse<Conversation[]>> => {
	return await API.get<Conversation[]>(`${API_URL}/conversation/${userId}`);
};
