import { signOut } from "firebase/auth";
import { auth } from "../firebase/auth";
import { Tabs } from "./AppBody";

function Sidebar(props: { handler: (tab: Tabs) => void }) {
	async function logout() {
		try {
			await signOut(auth);
		} catch (error) {
			alert("An error ocurred while logging out, try again");
		}
	}
	return (
		<div className="w-full h-full bg-base-300 p-4 flex flex-col items-center space-y-6">
			<div className="basis-1/5 flex justify-center items-center">
				<div className="avatar placeholder">
					<div className="bg-black glass text-neutral-content rounded-full w-16 ring-1 ring-primary ring-offset-base-100 ring-offset-2">
						<span className="text-xl">JO</span>
					</div>
				</div>
			</div>
			<ul className="w-full flex-1 flex flex-col gap-2 text-primary">
				<li
					onClick={() => props.handler("rooms")}
					className="flex p-2 items-center cursor-pointer hover:bg-neutral-content/25 rounded">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-5 w-5"
						viewBox="0 0 20 20"
						fill="currentColor">
						<path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
					</svg>
					<span className="mx-auto text-xs font-semibold uppercase">Rooms</span>
				</li>

				<li
					onClick={() => props.handler("friends")}
					className="flex p-2 items-center cursor-pointer hover:bg-neutral-content/25 rounded">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-5 w-5"
						viewBox="0 0 20 20"
						fill="currentColor">
						<path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
					</svg>
					<span className="mx-auto uppercase text-xs font-semibold">
						Friends
					</span>
				</li>

				<li
					onClick={logout}
					className="flex p-2 items-center bg-primary text-primary-content cursor-pointer hover:bg-blend-luminosity rounded mt-auto">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-5 w-5"
						viewBox="0 0 20 20"
						fill="currentColor">
						<path
							fillRule="evenodd"
							d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
							clipRule="evenodd"
						/>
					</svg>
					<span className="mx-auto uppercase text-xs font-semibold">
						Logout
					</span>
				</li>
			</ul>
		</div>
	);
}

export default Sidebar;
