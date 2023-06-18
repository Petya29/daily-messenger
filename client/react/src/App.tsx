import { Fragment } from "react";
import { setupSocket } from "./lib/socket";
import { NavBar } from "./components/partials/NavBar";
import { MessengerWrapper } from "./pages/messenger/MessengerWrapper";

//export const socket = setupSocket();

function App() {
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
