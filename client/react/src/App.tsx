import { Fragment } from "react"
import { setupSocket } from "./lib/socket"
import { NavBar } from "./components/partials/NavBar"

//export const socket = setupSocket();

function App() {
  return (
    <Fragment>
      <NavBar />
      <main>Hello React</main>
    </Fragment>
  )
}

export default App
