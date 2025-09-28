


// export default DashboardHome;
import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FaPaperPlane,
  FaBriefcase,
  FaCheckCircle,
  FaUserCircle,
  FaCalendarAlt,
  FaFileAlt,
  FaVideo,
} from "react-icons/fa";
import DashboardCard from "../../components/common/DashboardCard";

const colorMap = {
  blue: {
    bgSoft: "bg-blue-50",
    bg: "bg-blue-500",
    text: "text-blue-500",
    badgeBg: "bg-blue-100",
    badgeText: "text-blue-800",
  },
  green: {
    bgSoft: "bg-green-50",
    bg: "bg-green-500",
    text: "text-green-500",
    badgeBg: "bg-green-100",
    badgeText: "text-green-800",
  },
  purple: {
    bgSoft: "bg-purple-50",
    bg: "bg-purple-500",
    text: "text-purple-500",
    badgeBg: "bg-purple-100",
    badgeText: "text-purple-800",
  },
  orange: {
    bgSoft: "bg-orange-50",
    bg: "bg-orange-500",
    text: "text-orange-500",
    badgeBg: "bg-orange-100",
    badgeText: "text-orange-800",
  },
};

const DashboardHome = () => {
  const navigate = useNavigate();

  const stats = [
    { title: "Applications Sent", value: "12", color: "blue", icon: <FaPaperPlane size={20} /> },
    { title: "Interviews", value: "5", color: "green", icon: <FaBriefcase size={20} /> },
    { title: "Offers", value: "2", color: "purple", icon: <FaCheckCircle size={20} /> },
    { title: "Profile Completeness", value: "85%", color: "orange", icon: <FaUserCircle size={20} /> },
  ];

  const profilePercent = 85;

  const upcomingEvents = [
    { title: "Google Interview", date: "Jan 15, 2024", type: "Interview", color: "green", icon: <FaCalendarAlt /> },
    { title: "Resume Workshop", date: "Jan 20, 2024", type: "Workshop", color: "blue", icon: <FaFileAlt /> },
    { title: "Mock Interview", date: "Jan 25, 2024", type: "Mock Interview", color: "purple", icon: <FaVideo /> },
  ];

  const quickActions = [
    { label: "Update Your Resume", color: "blue", icon: <FaFileAlt />, onClick: () => navigate("/student/resume") },
    { label: "Apply for Jobs", color: "green", icon: <FaPaperPlane />, onClick: () => navigate("/jobs") },
    { label: "Schedule Mock Interview", color: "purple", icon: <FaVideo />, onClick: () => navigate("/student/mentors") },
  ];

  return (
    <div className="space-y-8">
      {/* Hero Greeting with progress */}
      <div className="rounded-xl p-6 shadow-lg bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
        <h1 className="text-3xl font-bold mb-1">Welcome back, John!</h1>
        <p className="text-white/90">Here’s an overview of applications, interviews, and what to do next.</p>

        <div className="mt-5 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="w-full md:max-w-md">
            <div className="flex items-center justify-between text-sm">
              <span className="text-white/90">Profile completeness</span>
              <span className="font-semibold">{profilePercent}%</span>
            </div>
            <div className="mt-2 h-2 w-full rounded-full bg-white/20 overflow-hidden">
              <div
                className="h-full rounded-full bg-white"
                style={{ width: `${profilePercent}%` }}
                aria-label="Profile completeness progress"
              />
            </div>
          </div>
          <button
            onClick={() => navigate("/student/profile")}
            className="inline-flex items-center justify-center rounded-md bg-white text-indigo-700 px-4 py-2 font-semibold hover:bg-gray-100 transition"
          >
            Complete Profile
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <DashboardCard
            key={index}
            title={stat.title}
            value={stat.value}
            icon={stat.icon}
            // Pass color props or classes to your card, or render inline here
            className="bg-white rounded-xl shadow p-5"
            accentClass={colorMap[stat.color].bg}
            iconClass={colorMap[stat.color].text}
          />
        ))}
      </div>

      {/* Upcoming Events + Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Upcoming Events */}
        <div className="bg-white rounded-xl shadow p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-semibold">Upcoming Events</h3>
            <button
              onClick={() => navigate("/calendar")}
              className="text-sm text-indigo-700 hover:underline"
            >
              View calendar
            </button>
          </div>

          {upcomingEvents.length === 0 ? (
            <div className="rounded-md border border-dashed border-gray-300 p-6 text-center text-gray-600">
              No events yet. Explore workshops and schedule mock interviews.
            </div>
          ) : (
            <div className="space-y-4">
              {upcomingEvents.map((event, index) => {
                const cm = colorMap[event.color] || colorMap.blue;
                return (
                  <div key={index} className="flex items-center gap-4 border-b pb-3 last:border-b-0">
                    <div className={`text-white ${cm.bg} p-3 rounded-full flex-shrink-0`}>
                      {event.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-gray-800">{event.title}</span>
                        <span className="text-sm text-gray-500">{event.date}</span>
                      </div>
                      <span
                        className={`text-xs ${cm.badgeBg} ${cm.badgeText} px-2 py-1 rounded mt-1 inline-block`}
                      >
                        {event.type}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="text-xl font-semibold mb-4">Quick Actions</h3>
          <div className="space-y-3">
            {quickActions.map((action, index) => {
              const cm = colorMap[action.color];
              return (
                <button
                  key={index}
                  onClick={action.onClick}
                  className={`w-full flex items-center gap-3 p-3 rounded-xl hover:shadow-md transition ${cm.bgSoft} hover:${cm.badgeBg}`}
                >
                  <span className={`${cm.text}`}>{action.icon}</span>
                  <span className="font-medium text-gray-700">{action.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Recent Activities with timestamps */}
      <div className="bg-white rounded-xl shadow p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-semibold">Recent Activities</h3>
          <button
            onClick={() => navigate("/student/applications")}
            className="text-sm text-indigo-700 hover:underline"
          >
            View all
          </button>
        </div>
        <ul className="space-y-2 text-gray-700">
          <li>✅ Submitted application to Microsoft · Jan 10, 2024</li>
          <li>📄 Updated Resume · Jan 08, 2024</li>
          <li>💬 Joined Job Forum discussion on Frontend Jobs</li>
        </ul>
      </div>

  
  {/* Example skeleton loader (if fetching) */}
      {/* <div role="status" className="bg-white rounded-xl p-6 animate-pulse">
        <div className="h-6 bg-gray-200 rounded w-40 mb-4"></div>
        <div className="space-y-3">
          <div className="h-4 bg-gray-200 rounded"></div>
          <div className="h-4 bg-gray-200 rounded w-5/6"></div>
          <div className="h-4 bg-gray-200 rounded w-2/3"></div>
        </div>
        <span className="sr-only">Loading...</span>
      </div> */}
    </div>
  );
};


export default DashboardHome;
