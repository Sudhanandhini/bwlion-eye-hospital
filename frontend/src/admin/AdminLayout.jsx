import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { LogOut } from "lucide-react";
import { clearToken } from "./auth";

const navItems = [
  { to: "/admin/doctors", label: "Doctors" },
  { to: "/admin/gallery", label: "Gallery" },
  { to: "/admin/leadership", label: "Leadership" },
  { to: "/admin/career", label: "Career" },
  { to: "/admin/popup", label: "Popup" },
];

export default function AdminLayout() {
  const navigate = useNavigate();

  const logout = () => {
    clearToken();
    navigate("/admin/login", { replace: true });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <aside className="w-60 bg-primary text-white flex flex-col fixed left-0 top-0 h-screen overflow-y-auto">
        <div className="p-5 border-b border-white/10">
          <p className="font-bold !text-[18px]">Admin Panel</p>
          <p className="text-gray-300 !text-[13px]">BW Lions Eye Hospital</p>
        </div>
        <nav className="flex-1 p-3 space-y-1">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `block px-4 py-2.5 rounded-md !text-[15px] font-medium transition-colors ${
                  isActive ? "bg-white/15 text-white" : "text-gray-300 hover:bg-white/10 hover:text-white"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        <button
          onClick={logout}
          className="m-3 flex items-center gap-2 px-4 py-2.5 rounded-md text-gray-300 hover:bg-white/10 hover:text-white !text-[15px]"
        >
          <LogOut size={16} /> Logout
        </button>
      </aside>
      <main className="ml-60 p-8">
        <Outlet />
      </main>
    </div>
  );
}
