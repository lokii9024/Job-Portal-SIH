import React from "react";
import { useNavigate } from "react-router-dom";

const DashboardHome = () => {
  const navigate = useNavigate();

  const stats = [
    { title: "Active Job Postings", value: "8" },
    { title: "Total Applicants", value: "156" },
    { title: "Interviews Scheduled", value: "23" },
    { title: "Hire Rate", value: "15%" },
  ];

  const recentActivities = [
    { activity: "New application for Frontend Developer", time: "2 hours ago", type: "Application" },
    { activity: "Interview scheduled with John Doe", time: "5 hours ago", type: "Interview" },
    { activity: "Job posting for Backend Engineer approved", time: "1 day ago", type: "Job Posting" },
  ];

  return (
    <div className="space-y-8">
      {/* Page heading with subtle accent */}
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-semibold text-gray-900">Employer Overview</h1>
        <p className="text-sm text-gray-600">Key metrics and recent activity at a glance.</p>
      </div>

      {/* KPI row with indigo title accent */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
            <p className="text-sm text-indigo-700">{stat.title}</p>
            <p className="mt-1 text-2xl font-bold text-gray-900">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Content row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent activity with indigo markers */}
        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Recent Activities</h3>
            <button
              onClick={() => navigate("/employer/applicants")}
              className="text-sm text-indigo-700 hover:text-indigo-800"
            >
              View all
            </button>
          </div>
          <ol className="relative ml-3 border-l border-gray-200">
            {recentActivities.map((a, i) => (
              <li key={i} className="mb-5 ml-4">
                <span className="absolute -left-2.5 top-1.5 h-2.5 w-2.5 rounded-full bg-indigo-400" />
                <div className="flex items-center justify-between">
                  <span className="font-medium text-gray-900">{a.activity}</span>
                  <span className="text-sm text-gray-500">{a.time}</span>
                </div>
                <span className="mt-1 inline-block text-xs bg-indigo-50 text-indigo-700 px-2 py-1 rounded">
                  {a.type}
                </span>
              </li>
            ))}
          </ol>
        </div>

        {/* Quick actions with blue/indigo hover */}
        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
          <div className="space-y-3">
            <button
              onClick={() => navigate("/employer/jobs/new")}
              className="w-full text-left p-3 rounded-lg border border-gray-200 hover:bg-indigo-50 hover:border-indigo-200 transition"
            >
              Post New Job
            </button>
            <button
              onClick={() => navigate("/employer/applicants")}
              className="w-full text-left p-3 rounded-lg border border-gray-200 hover:bg-indigo-50 hover:border-indigo-200 transition"
            >
              View Applicants
            </button>
            <button
              onClick={() => navigate("/employer/schedules")}
              className="w-full text-left p-3 rounded-lg border border-gray-200 hover:bg-indigo-50 hover:border-indigo-200 transition"
            >
              Schedule Interviews
            </button>
            <button
              onClick={() => navigate("/employer/review")}
              className="w-full text-left p-3 rounded-lg border border-gray-200 hover:bg-indigo-50 hover:border-indigo-200 transition"
            >
              Submit College Review
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;

