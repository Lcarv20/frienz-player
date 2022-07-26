import { useState } from "react";
import Sidebar from "./Sidebar";
import FriendsTab from "./tabs/Friends";
import RoomsTab from "./tabs/Loby";

export type Tabs = "rooms" | "friends";

function AppBody() {
	const [tab, setTab] = useState<Tabs>("rooms");

	const handleTabs = (tab: Tabs) => {
		setTab(tab);
		console.log("setting tab ->", tab);
	};

	return (
		<main className="flex">
			<section className="w-64 flex-shrink-0 h-screen">
				<Sidebar activeTab={tab} handler={handleTabs} />
			</section>
			<section className="flex-grow flex-shrink p-4">
				{tab === "rooms" ? <RoomsTab /> : <FriendsTab />}
				{/* <button
					className="btn btn-primary"
					onClick={async () => {
						alert(
							await invoke("greet", {
								name: "Luís",
							})
						);
					}}>
					Test API
				</button> */}
			</section>
		</main>
	);
}

export default AppBody;
