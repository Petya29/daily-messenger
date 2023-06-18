import { Fragment, useEffect } from "react";
import { setupSocket } from "./lib/socket";
import { NavBar } from "./components/partials/NavBar";
import { MessengerWrapper } from "./pages/messenger/MessengerWrapper";
import { useAppDispatch } from "./hooks/redux";
import { setUser } from "./store/slices/authSlice";
import { mockUser } from "./mock";

//export const socket = setupSocket();

function App() {
	const dispath = useAppDispatch();

	useEffect(() => {
		dispath(setUser(mockUser));
	}, []);

	return (
		<Fragment>
			<NavBar />
			<main>
				<MessengerWrapper />
			</main>
		</Fragment>
	);
}

export default App;
