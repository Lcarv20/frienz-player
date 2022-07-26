import NewRoomModal from "../NewRoomModal";
import { rooms } from "../../mockData";
import { useState } from "react";
import Room from "../Room";

function RoomsTab() {
	// I don't have yet a concrete type for room as this is moking data
	const [loby, setLoby] = useState<null | {}>(null);

	return (
		<>
			{/* Create new room button */}
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
			{/* Rooms */}

			{rooms.map((room) => {
				return (
					<div
						key={room.name}
						onClick={() => setLoby(room)}
						className="p-2 bg-neutral my-4 cursor-pointer group border border-transparent hover:border-primary rounded shadow-lg space-y-6">
						<div className="flex justify-between items-center">
							{/* Room Name */}
							<h3 className="group-hover:text-primary-focus font-semibold">
								#{room.name}
							</h3>

							<div>
								<span className="text-xs uppercase font-bold text-neutral-content/50">
									created at: <span className="">{room.createdAt}</span>
								</span>
							</div>
						</div>

						<div className="">
							{room.guests.map((guest, idx) => {
								console.log(idx);
								if (idx === 3) {
									return (
										<div key={idx} className="badge badge-secondary mx-1">
											+{room.guests.length - 3}
										</div>
									);
								} else if (idx > 3) {
									return;
								}
								return (
									<div key={guest} className="badge badge-secondary mx-1">
										<span>{guest}</span>
									</div>
								);
							})}
						</div>
					</div>
				);
			})}

			<NewRoomModal />
			{loby && <Room roomData={loby} handleClose={() => setLoby(null)} />}
		</>
	);
}

export default RoomsTab;
