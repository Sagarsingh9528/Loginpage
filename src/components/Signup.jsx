import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [user, setUser] = useState({
    fullName: "",
    email: "",
    password: "",
    phoneNumber: "",
    companyName: "",
    profileImage: "",
    agency: "", 
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUser((prevUser) => ({ ...prevUser, profileImage: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(user));
    navigate("/AccountSettings");
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-md w-80">
      <h1 className="text-2xl font-bold mb-4">Create your PopX account</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          onChange={handleChange}
          value={user.fullName}
          className="w-full border p-2 rounded-lg mb-4"
          required
        />

        <input
          type="text"
          name="phoneNumber"
          placeholder="Phone number"
          onChange={handleChange}
          value={user.phoneNumber}
          className="w-full border p-2 rounded-lg mb-4"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email address"
          onChange={handleChange}
          value={user.email}
          className="w-full border p-2 rounded-lg mb-4"
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          value={user.password}
          className="w-full border p-2 rounded-lg mb-4"
          required
        />

        <input
          type="text"
          name="companyName"
          placeholder="Company name"
          onChange={handleChange}
          value={user.companyName}
          className="w-full border p-2 rounded-lg mb-4"
          required
        />

        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="w-full border p-2 rounded-lg mb-4"
        />

        <div className="mb-4">
          <p className="text-gray-700 mb-2">Are you an Agency?</p>
          <div className="flex items-center space-x-4">
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="agency"
                value="yes"
                checked={user.agency === "yes"}
                onChange={handleChange}
                className="accent-purple-600"
              />
              <span>Yes</span>
            </label>

            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="agency"
                value="no"
                checked={user.agency === "no"}
                onChange={handleChange}
                className="accent-purple-600"
              />
              <span>No</span>
            </label>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-purple-600 text-white py-2 rounded-lg"
        >
          Create Account
        </button>
      </form>
    </div>
  );
}
