import { ChatBox } from "../../components/partials/messenger/ChatBox";
import { ChatMenu } from "../../components/partials/messenger/ChatMenu";
import { ChatOnline } from "../../components/partials/messenger/ChatOnline";

export const MessengerWrapper = () => {
	return (
		<div className="flex h-[calc(100vh_-_40px)] p-4">
			<ChatMenu />
			<ChatBox />
			<ChatOnline />
		</div>
	);
};
