import { ConversationMember } from "../../../models/entities";

export const Conversation = ({ user }: ConversationMember) => {
	return (
		<div className="flex items-center p-3 rounded cursor-pointer bg-slate-400 hover:bg-slate-500">
			<img
				className="w-10 h-10 rounded-full object-cover mr-5"
				src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
				alt="user-avatar"
			/>
			<span>{user.nickname}</span>
		</div>
	);
};
