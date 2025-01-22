import { useState } from "react";
import { MdOutlineSetMeal } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { IoClose } from "react-icons/io5";
import { Link, NavLink} from "react-router-dom";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <nav className="w-full flex justify-center bg-slate-100 text-black shadow-xl">
      <div className="w-[90%] flex justify-between py-5 ">
        <div className="text-2xl font-bold cursor-pointer text-green-600 flex justify-center items-center gap-1">
          {" "}
          <span className="text-red-600">
            <MdOutlineSetMeal />
          </span>
          SnowFoods
        </div>
        <ul className=" hidden sm:flex gap-5 text-xl text-green-600">
          <a href="#" className="hover:bg-green-100 p-2 rounded-lg">
            <li>About</li>
          </a>
          <a href="#" className="hover:bg-green-100 p-2 rounded-lg">
            <li>Contact Us</li>
          </a>
          <a href="#" className="hover:bg-green-100 p-2 rounded-lg">
            <li>Blog</li>
          </a>
          <button className="bg-green-600 p-2 rounded-2xl text-white flex items-center justify-center font-semibold hover:bg-green-700">
            Sign In{" "}
          </button>
        </ul>
        <button
          className="sm:hidden flex items-center justify-center rounded-md hover:bg-green-100 active:scale-110"
          onClick={toggleDrawer}
        >
          <RxHamburgerMenu className=" text-2xl m-2" />
        </button>
      </div>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="right"
        className="sm:hidden "
      >
        <button onClick={toggleDrawer} className=" text-2xl mt-2 ml-2 active:scale-110">
          <IoClose className="text-gray-600" />
        </button>
        <div>
          <ul className="flex flex-col sm:hidden text-xl text-green-600">            
            <NavLink to="/" className="hover:bg-green-100 py-3" onClick={toggleDrawer}><li className="ml-2">Home</li></NavLink>
            <NavLink to="/About" className="hover:bg-green-100 py-3"  onClick={toggleDrawer}><li className="ml-2">About</li></NavLink>
            <NavLink to="/ContactUs" className="hover:bg-green-100 py-3" onClick={toggleDrawer}><li className="ml-2">Contact Us</li></NavLink>
            <NavLink to="/Blog" className="hover:bg-green-100 py-3" onClick={toggleDrawer}><li className="ml-2">Blog</li></NavLink>
            <button onClick={toggleDrawer} className="bg-green-600 mx-2 mt-2 p-2 rounded-2xl text-white flex items-center justify-center font-semibold hover:bg-green-700">
              Sign In
            </button>
          </ul>
        </div>

      </Drawer>
    </nav>
  );
}
