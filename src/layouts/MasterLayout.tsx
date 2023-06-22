/* eslint-disable prettier/prettier */
// import LanguageChanger from "@/components/LanguageChanger";
// import ThemeChanger from "@/components/ThemeChanger";
// import clsx from "clsx";
// import { Dropdown, Navbar } from "react-daisyui";
// import { HiMenuAlt2 } from "react-icons/hi";
// import { Link } from "react-router-dom";
import SuspenseOutlet from "@/components/SuspenseOutlet";
import Nav from "@/components/Nav";
import { useLocation } from "react-router-dom";
import { AppTabs } from "@/components/AppTabs";
import { Container } from "@mantine/core";

export default function MasterLayout(): JSX.Element {
  const location = useLocation();
  console.log(location);
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
      {location.pathname === "/invoices" && (
        <Container className="mx-5 mb-10 mt-32 flex items-center justify-center overflow-hidden rounded-lg bg-violet-200/10 p-0 text-center md:mx-3 md:mt-[4rem] lg:mx-auto">
          <AppTabs />
        </Container>
      )}
      <SuspenseOutlet />

      <div className="fixed bottom-0 mx-auto  my-5 w-full bg-violet-500/30 py-1 text-center text-violet-100 transition duration-300 hover:text-violet-50/50">
        Proudly developed by Taric Ov 💪
        <br />
        <span className="text-xs">
          All Rights Are <b>NOT</b> Reserved 👉 Built in/for Public ... Feel
          Free To Use 🎉
        </span>
      </div>
    </>
  );
}
// TODO: add footer`
// TODO: add one more page for swutching the mode G/T
// TODO: no more for 2-pages solution!!!
