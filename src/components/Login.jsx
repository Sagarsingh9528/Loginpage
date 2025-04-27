import { useState } from "react";

import { useNavigate } from "react-router-dom";

export default function Login() {
  const [loginData, setLoginData] = useState({ email: "", password: "" });
    const navigate = useNavigate();

    const handleChange = (e) => {
      setLoginData({ ...loginData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      const storedUser = JSON.parse(localStorage.getItem("user"));

      if (storedUser?.email === loginData.email && storedUser?.password === loginData.password) {
        localStorage.setItem("isLoggedIn", "true");
        navigate("/AccountSettings");
      } else {
        alert("Invalid Credentials!");
      }
    };

    return (
      <div className="bg-white p-8 rounded-lg shadow-md w-80">
        <h1 className="text-2xl font-bold mb-4">Sign in to your PopX account</h1>
        <p className="text-gray-500 mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <input 
          type="email" 
          placeholder="Enter email address"
          className="w-full border p-2 rounded-lg mb-4"
          onChange={handleChange}
        />
        <input 
          type="password" 
          placeholder="Enter password"
          className="w-full border p-2 rounded-lg mb-6"
          onChange={handleChange}
        />
        <button className="w-full bg-gray-400 text-white py-2 rounded-lg hover:bg-violet-600"
        onClick={()=> navigate("/AccountSettings")}
        >
          Login
        </button>
      </div>
    );
  }
  