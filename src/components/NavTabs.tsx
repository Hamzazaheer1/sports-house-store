import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectAllSidebar,
  toggleSidebar,
} from '../features/sidebar/sidebarSlice';

function NavTabs() {
  const sidebarState = useSelector(selectAllSidebar);
  console.log(sidebarState);
  const dispatch = useDispatch();

  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabIndex: number) => {
    setActiveTab(tabIndex);
    if (tabIndex === 1) {
      dispatch(toggleSidebar());
    }
  };

  return (
    <div className="tabs tabs-boxed bg-secondary rounded-none">
      <a
        className={`tab text-white flex gap-1 ${
          activeTab === 1 ? 'tab-active' : ''
        }`}
        onClick={() => handleTabClick(1)}
      >
        <GiHamburgerMenu />
        {' '}
        All
      </a>
      <a
        className={`tab text-white ${activeTab === 2 ? 'tab-active' : ''}`}
        onClick={() => handleTabClick(2)}
      >
        Tab 2
      </a>
      <a
        className={`tab text-white ${activeTab === 3 ? 'tab-active' : ''}`}
        onClick={() => handleTabClick(3)}
      >
        Tab 3
      </a>
    </div>
  );
}

export default NavTabs;
