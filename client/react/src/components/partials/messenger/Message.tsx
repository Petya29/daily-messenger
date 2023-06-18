type MessageProps = {
	isOwnMessage?: boolean;
};

export const Message = ({ isOwnMessage = false }: MessageProps) => {
	return (
		<div
			className={[
				"flex flex-col mt-5",
				isOwnMessage ? "items-end ml-5" : "",
			]
				.join(" ")
				.trim()}
		>
			<div className="flex">
				<img
					className="w-8 h-8 mr-2 rounded-full object-cover"
					src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
					alt="user-avatar"
				/>
				<span
					className={[
						"max-w-xs p-3 rounded-md text-white",
						isOwnMessage ? "bg-slate-500" : "bg-slate-700",
					]
						.join(" ")
						.trim()}
				>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit.
					<div className="text-right text-xs">3:53 PM</div>
				</span>
			</div>
		</div>
	);
};
