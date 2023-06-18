enum Sizes {
	s = "gap-2",
	m = "gap-5",
	l = "gap-8",
}

type InlineProps = {
	size?: keyof typeof Sizes;
	children: React.ReactNode;
};

export const Inline = ({ size = "s", children }: InlineProps) => {
	return (
		<div
			className={["flex flex-row items-center", Sizes[size]]
				.join(" ")
				.trim()}
		>
			{children}
		</div>
	);
};
