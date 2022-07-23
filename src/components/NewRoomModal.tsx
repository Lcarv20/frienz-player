import { FormEvent, useState } from "react";

function NewRoomModal() {
	const [loading, isLoading] = useState(false);

	function createNewRoom(ev: FormEvent) {
		ev.preventDefault();
	}
	return (
		<>
			<input type="checkbox" id="new-room-modal" className="modal-toggle" />
			<div className="modal">
				<div className="modal-box relative">
					<label
						htmlFor="new-room-modal"
						className="btn btn-ghost btn-sm btn-circle absolute right-2 top-2">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5 fill-error"
							viewBox="0 0 20 20"
							fill="currentColor">
							<path
								fillRule="evenodd"
								d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
								clipRule="evenodd"
							/>
						</svg>
					</label>

					<form onSubmit={createNewRoom} className="w-full">
						<div className="form-control">
							<label className="label">
								<span className="label-text">Room name</span>
								<span className="label-text-alt hidden">Invalid Room Name</span>
							</label>
							<input
								type="text"
								// placeholder="ex.:jane@doe.mail"
								className="input input-bordered input-primary w-full"
							/>
						</div>

						<div className="form-control">
							<label className="label">
								<span className="label-text">Password</span>
							</label>
							<input
								type="password"
								// placeholder="password here"
								className="input input-bordered input-primary w-full"
							/>
						</div>

						<div className="form-control">
							<label className="label">
								<span className="label-text">Guests</span>
							</label>
							<textarea className="textarea textarea-primary w-full" />
						</div>

						<div className="divider"></div>

						<button
							type="submit"
							className={`btn btn-ghost text-primary w-full ${
								loading && "loading"
							}`}>
							{!loading && "Create room"}
						</button>
					</form>
				</div>
			</div>
		</>
	);
}

export default NewRoomModal;
