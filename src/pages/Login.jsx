import React, { useState } from "react";
import { loginUser } from "../services/auth";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    loginUser(email, password)
      .then(() => {
        window.location.href = "/";
      }).catch((error) => {
        setError(error);
    })
  }
  return (
    <main className="px-4 py-12">
      <div className="max-w-md mx-auto">
        <h1>Sign in</h1>
        <form onSubmit={handleSubmit} className="p-5 rounded-xl shadow-2xl border border-gray-200 space-y-5">
          
        <label htmlFor="" className="block">
            <span className="block text-sm font-medium text-gray-700 mb-1">Email</span>
            <input
              value={email}
              onChange={(e)=>{setEmail(e.target.value)}}
              type="text" className="w-full rounded-lg border border-gray-300 py-2" />
          </label>
          <label htmlFor="" className="block">
            <span className="block text-sm font-medium text-gray-700 mb-1">Password</span>
            <input
              value={password}
              onChange={(e)=>{setPassword(e.target.value)}}
              type="password" className="w-full rounded-lg border border-gray-300 py-2" />
          </label>
          <button className="bg-blue-600 rounded-lg py-2 hover:bg-blue-800 text-white w-full" type="submit">login</button>

        </form>
      </div>
    </main>
  )
}

export default Login;
