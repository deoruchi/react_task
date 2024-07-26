import React from "react";
import { Outlet, redirect, useNavigate } from "react-router-dom";

export const Layout = () => {
  const navigate = useNavigate();
  return (
    <div>
      <section>
        <h1>Welcome</h1>
        <h2>Task Assignment Solutions</h2>
        <button
          onClick={() => {
            navigate("/otp-form");
          }}
          className=" p-2 bg-orange-500 rounded-sm mx-2 hover:bg-orange-400"
        >
          OTP- FORM
        </button>
        <button
          onClick={() => {
            navigate("/course-list");
          }}
          className=" p-2 bg-orange-500 rounded-sm mx-2 hover:bg-orange-400"
        >
          Course List
        </button>
        <button
          onClick={() => {
            navigate("/batches");
          }}
          className=" p-2 bg-orange-500 rounded-sm mx-2 hover:bg-orange-400"
        >
          Batches
        </button>
      </section>
      <Outlet />
    </div>
  );
};
