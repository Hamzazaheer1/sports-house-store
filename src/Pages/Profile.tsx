import React from "react";
import { MdEmail, MdPhone } from "react-icons/md";

const Profile = () => {
  return (
    <div className="grid grid-cols-4 gap-8 m-8">
      <div className="bg-white p-8 flex flex-col gap-5 col-span-1 rounded-lg mb-10">
        <img
          src="/assets/profilepic.jpg"
          alt="image"
          className="w-20 h-20 rounded-lg"
        />
        <h4 className="font-semibold text-lg">Jese Leos</h4>
        <div>
          <p className="text-gray-500">Email address</p>
          <div className="flex items-center gap-2">
            <MdEmail />
            <p>hese@gmail.com</p>
          </div>
        </div>
        <div>
          <p className="text-gray-500">Phone number</p>
          <div className="flex items-center gap-2">
            <MdPhone />
            <p>+92 333 5224777</p>
          </div>
        </div>
        <div>
          <p className="text-gray-500">Home Address</p>
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
            <label className="label">
              <span className="text-base label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Name"
              className="w-full input input-bordered bg-gray-100"
            />
          </div>
          <div className="flex gap-6 w-full">
            <div className="w-full">
              <label className="label">
                <span className="text-base label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="Email Address"
                className="w-full input input-bordered bg-gray-100"
              />
            </div>
            <div className="w-full">
              <label className="label">
                <span className="text-base label-text">Phone Number</span>
              </label>
              <input
                type="text"
                placeholder="Phone Number"
                className="w-full input input-bordered bg-gray-100"
              />
            </div>
          </div>
          <div className="flex gap-6 w-full">
            <div className="w-full">
              <label className="label">
                <span className="text-base label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Enter Password"
                className="w-full input input-bordered bg-gray-100"
              />
            </div>
            <div className="w-full">
              <label className="label">
                <span className="text-base label-text">Confirm Password</span>
              </label>
              <input
                type="password"
                placeholder="Confirm Password"
                className="w-full input input-bordered bg-gray-100"
              />
            </div>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Home Address</span>
            </label>
            <textarea
              className="textarea textarea-bordered h-24 bg-gray-100"
              placeholder="Home Address"
            ></textarea>
          </div>
          <div>
            <button className="btn btn-block">Update Profile</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;
