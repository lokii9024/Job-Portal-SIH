

// StudentDashboard.jsx
import React, { useState, useMemo } from "react";
import { Routes, Route, Navigate, useLocation, NavLink, Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// import { FiMenu, FiSearch, FiBell, FiSun, FiMoon, FiLogOut } from "react-icons/fi";
import {
  FiMenu,
  FiSearch,
  FiBell,
  FiSun,
  FiMoon,
  FiLogOut,
  FiChevronDown,
} from "react-icons/fi";
import {
  FaUserGraduate,
  FaUser,
  FaFileAlt,
  FaClipboardList,
  FaChalkboardTeacher,
  FaAward,
  FaLightbulb,
  FaComments,
  FaStar,
} from "react-icons/fa";

// Page modules
import DashboardHome from "./DashboardHome";
import Profile from "./Profile";
import Resume from "./Resume";
import Applications from "./Applications";
import Mentors from "./Mentors";
import Projects from "./Projects";
import JobRecommendations from "./JobRecommendations";
import JobForum from "./JobForum";
import Reviews from "./Reviews";

const menu = [
  { path: "", label: "Dashboard", icon: <FaUserGraduate /> },
  { path: "profile", label: "View Profile", icon: <FaUser /> },
  { path: "resume", label: "Your Resume/CV", icon: <FaFileAlt /> },
  { path: "applications", label: "Your Applications", icon: <FaClipboardList /> },
  { path: "mentors", label: "Your Mentors", icon: <FaChalkboardTeacher /> },
  { path: "projects", label: "Projects & Certifications", icon: <FaAward /> },
  { path: "recommendations", label: "Job Recommendations", icon: <FaLightbulb /> },
  { path: "forum", label: "Job Forum", icon: <FaComments /> },
  { path: "reviews", label: "Your Reviews", icon: <FaStar /> },
];

function SidebarItem({ to, label, icon, collapsed }) {
  return (
    <NavLink
      to={to}
      end={to === ""}
      className={({ isActive }) =>
        [
          "group flex items-center gap-3 rounded-md px-3 py-2 transition",
          isActive
            ? "bg-indigo-600 text-white shadow"
            : "text-gray-700 hover:bg-indigo-50 hover:text-indigo-700",
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
  const location = useLocation();

  return (
    <aside
      className={[
        "relative h-screen sticky top-0 shrink-0 border-r border-gray-200 bg-white",
        "transition-[width] duration-200 ease-in-out",
        collapsed ? "w-16" : "w-64",
      ].join(" ")}
      aria-label="Student navigation"
    >
      {/* Brand + Collapse */}
      <div className="flex items-center justify-between px-3 py-4">
        <div className="flex items-center gap-2">
          {!collapsed && <span className="font-bold text-indigo-700 text-lg">Job-Portal</span>}
        </div>
        <button
          onClick={() => setCollapsed((v) => !v)}
          className="inline-flex items-center justify-center rounded-md p-2 hover:bg-gray-100"
          aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          <FiMenu />
        </button>
      </div>

      {/* Nav */}
      <nav className="px-2">
        <p
          className={[
            "px-2 text-xs uppercase tracking-wide text-gray-500",
            collapsed ? "sr-only" : "block",
          ].join(" ")}
        >
          Menu
        </p>
        <div className="mt-2 space-y-1">
          {menu.map((item) => (
            <SidebarItem
              key={item.path}
              to={item.path}
              label={item.label}
              icon={item.icon}
              collapsed={collapsed}
            />
          ))}
        </div>
      </nav>

      {/* Current path helper (tooltip-like label for collapsed) */}
      {collapsed && (
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 w-12 text-center text-[10px] text-gray-500">
          {/* Optional mini helper */}
        </div>
      )}

      {/* Footer user box */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-gray-200 p-2">
        <button
          className={[
            "w-full flex items-center gap-2 rounded-md px-2 py-2 hover:bg-gray-100",
            collapsed ? "justify-center" : "",
          ].join(" ")}
          aria-label="User menu"
        >
         
          <img
  src="https://images.unsplash.com/photo-1544168190-79c17527004f?w=200&h=200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNvbGxlZ2UlMjBzdHVkZW50fGVufDB8fDB8fHww"
  alt="John Doe profile"
  className="h-7 w-7 rounded-full object-cover"
  loading="lazy"
/>
          {!collapsed && (
            <div className="flex-1 text-left">
              <div className="text-sm font-medium">John Doe</div>
              <div className="text-xs text-gray-500">Student</div>
            </div>
          )}
          {!collapsed && <FiChevronDown className="text-gray-500" />}
        </button>
      </div>
    </aside>
  );
}




function Topbar({ onToggleSidebar, onToggleTheme, isDark }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear auth/session if applicable
    // localStorage.removeItem("token");
    // dispatch(logout());
    navigate("/", { replace: true });
  };

  return (
    <header className="sticky top-0 z-30 border-b border-gray-200 bg-white/80 backdrop-blur">
      <div className="flex items-center gap-3 px-4 py-3">
        <button
          onClick={onToggleSidebar}
          className="inline-flex items-center justify-center rounded-md p-2 hover:bg-gray-100 md:hidden"
          aria-label="Toggle sidebar"
        >
          <FiMenu />
        </button>

        {/* Search grows to fill, pushing actions right */}
        <div className="relative flex-1 max-w-xl">
          <FiSearch className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="search"
            placeholder="Search jobs, mentors, projects..."
            className="w-full rounded-md border border-gray-200 bg-white pl-10 pr-3 py-2 text-sm outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
            aria-label="Search"
          />
        </div>

        {/* Right-aligned actions */}
        <div className="ml-auto flex items-center gap-2">
          <button
            onClick={onToggleTheme}
            className="rounded-md p-2 hover:bg-gray-100"
            aria-label="Toggle theme"
            title="Toggle theme"
          >
            {isDark ? <FiSun /> : <FiMoon />}
          </button>

          <button
            className="relative rounded-md p-2 hover:bg-gray-100"
            aria-label="Notifications"
            title="Notifications"
          >
            <FiBell />
            <span className="absolute -right-0 -top-0 inline-flex h-2 w-2 rounded-full bg-red-500" />
          </button>

          <button
            onClick={handleLogout}
            className="rounded-md p-2 hover:bg-gray-100"
            aria-label="Logout"
            title="Logout"
          >
            <FiLogOut />
          </button>
        </div>
      </div>
    </header>
  );
}



const StudentLayout = () => {
  // Collapsed state for desktop; mobile uses drawer pattern
  const [collapsed, setCollapsed] = useState(false);
  const [sidebarOpenMobile, setSidebarOpenMobile] = useState(false);
  const [isDark, setIsDark] = useState(false);

  // Apply theme class to root (optional)
  useMemo(() => {
    const root = document.documentElement;
    if (isDark) root.classList.add("dark");
    else root.classList.remove("dark");
  }, [isDark]);

  return (
    <div className="flex h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Desktop sidebar */}
      <div className="hidden md:block">
        <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
      </div>

      {/* Mobile drawer */}
      <div
        className={[
          "fixed inset-0 z-40 md:hidden",
          sidebarOpenMobile ? "block" : "hidden",
        ].join(" ")}
        aria-hidden={!sidebarOpenMobile}
      >
        <div
          className="absolute inset-0 bg-black/40"
          onClick={() => setSidebarOpenMobile(false)}
        />
        <div className="absolute left-0 top-0 h-full w-72 bg-white shadow-xl">
          <Sidebar collapsed={false} setCollapsed={() => {}} />
        </div>
      </div>

      {/* Main column */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <Topbar
          onToggleSidebar={() => setSidebarOpenMobile((v) => !v)}
          onToggleTheme={() => setIsDark((v) => !v)}
          isDark={isDark}
        />

        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

const StudentDashboard = () => {
  // Layout route with nested child routes
  return (
    <Routes>
      <Route element={<StudentLayout />}>
        <Route index element={<DashboardHome />} />
        <Route path="profile" element={<Profile />} />
        <Route path="resume" element={<Resume />} />
        <Route path="applications" element={<Applications />} />
        <Route path="mentors" element={<Mentors />} />
        <Route path="projects" element={<Projects />} />
        <Route path="recommendations" element={<JobRecommendations />} />
        <Route path="forum" element={<JobForum />} />
        <Route path="reviews" element={<Reviews />} />
        <Route path="*" element={<Navigate to="." replace />} />
      </Route>
    </Routes>
  );
};

export default StudentDashboard;







