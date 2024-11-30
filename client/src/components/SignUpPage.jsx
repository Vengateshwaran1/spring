import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

const SignUpPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/api/auth/signup", {
        email,
        name,
        password,
      });
      alert(response.data); // Show success message
      navigate("/login"); // Redirect to login page
    } catch (err) {
      setError(err.response?.data || "An error occurred");
    }
  };

  return (
    <div className="min-h-screen flex items-center gap-y-8 justify-center bg-[#1e1e1e]">
      <div className="max-w-md flex flex-col w-full bg-[#2c2c2c] p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-6 text-center text-white">Sign Up</h1>
        {error && <p className="text-red-500">{error}</p>}
        <form onSubmit={handleSignUp}>
          <label htmlFor="email" className="block text-sm font-medium text-[#dcdcdc]">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-[#333333] rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#5a5a5a]"
            required
          />
          <label htmlFor="name" className="block text-sm font-medium text-[#dcdcdc]">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-[#333333] rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#5a5a5a]"
            required
          />
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-[#dcdcdc]">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-[#333333] rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#5a5a5a]"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#4e4e4e] text-white py-2 px-4 rounded-lg hover:bg-[#5a5a5a] focus:outline-none focus:ring-2 focus:ring-[#5a5a5a]"
          >
            Sign Up
          </button>
          <div className="text-center mt-2">
            <p className="text-white">
              Already have an account?{" "}
              <Link to="/login" className="text-blue-600">
                Sign in
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
