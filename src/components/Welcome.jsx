import { useNavigate } from "react-router-dom";

export default function Welcome() {
  const navigate = useNavigate();

  return (
    <div className="bg-white p-8 rounded-lg shadow-md w-80">
      <h1 className="text-2xl font-bold mb-4">Welcome to PopX</h1>
      <p className="text-gray-500 mb-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <button 
        onClick={() => navigate('/signup')} 
        className="w-full bg-purple-600 text-white py-2 rounded-lg mb-3"
      >
        Create Account
      </button>
      <button 
        onClick={() => navigate('/login')} 
        className="w-full bg-purple-200 text-purple-700 py-2 rounded-lg"
      >
        Already Registered? Login
      </button>
    </div>
  );
}
