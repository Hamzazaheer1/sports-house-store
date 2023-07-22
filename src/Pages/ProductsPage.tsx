import React from "react";

const ProductsPage = () => {
  return (
    <div className="max-w-[1360px] px-10 mx-auto">
      <div className="grid grid-cols-4 gap-2">
        <div className="bg-gray-300 border-2 border-red-500 col-span-1"></div>
        <div className="col-span-3">
          {/* top bar */}
          <div className="w-full bg-blue-500 flex justify-between ">
            <p>Showing 9 results from total 1000000</p>
            <div className="dropdown dropdown-end flex items-center gap-1">
              <p>Sort By</p>
              <label tabIndex={0} className="btn btn-ghost">
                Popularity
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
          {/* cards */}
          <div className="grid grid-cols-3 mt-10 ">
            <div className="card w-72 bg-base-100 shadow-xl">
              <figure>
                <img src="/assets/shoe.jpg" alt="Shoes" />
              </figure>
              <div className="card-body p-4">
                <div className="flex items-center justify-between">
                  <h2 className="card-title">Shoes!</h2>
                  <button className="btn btn-primary">Buy Now</button>
                </div>
                <div className="flex items-center justify-between">
                  <h2 className="">2 Colors</h2>
                </div>
              </div>
            </div>
            <div className="card w-72 bg-base-100 shadow-xl">
              <figure>
                <img src="/assets/shoe.jpg" alt="Shoes" />
              </figure>
              <div className="card-body p-4">
                <div className="flex items-center justify-between">
                  <h2 className="card-title">Shoes!</h2>
                  <button className="btn btn-primary">Buy Now</button>
                </div>
                <div className="flex items-center justify-between">
                  <h2 className="">2 Colors</h2>
                </div>
              </div>
            </div>
            <div className="card w-72 bg-base-100 shadow-xl">
              <figure>
                <img src="/assets/shoe.jpg" alt="Shoes" />
              </figure>
              <div className="card-body p-4">
                <div className="flex items-center justify-between">
                  <h2 className="card-title">Shoes!</h2>
                  <button className="btn btn-primary">Buy Now</button>
                </div>
                <div className="flex items-center justify-between">
                  <h2 className="">2 Colors</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
