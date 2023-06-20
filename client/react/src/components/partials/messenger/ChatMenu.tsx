import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { ConversationMember } from "../../../models/entities";
import { setCurrentConversationId } from "../../../store/slices/conversationSlice";
import { Conversation } from "./Conversation";

const getMember = (members: ConversationMember[], userId: string) => {
	return members.find((member) => member.userId !== userId);
};

export const ChatMenu = () => {
	const dispatch = useAppDispatch();

	const { user } = useAppSelector((state) => state.auth);
	const { conversations, currentConversationId } = useAppSelector(
		(state) => state.conversation
	);

	const handleConversationClick = (id: string) => {
		dispatch(setCurrentConversationId(id));
	};

	return (
		<div className="basis-1/3">
			<div className="flex flex-col gap-[2px] mt-5">
				{conversations.map((conversation) => (
					<Conversation
						id={conversation.id}
						member={
							getMember(
								conversation.members,
								user.id
							) as ConversationMember
						}
						isCurrent={conversation.id === currentConversationId}
						handleClick={handleConversationClick}
						key={conversation.id}
					/>
				))}
			</div>
		</div>
	);
};
