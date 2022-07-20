import { onAuthStateChanged, User } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "./firebase/auth";
import AppBody from "./components/AppBody";
import Login from "./components/Login";

function App() {
	const [user, setUser] = useState<User | undefined | null>(undefined);

	useEffect(() => {
		const unsub = onAuthStateChanged(auth, (user) => {
			if (user) {
				setUser(user);
			} else {
				setUser(null);
			}
		});

		return unsub;
	}, [user]);

	if (user) return <AppBody />;
	if (user === undefined) return <>Loading...</>;
	return <Login></Login>;
}

export default App;
