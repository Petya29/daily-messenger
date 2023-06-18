import { Message } from "./Message";

export const ChatBox = () => {
	return (
		<div className="basis-11/12 mx-5">
			<div className="h-[88%] overflow-y-scroll pr-2">
				<Message />
				<Message isOwnMessage />
				<Message />
				<Message />
				<Message />
				<Message />
				<Message />
				<Message />
				<Message />
				<Message />
				<Message />
				<Message />
				<Message isOwnMessage />
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
