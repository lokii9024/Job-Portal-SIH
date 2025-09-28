// 

import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FiTrendingUp,
  FiTrendingDown,
  FiPlusCircle,
  FiUsers,
  FiBriefcase,
  FiCalendar,
  FiBarChart2,
} from "react-icons/fi";
import DashboardCard from "../../components/common/DashboardCard";

const colorMap = {
  blue: { text: "text-blue-600", bgSoft: "bg-blue-50" },
  green: { text: "text-green-600", bgSoft: "bg-green-50" },
  purple: { text: "text-purple-600", bgSoft: "bg-purple-50" },
  orange: { text: "text-orange-600", bgSoft: "bg-orange-50" },
};

const DashboardHome = () => {
  const navigate = useNavigate();

  const stats = [
    { title: "Total Students", value: "1,250", color: "blue", delta: "+3.2%", up: true, sub: "vs last 30 days" },
    { title: "Active Employers", value: "85", color: "green", delta: "+1.1%", up: true, sub: "active this week" },
    { title: "Job Postings", value: "156", color: "purple", delta: "-4.0%", up: false, sub: "open roles" },
    { title: "Placement Rate", value: "78%", color: "orange", delta: "+2.5%", up: true, sub: "class of 2024" },
  ];

  const recentActivities = [
    { activity: "New job posting from Google", time: "2 hours ago", type: "Job" },
    { activity: "5 students registered today", time: "5 hours ago", type: "Student" },
    { activity: "Interview scheduled with Amazon", time: "1 day ago", type: "Interview" },
  ];

  const quickActions = [
    { label: "Add Job Posting", icon: <FiPlusCircle />, onClick: () => navigate("/admin/jobs") },
    { label: "Manage Students", icon: <FiUsers />, onClick: () => navigate("/admin/students") },
    { label: "Schedule Interviews", icon: <FiCalendar />, onClick: () => navigate("/admin/interviews") },
    { label: "Generate Reports", icon: <FiBarChart2 />, onClick: () => navigate("/admin/placement") },
  ];

  return (
    <div className="space-y-6">
      {/* Hero header */}
      <section className="rounded-xl bg-gradient-to-r from-indigo-600 to-blue-600 text-white p-6 shadow">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-extrabold">Admin Overview</h1>
            <p className="text-white/90">
              Snapshot of students, employers, postings, and placements for this month.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate("/admin/jobs")}
              className="inline-flex items-center gap-2 rounded-md bg-white px-4 py-2 font-semibold text-indigo-700 hover:bg-gray-100 transition"
            >
              <FiPlusCircle /> Create Job
            </button>
            <button
              onClick={() => navigate("/admin/placement")}
              className="inline-flex items-center gap-2 rounded-md border border-white/80 px-4 py-2 text-white hover:bg-white hover:text-indigo-700 transition"
            >
              View Reports
            </button>
          </div>
        </div>
      </section>

      {/* KPI cards */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((s, idx) => {
          const cm = colorMap[s.color] || colorMap.blue;
          return (
            <div key={idx} className="bg-white rounded-xl shadow p-5">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-gray-500">{s.title}</p>
                  <p className={`mt-1 text-2xl font-bold ${cm.text}`}>{s.value}</p>
                </div>
                <span
                  className={`inline-flex items-center gap-1 rounded-full px-2 py-1 text-xs ${
                    s.up ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
                  }`}
                >
                  {s.up ? <FiTrendingUp /> : <FiTrendingDown />}
                  {s.delta}
                </span>
              </div>
              <p className="mt-1 text-xs text-gray-500">{s.sub}</p>
            </div>
          );
        })}
      </section>

      {/* Content rows */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent activities as timeline */}
        <div className="bg-white rounded-xl shadow p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Recent Activities</h3>
            <button
              onClick={() => navigate("/admin/placement")}
              className="text-sm text-indigo-700 hover:underline"
            >
              View all
            </button>
          </div>
          <ol className="relative border-l border-gray-200 ml-3">
            {recentActivities.map((a, i) => (
              <li key={i} className="mb-5 ml-4">
                <span className="absolute -left-2.5 top-1.5 h-2.5 w-2.5 rounded-full bg-indigo-500" />
                <div className="flex items-center justify-between">
                  <span className="font-medium">{a.activity}</span>
                  <span className="text-sm text-gray-500">{a.time}</span>
                </div>
                <span className="mt-1 inline-block text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                  {a.type}
                </span>
              </li>
            ))}
          </ol>
        </div>

        {/* Quick actions */}
        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {quickActions.map((qa, i) => (
              <button
                key={i}
                onClick={qa.onClick}
                className="w-full text-left p-4 rounded-lg border border-gray-200 hover:border-indigo-300 hover:bg-indigo-50 transition group"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-indigo-100 text-indigo-700">
                    {qa.icon}
                  </span>
                  <span className="font-medium text-gray-800 group-hover:text-indigo-700">{qa.label}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Optional: reports preview / empty state */}
      {/* <section className="bg-white rounded-xl shadow p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">Reports Preview</h3>
          <span className="text-sm text-gray-500">Last updated: 5m ago</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="h-32 rounded-lg bg-gray-50 border border-dashed border-gray-300 flex items-center justify-center text-gray-400">
            Chart placeholder
          </div>
          <div className="h-32 rounded-lg bg-gray-50 border border-dashed border-gray-300 flex items-center justify-center text-gray-400">
            Chart placeholder
          </div>
          <div className="h-32 rounded-lg bg-gray-50 border border-dashed border-gray-300 flex items-center justify-center text-gray-400">
            Chart placeholder
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default DashboardHome;
