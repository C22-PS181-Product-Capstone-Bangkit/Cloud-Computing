import { useState } from "react";
import { HashLink } from "react-router-hash-link";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed w-screen bg-white drop-shadow-md">
      <nav className="md:flex md:items-center">
        <div className="md:block flex items-center m-5">
          <p className="p-2.5 md:p-3">Navigasi</p>
          <div className="md:hidden ml-auto mr-4">
            <button onClick={() => setOpen(!open)}>{open ? "X" : "Y"}</button>
          </div>
        </div>
        <div className="ml-auto relative md:mr-5">
          <ul className={`md:flex ${open ? "block" : "hidden"}`}>
            <li>
              <HashLink className="hover:text-blue-610" to="#home">
                <p className="md:p-3 md:mx-1 md:ml-0 md:mb-0 font-semibold py-2 pl-2 ml-5 mb-4">
                  Beranda
                </p>
              </HashLink>
            </li>
            <li>
              <HashLink className="hover:text-blue-610" to="#about">
                <p className="md:p-3 md:mx-1 md:ml-0 md:mb-0 font-semibold py-2 pl-2 ml-5 mb-4">
                  Tentang
                </p>{" "}
              </HashLink>
            </li>
            <li>
              <HashLink className="hover:text-blue-610" to="#feature">
                <p className="md:p-3 md:mx-1 md:ml-0 md:mb-0 font-semibold py-2 pl-2 ml-5 mb-4">
                  Fitur
                </p>
              </HashLink>
            </li>
            <li>
              <HashLink className="hover:text-blue-610" to="#demo">
                <p className="md:p-3 md:mx-1 md:ml-0 md:mb-0 font-semibold py-2 pl-2 ml-5 mb-4">
                  Demo
                </p>
              </HashLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
