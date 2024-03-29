import React from 'react';
import { MdEmail, MdPhone } from 'react-icons/md';

function Profile() {
  return (
    <div className="grid grid-cols-4 gap-8 m-8 px-10 max-w-[1360px] mx-auto">
      <div className="bg-gray-500 p-8 flex flex-col gap-5 col-span-1 rounded-lg mb-10 text-white">
        <img
          src="/assets/profilepic.jpg"
          alt="profilepic"
          className="w-20 h-20 rounded-lg"
        />
        <h4 className="font-semibold text-lg">Jese Leos</h4>
        <div>
          <p className="">Email address</p>
          <div className="flex items-center gap-2">
            <MdEmail />
            <p>hese@gmail.com</p>
          </div>
        </div>
        <div>
          <p className="">Phone number</p>
          <div className="flex items-center gap-2">
            <MdPhone />
            <p>+92 333 5224777</p>
          </div>
        </div>
        <div>
          <p className="">Home Address</p>
          <div className="flex items-center gap-2">
            <MdPhone />
            <p>House f5534 Sattlite town rwp</p>
          </div>
        </div>
      </div>
      <div className="bg-white p-8 col-span-3 rounded-lg mb-10">
        <h4 className="mb-4 text-xl font-bold text-gray-900 ">
          Profile Setting
        </h4>
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="label">
              <span className="text-base label-text">Name</span>
              <input
                type="text"
                id="name"
                placeholder="Name"
                className="w-full input input-bordered bg-gray-100"
              />
            </label>
          </div>
          <div className="flex gap-6 w-full">
            <div className="w-full">
              <label htmlFor="email" className="label">
                <span className="text-base label-text">Email</span>
                <input
                  id="email"
                  type="text"
                  placeholder="Email Address"
                  className="w-full input input-bordered bg-gray-100"
                />
              </label>
            </div>
            <div className="w-full">
              <label htmlFor="phone" className="label">
                <span className="text-base label-text">Phone Number</span>
                <input
                  id="phone"
                  type="text"
                  placeholder="Phone Number"
                  className="w-full input input-bordered bg-gray-100"
                />
              </label>
            </div>
          </div>
          <div className="flex gap-6 w-full">
            <div className="w-full">
              <label htmlFor="password" className="label">
                <span className="text-base label-text">Password</span>
                <input
                  id="password"
                  type="password"
                  placeholder="Enter Password"
                  className="w-full input input-bordered bg-gray-100"
                />
              </label>
            </div>
            <div className="w-full">
              <label htmlFor="cpassword" className="label">
                <span className="text-base label-text">Confirm Password</span>
                <input
                  id="cpassword"
                  type="password"
                  placeholder="Confirm Password"
                  className="w-full input input-bordered bg-gray-100"
                />
              </label>
            </div>
          </div>
          <div className="form-control">
            <label htmlFor="address" className="label">
              <span className="label-text">Home Address</span>
              <textarea
                id="address"
                className="textarea textarea-bordered h-24 bg-gray-100"
                placeholder="Home Address"
              />
            </label>
          </div>
          <div>
            <button type="button" className="btn btn-block">
              Update Profile
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Profile;
