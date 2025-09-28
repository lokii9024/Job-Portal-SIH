

// AdminDashboard.jsx
import React, { useMemo, useState } from "react";
import { Routes, Route, Navigate, NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import { FiMenu, FiSearch, FiBell, FiLogOut, FiChevronDown } from "react-icons/fi";
import { FaTachometerAlt, FaUsers, FaBuilding, FaChartBar, FaBriefcase, FaCalendarAlt, FaCog } from "react-icons/fa";

import DashboardHome from "./DashboardHome";
import StudentData from "./StudentData";
import EmployerData from "./EmployerData";
import PlacementData from "./PlacementData";
import JobPostings from "./JobPostings";
import InterviewScheduling from "./InterviewScheduling";

const adminMenu = [
  {
    label: "Overview",
    items: [
      { path: "", label: "Dashboard", icon: <FaTachometerAlt /> },
      { path: "placement", label: "Placement Data", icon: <FaChartBar /> },
    ],
  },
  {
    label: "Records",
    items: [
      { path: "students", label: "Student Data", icon: <FaUsers /> },
      { path: "employers", label: "Employer Data", icon: <FaBuilding /> },
      { path: "jobs", label: "Job Postings", icon: <FaBriefcase /> },
      { path: "interviews", label: "Interview Scheduling", icon: <FaCalendarAlt /> },
    ],
  },
  {
    label: "Settings",
    items: [{ path: "settings", label: "Admin Settings", icon: <FaCog /> }],
  },
];

function SidebarItem({ to, label, icon, collapsed }) {
  return (
    <NavLink
      to={to}
      end={to === ""}
      className={({ isActive }) =>
        [
          "group flex items-center gap-3 rounded-md px-3 py-2 transition",
          isActive ? "bg-indigo-600 text-white shadow" : "text-gray-700 hover:bg-indigo-50 hover:text-indigo-700",
        ].join(" ")
      }
      aria-label={label}
    >
      <span className="text-lg">{icon}</span>
      {!collapsed && <span className="truncate">{label}</span>}
    </NavLink>
  );
}

function Sidebar({ collapsed, setCollapsed }) {
  return (
    <aside
      className={[
        "relative h-screen sticky top-0 shrink-0 border-r border-gray-200 bg-white",
        "transition-[width] duration-200 ease-in-out",
        collapsed ? "w-16" : "w-72",
      ].join(" ")}
      aria-label="Admin navigation"
    >
      {/* Brand + Collapse */}
      <div className="flex items-center justify-between px-3 py-4">
        <div className="flex items-center gap-2">
          {/* <div className="h-8 w-8 rounded-md bg-indigo-600" /> */}
          {!collapsed && <span className="font-bold text-indigo-700 text-lg">Admin</span>}
        </div>
        <button
          onClick={() => setCollapsed((v) => !v)}
          className="inline-flex items-center justify-center rounded-md p-2 hover:bg-gray-100"
          aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          <FiMenu />
        </button>
      </div>

      {/* Groups */}
      <nav className="px-2 space-y-6">
        {adminMenu.map((group) => (
          <div key={group.label}>
            <p className={["px-2 text-xs uppercase tracking-wide text-gray-500", collapsed ? "sr-only" : "block"].join(" ")}>
              {group.label}
            </p>
            <div className="mt-2 space-y-1">
              {group.items.map((item) => (
                <SidebarItem key={item.path} to={item.path} label={item.label} icon={item.icon} collapsed={collapsed} />
              ))}
            </div>
          </div>
        ))}
      </nav>

      {/* User footer */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-gray-200 p-2">
        <button
          className={["w-full flex items-center gap-2 rounded-md px-2 py-2 hover:bg-gray-100", collapsed ? "justify-center" : ""].join(" ")}
          aria-label="Admin user menu"
        >
          <div className="h-7 w-7 rounded-full bg-indigo-200" />
          {!collapsed && (
            <div className="flex-1 text-left">
              <div className="text-sm font-medium">Admin User</div>
              <div className="text-xs text-gray-500">Administrator</div>
            </div>
          )}
          {!collapsed && <FiChevronDown className="text-gray-500" />}
        </button>
      </div>
    </aside>
  );
}

function Topbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // clear any auth/session if needed
    // localStorage.removeItem("admin_token");
    navigate("/", { replace: true });
  };

  return (
    <header className="sticky top-0 z-30 border-b border-gray-200 bg-white/80 backdrop-blur">
      <div className="flex items-center gap-3 px-4 py-3">
        {/* Mobile sidebar button is handled in layout */}
        <div className="relative flex-1 max-w-xl">
          <FiSearch className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="search"
            placeholder="Search students, employers, jobs..."
            className="w-full rounded-md border border-gray-200 bg-white pl-10 pr-3 py-2 text-sm outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
            aria-label="Search"
          />
        </div>

        <div className="ml-auto flex items-center gap-2">
          <button className="relative rounded-md p-2 hover:bg-gray-100" aria-label="Notifications" title="Notifications">
            <FiBell />
            <span className="absolute -right-0 -top-0 inline-flex h-2 w-2 rounded-full bg-red-500" />
          </button>
          <button onClick={handleLogout} className="rounded-md p-2 hover:bg-gray-100" aria-label="Logout" title="Logout">
            <FiLogOut />
          </button>
        </div>
      </div>
    </header>
  );
}

function AdminLayout() {
  const [collapsed, setCollapsed] = useState(false);
  const [sidebarOpenMobile, setSidebarOpenMobile] = useState(false);

  // Optional: persist collapsed preference
  useMemo(() => {
    const saved = localStorage.getItem("admin_sidebar_collapsed");
    if (saved != null) setCollapsed(saved === "true");
  }, []);
  useMemo(() => {
    localStorage.setItem("admin_sidebar_collapsed", String(collapsed));
  }, [collapsed]);

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Desktop sidebar */}
      <div className="hidden md:block">
        <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
      </div>

      {/* Mobile drawer */}
      <div className={["fixed inset-0 z-40 md:hidden", sidebarOpenMobile ? "block" : "hidden"].join(" ")} aria-hidden={!sidebarOpenMobile}>
        <div className="absolute inset-0 bg-black/40" onClick={() => setSidebarOpenMobile(false)} />
        <div className="absolute left-0 top-0 h-full w-72 bg-white shadow-xl">
          <Sidebar collapsed={false} setCollapsed={() => {}} />
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <Topbar />
        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

const AdminDashboard = () => {
  return (
    <Routes>
      <Route element={<AdminLayout />}>
        <Route index element={<DashboardHome />} />
        <Route path="students" element={<StudentData />} />
        <Route path="employers" element={<EmployerData />} />
        <Route path="placement" element={<PlacementData />} />
        <Route path="jobs" element={<JobPostings />} />
        <Route path="interviews" element={<InterviewScheduling />} />
        <Route path="*" element={<Navigate to="." replace />} />
      </Route>
    </Routes>
  );
};

export default AdminDashboard;
