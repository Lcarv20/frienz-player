import { signOut } from "firebase/auth";
import reactLogo from "../assets/react.svg";
import { auth } from "../firebase/auth";
import { invoke } from "@tauri-apps/api";

function AppBody() {
	async function logout() {
		try {
			await signOut(auth);
		} catch (error) {
			alert("An error ocurred while logging out, try again");
		}
	}

	return (
		<div>
			<button className="btn btn-warning" onClick={logout}>
				Logout
			</button>
			<button
				className="btn btn-primary"
				onClick={async () => {
					alert(
						await invoke("greet", {
							name: "Luís",
						})
					);
				}}>
				Test API
			</button>
			<img src={reactLogo} alt="img" />
		</div>
	);
}

export default AppBody;
