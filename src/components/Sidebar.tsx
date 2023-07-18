import { RxCross2 } from "react-icons/rx";
import { useSelector, useDispatch } from "react-redux";
import {
  selectAllSidebar,
  toggleSidebar,
} from "../features/sidebar/sidebarSlice";

const Sidebar = () => {
  const sideBar = useSelector(selectAllSidebar);
  const dispatch = useDispatch();

  const handleSidebar = () => {
    dispatch(toggleSidebar());
  };

  return (
    <div className={`${sideBar === true ? "block" : "hidden"}`}>
      <div className="fixed top-0 left-0 z-50 h-screen w-screen">
        <div className="bg-base-100 w-80 p-4 h-screen">
          <ul className="menu">
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <details open>
                <summary>Parent</summary>
                <ul>
                  <li>
                    <a>level 2 item 1</a>
                  </li>
                  <li>
                    <a>level 2 item 2</a>
                  </li>
                  <li>
                    <details open>
                      <summary>Parent</summary>
                      <ul>
                        <li>
                          <a>level 3 item 1</a>
                        </li>
                        <li>
                          <a>level 3 item 2</a>
                        </li>
                      </ul>
                    </details>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>

        <div className="fixed top-0 left-80 z-40 w-screen h-screen bg-black opacity-50"></div>
      </div>
      <RxCross2
        className="absolute left-80 top-2 text-white text-3xl z-50 cursor-pointer hover:scale-105 duration-200"
        onClick={handleSidebar}
      />
    </div>
  );
};

export default Sidebar;
