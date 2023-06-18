/* eslint-disable prettier/prettier */
import AppAccess from "./AppAccess";

interface NavPorps {
  label: string;
  to: string;
}

const Navbar = (): React.ReactElement => {
  const listItems: NavPorps[] = [
    {
      label: "Author",
      to: "/author"
    },
    {
      label: "D-Suite",
      to: "https://github.com/taricov"
    }
  ];
  return (
    <>
      <ul className="md:flex">
        <AppAccess />
        {listItems.map((item) => (
          <li key={item.label}>
            <a
              href={item.to}
              className="relative inline-block w-full rounded px-3 py-2 text-center text-sm font-medium text-white/80 outline-sky-400 transition duration-200 hover:bg-white/5 hover:text-white focus-visible:outline-2 md:w-fit"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
      {/* <AppAccess openConnect={openConnect} setConnect={setConnect}/> */}
    </>
  );
};

export default Navbar;
