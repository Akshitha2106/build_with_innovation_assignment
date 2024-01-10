import React from "react";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <>
      <button
        className="m-12 relative py-3 px-5 rounded-lg outline-none overflow-hidden flex items-center justify-center text-white bg-green-500 hover:bg-green-400 focus:ring focus:ring-green-200"
        onClick={() => navigate(-1)}
      >
        Go Back
      </button>
      <div>
        <h1 className="text-5xl flex justify-center">NotFound :(</h1>
      </div>
    </>
  );
}
