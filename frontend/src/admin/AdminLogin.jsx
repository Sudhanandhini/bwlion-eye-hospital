import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "./api";
import { setToken, setRole } from "./auth";

export default function AdminLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const { token, role } = await api.login(username, password);
      setToken(token);
      setRole(role);
      navigate("/admin/doctors", { replace: true });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-8 w-full max-w-sm">
        <h1 className="text-primary !text-[26px] font-bold mb-1">Admin Login</h1>
        <p className="text-gray-500 !text-[14px] mb-6">Bangalore West Lions Eye Hospital</p>
        {error && <p className="text-red-600 !text-[14px] mb-4">{error}</p>}
        <label className="block text-gray-700 !text-[14px] font-medium mb-1">Username</label>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full border border-gray-300 rounded-md px-3 py-2 mb-4 !text-[15px] focus:outline-none focus:border-primary"
          required
        />
        <label className="block text-gray-700 !text-[14px] font-medium mb-1">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border border-gray-300 rounded-md px-3 py-2 mb-6 !text-[15px] focus:outline-none focus:border-primary"
          required
        />
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-primary text-white rounded-md py-2.5 font-medium !text-[15px] disabled:opacity-60"
        >
          {loading ? "Signing in..." : "Sign In"}
        </button>
      </form>
    </div>
  );
}
