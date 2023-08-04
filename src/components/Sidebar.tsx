import React from 'react';
import { RxCross2 } from 'react-icons/rx';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectAllSidebar,
  toggleSidebar,
} from '../features/sidebar/sidebarSlice';

function Sidebar() {
  const sideBar = useSelector(selectAllSidebar);
  const dispatch = useDispatch();

  const handleSidebar = () => {
    dispatch(toggleSidebar());
  };

  return (
    <div className={`${sideBar === true ? 'block' : 'hidden'}`}>
      <div className="fixed top-0 left-0 z-50 h-screen w-screen">
        <div className="bg-base-100 w-80 p-4 h-screen">
          <ul className="menu">
            <li>
              <details open>
                <summary>SHOP BY SPORTS</summary>
                <ul>
                  <li>
                    <span>level 3 item 1</span>
                  </li>
                  <li>
                    <details open>
                      <summary>Badminton</summary>
                      <ul>
                        <li>
                          <span>Badminton Accessories</span>
                        </li>
                        <li>
                          <span>Badminton Clothing</span>
                        </li>
                      </ul>
                    </details>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <details open>
                <summary>FOOTWEAR</summary>
                <ul>
                  <li>
                    <span>level 3 item 1</span>
                  </li>
                  <li>
                    <span>level 3 item 2</span>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <details open>
                <summary>SPORTSWEAR</summary>
                <ul>
                  <li>
                    <span>level 3 item 1</span>
                  </li>
                  <li>
                    <span>level 3 item 2</span>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>

        <div className="fixed top-0 left-80 z-40 w-screen h-screen bg-black opacity-50" />
      </div>
      <RxCross2
        className="absolute left-80 top-2 text-white text-3xl z-50 cursor-pointer hover:scale-105 duration-200"
        onClick={handleSidebar}
      />
    </div>
  );
}

export default Sidebar;
