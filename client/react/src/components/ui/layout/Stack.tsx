enum Sizes {
	s = "gap-2",
	m = "gap-5",
	l = "gap-8",
}

type StackProps = {
	size?: keyof typeof Sizes;
	children: React.ReactNode;
	reverse?: boolean;
};

export const Stack = ({
	size = "s",
	children,
	reverse = false,
}: StackProps) => {
	return (
		<div
			className={[
				"flex",
				reverse ? "flex-col-reverse" : "flex-col",
				Sizes[size],
			]
				.join(" ")
				.trim()}
		>
			{children}
		</div>
	);
};
