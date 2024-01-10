import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthenticate } from "../contexts/AuthContext";

export default function Login() {
  const [username, setUsername] = useState("kminchelle");
  const [password, setPassword] = useState("0lelplR");
  const { login, isAuthenticated } = useAuthenticate();

  const navigate = useNavigate();

  function handleClick(e) {
    e.preventDefault();

    if (username && password) login(username, password);
  }
  useEffect(
    function () {
      if (isAuthenticated) {
        console.log("Authenticated");
        navigate("/", { replace: true });
      }
    },
    [isAuthenticated, navigate]
  );

  return (
    <main className="min-h-screen flex items-center -mt-12  justify-center ">
      <form
        onSubmit={handleClick}
        className="max-w-md mx-auto bg-gray-100 py-24 px-20 rounded-xl"
      >
        <div className="mb-4">
          <label
            htmlFor="text"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Email address
          </label>
          <input
            type="text"
            id="email"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
          />
        </div>

        <div>
          <button className="relative py-3 px-4 rounded-lg outline-none overflow-hidden flex items-center justify-center text-white bg-green-500 hover:bg-green-400 focus:ring focus:ring-green-200">
            Login
          </button>
        </div>
      </form>
    </main>
  );
}
