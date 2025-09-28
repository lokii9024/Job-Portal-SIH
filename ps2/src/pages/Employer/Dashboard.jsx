import React, { useMemo, useState } from "react";
import { Routes, Route, Navigate, NavLink, Outlet, useNavigate } from "react-router-dom";
import { FiMenu, FiSearch, FiBell, FiLogOut, FiChevronDown } from "react-icons/fi";
import { FaHome, FaUsers, FaClipboardCheck, FaCheckCircle, FaCalendarAlt, FaStar, FaCommentDots } from "react-icons/fa";

import DashboardHome from "./DashboardHome";
import Applicants from "./Applicants";
import AssessmentResults from "./AssessmentResults";
import InterviewResults from "./InterviewResults";
import InterviewSchedules from "./InterviewSchedules";
import ShortlistedCandidates from "./ShortListedCandidates";
import CollegeReview from "./CollegeReview";

const employerMenu = [
  {
    label: "Overview",
    items: [{ path: "", label: "Dashboard", icon: <FaHome /> }],
  },
  {
    label: "Hiring",
    items: [
      { path: "applicants", label: "View Applicants", icon: <FaUsers /> },
      { path: "assessments", label: "Assessment Results", icon: <FaClipboardCheck /> },
      { path: "interview-results", label: "Interview Results", icon: <FaCheckCircle /> },
      { path: "schedules", label: "Interview Schedules", icon: <FaCalendarAlt /> },
      { path: "shortlisted", label: "Shortlisted Candidates", icon: <FaStar /> },
    ],
  },
  {
    label: "Feedback",
    items: [{ path: "review", label: "College Review", icon: <FaCommentDots /> }],
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
      aria-label="Employer navigation"
    >
      {/* Brand + Collapse */}
      <div className="flex items-center justify-between px-3 py-4">
        <div className="flex items-center gap-2">
         
          {!collapsed && <span className="font-bold text-indigo-700 text-lg">Employer</span>}
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
        {employerMenu.map((group) => (
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
          aria-label="Employer user menu"
        >
          <div className="h-7 w-7 rounded-full bg-indigo-200" />
          {!collapsed && (
            <div className="flex-1 text-left">
              <div className="text-sm font-medium">Google HR</div>
              <div className="text-xs text-gray-500">Employer</div>
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
    // Clear session if needed
    navigate("/", { replace: true });
  };

  return (
    <header className="sticky top-0 z-30 border-b border-gray-200 bg-white/80 backdrop-blur">
      <div className="flex items-center gap-3 px-4 py-3">
        {/* Search */}
        <div className="relative flex-1 max-w-xl">
          <FiSearch className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="search"
            placeholder="Search applicants, schedules, results..."
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

function EmployerLayout() {
  const [collapsed, setCollapsed] = useState(false);
  const [sidebarOpenMobile, setSidebarOpenMobile] = useState(false);

  // Persist collapse state
  useMemo(() => {
    const saved = localStorage.getItem("employer_sidebar_collapsed");
    if (saved != null) setCollapsed(saved === "true");
  }, []);
  useMemo(() => {
    localStorage.setItem("employer_sidebar_collapsed", String(collapsed));
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

const EmployerDashboard = () => {
  return (
    <Routes>
      <Route element={<EmployerLayout />}>
        <Route index element={<DashboardHome />} />
        <Route path="applicants" element={<Applicants />} />
        <Route path="assessments" element={<AssessmentResults />} />
        <Route path="interview-results" element={<InterviewResults />} />
        <Route path="schedules" element={<InterviewSchedules />} />
        <Route path="shortlisted" element={<ShortlistedCandidates />} />
        <Route path="review" element={<CollegeReview />} />
        <Route path="*" element={<Navigate to="." replace />} />
      </Route>
    </Routes>
  );
};

export default EmployerDashboard;
