import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { BiSearchAlt2 } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toggleSidebar } from "../features/sidebar/sidebarSlice";

export const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabIndex: number) => {
    setActiveTab(tabIndex);
    if (tabIndex === 1) {
      dispatch(toggleSidebar());
    }
  };

  return (
    <div className="navbar flex flex-col md:flex-row justify-between h-[82px] py-[15px] max-w-[1360px] mx-auto px-10">
      <div className="flex justify-between md:justify-start w-full">
        <a
          className="btn btn-ghost normal-case text-xl text-secondary font-bold px-0"
          onClick={() => {
            navigate("/");
          }}
        >
          Sports House
        </a>
        <div className="tabs  text-text-color rounded-none">
          <a
            className={`tab flex gap-1 ${activeTab === 1 ? "tab-active" : ""}`}
            onClick={() => handleTabClick(1)}
          >
            Category <GiHamburgerMenu />
          </a>
          <a
            className={`tab ${activeTab === 2 ? "tab-active" : ""}`}
            onClick={() => handleTabClick(2)}
          >
            What's New
          </a>
          <a
            className={`tab ${activeTab === 3 ? "tab-active" : ""}`}
            onClick={() => handleTabClick(3)}
          >
            Delivery
          </a>
        </div>
      </div>
      <div className="gap-2 w-full flex justify-end">
        <div className="relative w-full md:w-[300px] lg:w-96">
          <input
            type="text"
            className="h-10 px-4 rounded-3xl z-0 focus:shadow focus:outline-none w-full md:w-[300px] lg:w-96 border-2"
            placeholder="Search anything..."
          />
          <div className="absolute top-0 right-0">
            <button className="h-10 w-16 rounded-r-3xl bg-secondary hover:bg-yellow-600 text-white flex justify-center items-center">
              <BiSearchAlt2 className="font-semibold text-2xl" />
            </button>
          </div>
        </div>
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-text-color"
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
              <a
                className="justify-between"
                onClick={() => {
                  navigate("/profile");
                }}
              >
                Profile
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
        <button
          className="bg-secondary text-white hover:bg-yellow-600 py-2 px-3 rounded-md"
          onClick={() => {
            navigate("/login");
          }}
        >
          Sign in
        </button>
      </div>
    </div>
  );
};
