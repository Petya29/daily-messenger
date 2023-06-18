import { Inline } from "../ui/layout";
import { AppBar } from "../ui/surfaces";

export const NavBar = () => {
  return (
    <AppBar position="sticky" className="z-[1100] bg-[#272727]">
        <nav className="flex justify-between py-2 px-4">
            <span>Daily Messenger</span>
            <Inline>
                <span>user</span>
                <span>actions</span>
                <span>etc...</span>
            </Inline>
        </nav>
    </AppBar>
  )
}
