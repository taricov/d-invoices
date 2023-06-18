// import LanguageChanger from "@/components/LanguageChanger";
// import ThemeChanger from "@/components/ThemeChanger";
// import clsx from "clsx";
// import { Dropdown, Navbar } from "react-daisyui";
// import { HiMenuAlt2 } from "react-icons/hi";
// import { Link } from "react-router-dom";
import SuspenseOutlet from "@/components/SuspenseOutlet";
import Nav from "@/components/Nav";

export default function MasterLayout(): JSX.Element {
  return (
    <>
      <Nav />
      {/* <Navbar
        className={clsx(
          "navbar fixed z-20 border-b",
          "border-b-base-200 bg-base-100"
        )}
      >
        <div className="flex-none">
          <label
            htmlFor="side-navbar-drawer-left"
            className={clsx(
              "btn-primary btn-circle btn",
              "btn-ghost drawer-button"
            )}
          >
            <HiMenuAlt2 className="h-5 w-5" />
          </label>
        </div>

        <div className="grow">
          <Link className="ml-2 text-2xl font-bold" to="/">
            {import.meta.env.VITE_APP_NAME}
          </Link>
        </div>

        <div className="flex-none">
          <LanguageChanger className="mr-2" />

          <ThemeChanger className="mr-2" />

          <Dropdown vertical="end">
            <label tabIndex={0} className="btn-ghost btn-circle avatar btn">
              <div className="w-10 rounded-full">
                <img
                  src="https://placeimg.com/40/40/people"
                  loading="lazy"
                  alt="Profile"
                />
              </div>
            </label>

            <Dropdown.Menu className="menu-compact mt-3 w-52 p-2 shadow">
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <Dropdown.Item>Settings</Dropdown.Item>
              <Dropdown.Item>Logout</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </Navbar> */}

      <SuspenseOutlet />

      <div className="fixed bottom-0 mx-auto flex w-full items-center justify-center">
        this is a footer ....
      </div>

    </>
  );
}
// TODO: add footer 
// TODO: add one more page for swutching the mode G/T
// TODO: no more for 2-pages solution!!!
