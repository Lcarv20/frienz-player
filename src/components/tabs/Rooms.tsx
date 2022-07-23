import NewRoomModal from "../NewRoomModal";

function RoomsTab() {
	return (
		<>
			<label
				htmlFor="new-room-modal"
				className="rounded bg-neutral  flex justify-center items-center p-4 gap-4 text-neutral-content/50 cursor-pointer">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="h-5 w-5"
					viewBox="0 0 20 20"
					fill="currentColor">
					<path
						fillRule="evenodd"
						d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
						clipRule="evenodd"
					/>
				</svg>
				<h4>create new room</h4>
			</label>
			<NewRoomModal />
		</>
	);
}

export default RoomsTab;
