import { Message } from "./Message";

export const ChatBox = () => {
	return (
		<div className="basis-1/2">
			<div>
				<Message />
				<Message />
				<Message />
			</div>
			<div></div>
		</div>
	);
};
