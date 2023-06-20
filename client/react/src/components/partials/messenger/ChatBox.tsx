import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { Message } from "./Message";
import { Message as IMessage } from "../../../models/entities";
import { getConversationMessages } from "../../../store/slices/conversationSlice";

export const ChatBox = () => {
	const disaptch = useAppDispatch();

	const { user } = useAppSelector((state) => state.auth);
	const { conversations, currentConversationId } = useAppSelector(
		(state) => state.conversation
	);

	const [messages, setMessages] = useState<IMessage[]>([]);

	useEffect(() => {
		const currentConversationIndex = conversations.findIndex(
			(conversation) => conversation.id === currentConversationId
		);
		if (currentConversationIndex !== -1) {
			if (
				conversations[currentConversationIndex].hasOwnProperty("messages")
			) {
				setMessages(conversations[currentConversationIndex].messages);
			} else {
				if (currentConversationId)
					disaptch(
						getConversationMessages({
							conversationId: currentConversationId,
						})
					)
						.unwrap()
						.then((originalPromiseResult) => {
							setMessages(originalPromiseResult.messages);
						});
			}
		}
	}, [currentConversationId]);

	return (
		<div className="basis-11/12 mx-5">
			<div className="h-[88%] overflow-y-scroll pr-2">
				{messages.map((message) => (
					<Message
						message={message}
						isOwnMessage={message.userId === user.id}
						key={message.id}
					/>
				))}
			</div>
			<div className="flex mt-5 items-center justify-between">
				<textarea
					className="w-[80%] border p-1 outline-none"
					rows={3}
					placeholder="Write a message ..."
				></textarea>
				<button className="w-16 h-9 rounded cursor-pointer text-white bg-teal-400">
					Send
				</button>
			</div>
		</div>
	);
};
