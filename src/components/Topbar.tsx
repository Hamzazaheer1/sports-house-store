import React from 'react';
import { BsTelephone } from 'react-icons/bs';

function Topbar() {
  return (
    <div className="bg-secondary h-9 py-[7px] ">
      <div className="max-w-[1360px] mx-auto flex items-center gap-1 text-white text-[12px] leading-6 px-10">
        <BsTelephone />
        <p>+001234567890</p>
      </div>
    </div>
  );
}

export default Topbar;
