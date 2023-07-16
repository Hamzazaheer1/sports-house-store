import { IoLocationSharp } from "react-icons/io5";
import { BiSearchAlt2 } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";

export const Navbar = () => {
  return (
    <div className="navbar bg-gray-800 flex justify-between">
      <div className="">
        <a className="btn btn-ghost normal-case text-xl text-white">
          Sports House
        </a>
        <div className="text-white flex items-end justify-center">
          <IoLocationSharp className="text-2xl pb-1" />
          <div>
            <p className="text-gray-400 text-xs">Deliver only </p>
            <h1 className="font-semibold">in Pakistan</h1>
          </div>
        </div>
      </div>

      <div className="relative w-auto md:w-[1100px]">
        <div className="absolute top-0 left-0">
          <div className="dropdown text-gray-400 z-20 hover:text-gray-500">
            <label tabIndex={0} className="btn h-10 min-h-[40px]">
              All <IoIosArrowDown />
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Item 2</a>
              </li>
            </ul>
          </div>
        </div>
        <input
          type="text"
          className="h-10 pl-24 pr-20 rounded-lg z-0 focus:shadow focus:outline-none w-auto md:w-[1100px]"
          placeholder="Search anything..."
        />
        <div className="absolute top-0 right-0">
          <button className="h-10 w-16 rounded-r-lg bg-yellow-500 hover:bg-yellow-600 flex justify-center items-center">
            <BiSearchAlt2 className="font-semibold text-2xl" />
          </button>
        </div>
      </div>
      <div className="gap-2">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="badge badge-sm indicator-item">8</span>
            </div>
          </label>
          <div
            tabIndex={0}
            className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
          >
            <div className="card-body">
              <span className="font-bold text-lg">8 Items</span>
              <span className="text-info">Subtotal: $999</span>
              <div className="card-actions">
                <button className="btn btn-primary btn-block">View cart</button>
              </div>
            </div>
          </div>
        </div>
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="/assets/profilepic.jpg" />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
