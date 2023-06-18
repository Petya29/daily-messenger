import { useEffect } from "react";
import { ChatBox } from "../../components/partials/messenger/ChatBox";
import { ChatMenu } from "../../components/partials/messenger/ChatMenu";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { getConversations } from "../../store/slices/conversationSlice";

export const MessengerWrapper = () => {
	const dispatch = useAppDispatch();

	const { user } = useAppSelector((state) => state.auth);

	useEffect(() => {
		dispatch(getConversations({ userId: user.id }));
	}, [user.id]);

	return (
		<div className="flex h-[calc(100vh_-_40px)] p-4">
			<ChatMenu />
			<ChatBox />
		</div>
	);
};
