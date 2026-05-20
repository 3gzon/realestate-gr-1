import React, { useState } from "react";
import { registerUser } from "../services/auth";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!fullName && !email && !password) {
      setError("please fill all fields");
      return
    }
   

    registerUser({ fullName, email, password }).then((result) => {
      console.log(result);
      navigate('/login');
    });
  }
  return (
    <main className="py-12 px-4">
      <div className="max-w-md mx-auto">
        <h1>
          create an accout
        </h1>
        <form onSubmit={handleSubmit} className="p-5 rounded-xl shadow-2xl border border-gray-200 space-y-5">
          {error &&
            <p className="rounded-lg bg-red-300 text-red-700">
            {error}
          </p>

          }
          <label htmlFor="" className="block">
            <span className="block text-sm font-medium text-gray-700 mb-1">Full Name</span>
            <input
              value={fullName}
              onChange={(e)=>{setFullName(e.target.value)}}
              type="text" className="w-full rounded-lg border border-gray-300 py-2" />
          </label>
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
          <button className="bg-blue-600 rounded-lg py-2 hover:bg-blue-800 text-white w-full" type="submit">register</button>
        </form>
      </div>
    </main>
  )
}

export default Register;
