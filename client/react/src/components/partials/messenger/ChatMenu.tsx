import { useAppSelector } from "../../../hooks/redux";
import { ConversationMember } from "../../../models/entities";
import { Conversation } from "./Conversation";

const getMember = (members: ConversationMember[], userId: string) => {
	return members.find((member) => member.userId !== userId);
};

export const ChatMenu = () => {
	const { user } = useAppSelector((state) => state.auth);
	const { conversations } = useAppSelector((state) => state.conversation);

	return (
		<div className="basis-1/3">
			<div className="mt-5">
				{conversations.map((conversation) => (
					<Conversation
						{...(getMember(
							conversation.members,
							user.id
						) as ConversationMember)}
						key={conversation.id}
					/>
				))}
			</div>
		</div>
	);
};
