import { useState } from "react";
import { ViewListIcon, XIcon } from "@heroicons/react/solid";
import { Logo } from "../assets/img";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed w-screen bg-white drop-shadow-md z-50">
      <nav className="md:flex md:items-center">
        <div className="md:block flex items-center mx-7 my-2">
          <img src={Logo} className="w-1/6" />
          <div className="md:hidden ml-auto mr-4">
            <button type="button" onClick={() => setOpen(!open)}>
              {open ? <XIcon className="w-7 h-7" /> : <ViewListIcon className="w-7 h-7" />}
            </button>
          </div>
        </div>
        <div className="ml-auto relative md:mr-5">
          <ul className={`md:flex ${open ? "block" : "hidden"}`}>
            <li>
              <button
                type="button"
                className="hover:text-cyan-410"
                onClick={() =>
                  window.scrollTo({ top: 0, behavior: "smooth" })
                }
              >
                <p className="md:p-3 md:mx-1 md:ml-0 md:mb-0 font-semibold py-2 pl-2 ml-5 mb-4">
                  Home
                </p>
              </button>
            </li>
            <li>
              <button
                type="button"
                className="hover:text-cyan-410"
                onClick={() =>
                  document
                    .getElementById("about")
                    .scrollIntoView({ behavior: "smooth" })
                }
              >
                <p className="md:p-3 md:mx-1 md:ml-0 md:mb-0 font-semibold py-2 pl-2 ml-5 mb-4">
                  About
                </p>
              </button>
            </li>
            <li>
              <button
                type="button"
                className="hover:text-cyan-410"
                onClick={() =>
                  document
                    .getElementById("feature")
                    .scrollIntoView({ behavior: "smooth" })
                }
              >
                <p className="md:p-3 md:mx-1 md:ml-0 md:mb-0 font-semibold py-2 pl-2 ml-5 mb-4">
                  Features
                </p>
              </button>
            </li>
            <li>
              <button
                type="button"
                className="hover:text-cyan-410"
                onClick={() =>
                  document
                    .getElementById("demo")
                    .scrollIntoView({ behavior: "smooth" })
                }
              >
                <p className="md:p-3 md:mx-1 md:ml-0 md:mb-0 font-semibold py-2 pl-2 ml-5 mb-4">
                  Demo
                </p>
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
