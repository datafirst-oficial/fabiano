interface DropdownContentProps {
	item: string;
}

export default function DropdownContent({ item }: DropdownContentProps) {
	return (
		<div
			id="dropdown-content"
			role="menu"
			aria-labelledby="dropdown-button"
			className="sm:w-[524px] border bg-white rounded-b-xl p-6 text-text1 opacity-80"
		>
			<ul className="list-disc sm:ps-8 ps-4 text-left">
				<li className="text-sm sm:text-base leading-6 hover:text-primary cursor-pointer focus:outline-none focus:text-primary">
					{item}
				</li>
			</ul>
		</div>
	);
}
