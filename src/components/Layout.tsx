import { useState } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { Button } from "@tremor/react";
import { useAuth } from "../app/providers/auth";
import {
  LayoutDashboard,
  Table2,
  Database,
  BarChart3,
  Settings,
  LogOut,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const navItems = [
  { path: "/", label: "Dashboard", icon: LayoutDashboard },
  { path: "/tables", label: "Tablas", icon: Table2 },
  { path: "/query", label: "Query Builder", icon: Database },
  { path: "/visualizations", label: "Visualizaciones", icon: BarChart3 },
  { path: "/settings", label: "Configuración", icon: Settings },
];

export default function Layout() {
  const [collapsed, setCollapsed] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="flex h-screen bg-gray-50">
      <aside
        className={`flex flex-col border-r border-gray-200 bg-white transition-all ${
          collapsed ? "w-16" : "w-60"
        }`}
      >
        <div className="flex h-14 items-center justify-between border-b border-gray-200 px-3">
          {!collapsed && (
            <span className="text-lg font-bold text-gray-900">SyJDWH</span>
          )}
          <button
            className="rounded p-1 text-gray-400 hover:bg-gray-100"
            onClick={() => setCollapsed(!collapsed)}
          >
            {collapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
          </button>
        </div>

        <nav className="flex-1 space-y-1 p-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = location.pathname === item.path;
            return (
              <button
                key={item.path}
                onClick={() => navigate(item.path)}
                className={`flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors ${
                  active
                    ? "bg-blue-50 text-blue-700"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                <Icon size={18} />
                {!collapsed && item.label}
              </button>
            );
          })}
        </nav>

        <div className="border-t border-gray-200 p-2">
          <div className="flex items-center gap-3 rounded-lg px-3 py-2">
            <img
              src={user?.photoURL || ""}
              alt=""
              className="h-7 w-7 rounded-full"
            />
            {!collapsed && (
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium text-gray-900">
                  {user?.displayName || "Usuario"}
                </p>
                <p className="truncate text-xs text-gray-500">{user?.email}</p>
              </div>
            )}
          </div>
          <Button
            variant="secondary"
            className="mt-1 w-full"
            onClick={logout}
          >
            <LogOut size={16} />
            {!collapsed && <span className="ml-2">Salir</span>}
          </Button>
        </div>
      </aside>

      <main className="flex-1 overflow-auto">
        <div className="p-6">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
