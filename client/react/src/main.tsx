import ReactDOM from "react-dom/client";
import { Suspense } from "react";
import { LoadingScreen } from "./pages/loading/LoadingScreen.tsx";
import { store } from "./store/index.ts";
import { Provider } from "react-redux";
import App from "./App.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<Suspense fallback={<LoadingScreen />}>
		<Provider store={store}>
			<App />
		</Provider>
	</Suspense>
);
