import React from "react";
import "./App.css";
import { useNavigate } from "react-router-dom";

export const Layout = () => {
  const navigate = useNavigate();
  return (
    <div>
      <section className="flex justify-center items-center flex-col m-[5%]">
        <h1 className="text-[80px]">Welcome</h1>
        <h2 className="text-[40px] font-light text-slate-600">
          Task Assignment Solutions
        </h2>
        <div className="m-5">
          <button
            onClick={() => {
              navigate("/otp-form");
            }}
            className=" p-2 bg-orange-500 rounded-lg text-white mx-2 hover:bg-orange-400"
          >
            OTP- FORMs
          </button>
          <button
            disabled
            onClick={() => {
              navigate("/course-list");
            }}
            className=" p-2 bg-orange-500 rounded-lg  text-white mx-2 hover:bg-orange-400"
          >
            Course List
          </button>
          <button
            onClick={() => {
              navigate("/batches");
            }}
            disabled
            className=" p-2 bg-orange-500 rounded-lg text-white mx-2 hover:bg-orange-400"
          >
            Batches
          </button>
        </div>
      </section>
    </div>
  );
};
