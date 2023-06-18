import { Fragment, useEffect } from "react";
import { setupSocket } from "./lib/socket";
import { NavBar } from "./components/partials/NavBar";
import { MessengerWrapper } from "./pages/messenger/MessengerWrapper";
import { useAppDispatch, useAppSelector } from "./hooks/redux";
import { setUser } from "./store/slices/authSlice";
import { mockUser } from "./mock";
import { LoadingScreen } from "./pages/loading/LoadingScreen";

//export const socket = setupSocket();

function App() {
	const dispath = useAppDispatch();

	const { isAuthChecking } = useAppSelector(state => state.auth);
 
	useEffect(() => {
		dispath(setUser(mockUser));
	}, []);

	if (isAuthChecking) return <LoadingScreen />

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
