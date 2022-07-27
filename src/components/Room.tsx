import { FormEvent, useEffect, useState } from "react";

function Room(props: { handleClose: () => void; roomData: any }) {
	const [hidden, setHidden] = useState(true);

	useEffect(() => {
		setHidden(false);
	}, []);

	function closeTab() {
		setHidden(true);
		setTimeout(props.handleClose, 200);
	}

	function handleMessage(ev: FormEvent) {
		ev.preventDefault();
	}

	return (
		<div
			className={`${
				hidden ? "opacity-0 translate-x-64" : "opacity-100 translate-x-0"
			} transition h-screen w-screen absolute left-0 top-0 bg-base-100 flex`}>
			{/* Media container */}
			<div className="grow flex flex-col">
				<button className="btn btn-circle btn-sm m-4" onClick={closeTab}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-5 w-5"
						viewBox="0 0 20 20"
						fill="currentColor">
						<path
							fillRule="evenodd"
							d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
							clipRule="evenodd"
						/>
					</svg>
				</button>
				<div className="h-full p-4 grid grid-cols-4">
					<div className="h-24 w-24 rounded bg-neutral p-2 cursor-pointer">
						<div className="h-full rounded border-2 border-dashed border-base-content/50 flex items-center justify-center">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5 fill-base-content/50"
								viewBox="0 0 20 20"
								fill="currentColor">
								<path
									fillRule="evenodd"
									d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
									clipRule="evenodd"
								/>
							</svg>
						</div>
					</div>
				</div>
			</div>

			{/* Room Sidebar */}
			<div className="shrink-0 ml-auto w-80 border-l border-neutral shadow flex flex-col gap-4 p-4">
				<h1 className="text-xl font-bold text-center">
					#{props.roomData.name}
				</h1>

				{/* Messages hall */}
				<div className="grow shrink flex flex-col gap-4 overflow-y-auto">
					{/* Others message */}
					<div className="flex gap-1">
						<div className="p-2 shrink rounded-lg rounded-tr-none bg-base-300">
							Let's see the video from norway again, I loved it!! 👏☕️
						</div>

						<div className="avatar placeholder">
							<div className="bg-neutral-focus text-neutral-content rounded-full w-8 h-8">
								<span className="text-xs">JA</span>
							</div>
						</div>
					</div>
					{/* My message */}

					<div className="flex gap-1">
						<div className="avatar placeholder">
							<div className="bg-primary-focus text-neutral-content rounded-full w-8 h-8">
								<span className="text-xs">TE</span>
							</div>
						</div>

						<div className="p-2 shrink rounded-lg rounded-tl-none bg-primary-focus">
							Ok!👍
						</div>
					</div>

					<div className="flex gap-1">
						<div className="p-2 shrink rounded-lg rounded-tr-none bg-base-300">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora,
							quam fuga nisi, itaque quasi aperiam incidunt molestiae totam
							praesentium optio exercitationem, tempore non cumque animi ipsum.
							Quia totam voluptatibus velit quibusdam iusto molestiae impedit
							porro vitae ipsum itaque. Exercitationem, voluptates. Vel officia
							dignissimos ipsam iste inventore laudantium voluptatem aut sit.
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Blanditiis praesentium ad quisquam minus sapiente voluptate? Fuga
							explicabo voluptatem voluptate ut at. Illum nemo quasi doloribus,
							odit iste nisi voluptatum quod quo sint necessitatibus omnis
							repellendus? Nesciunt ut earum saepe vitae libero distinctio eius,
							atque adipisci culpa et, maiores error mollitia!
						</div>

						<div className="avatar placeholder">
							<div className="bg-neutral-focus text-neutral-content rounded-full w-8 h-8">
								<span className="text-xs">JA</span>
							</div>
						</div>
					</div>
				</div>

				<form
					onSubmit={handleMessage}
					className="form-control flex-row items-end gap-2">
					<div className="input-group">
						<div
							className="textarea textarea-bordered bg-base-300 grow overflow-scroll max-h-40"
							contentEditable></div>
						{/* <textarea
						placeholder="message"
						rows={2}
						className="textarea textarea-bordered grow"
					/> */}
						<button className="btn btn-square place-self-end hover:btn-primary">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5 rotate-90 "
								viewBox="0 0 20 20"
								fill="currentColor">
								<path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
							</svg>
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}

export default Room;
