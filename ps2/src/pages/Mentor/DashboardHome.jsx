// import React from 'react'
// import DashboardCard from '../../components/common/DashboardCard'

// const DashboardHome = () => {
//   const stats = [
//     { title: 'Active Mentees', value: '8', color: 'blue' },
//     { title: 'Pending Requests', value: '3', color: 'green' },
//     { title: 'Total Sessions', value: '45', color: 'purple' },
//     { title: 'Success Rate', value: '92%', color: 'orange' }
//   ]

//   const upcomingSessions = [
//     { student: 'John Doe', date: 'Jan 15, 2024', time: '10:00 AM', type: 'Resume Review' },
//     { student: 'Jane Smith', date: 'Jan 16, 2024', time: '2:00 PM', type: 'Mock Interview' }
//   ]

//   return (
//     <div className="space-y-6">
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//         {stats.map((stat, index) => (
//           <DashboardCard key={index} {...stat} />
//         ))}
//       </div>

//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//         <div className="bg-white rounded-lg shadow p-6">
//           <h3 className="text-lg font-semibold mb-4">Upcoming Sessions</h3>
//           {upcomingSessions.map((session, index) => (
//             <div key={index} className="border-b py-3 last:border-b-0">
//               <div className="flex justify-between items-center mb-2">
//                 <span className="font-medium">{session.student}</span>
//                 <span className="text-sm text-gray-500">{session.date}</span>
//               </div>
//               <div className="flex justify-between items-center">
//                 <span className="text-sm text-gray-600">{session.time}</span>
//                 <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded">
//                   {session.type}
//                 </span>
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="bg-white rounded-lg shadow p-6">
//           <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
//           <div className="space-y-3">
//             <button className="w-full text-left p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
//               View Student Requests
//             </button>
//             <button className="w-full text-left p-3 bg-green-50 rounded-lg hover:bg-green-100 transition-colors">
//               Schedule Session
//             </button>
//             <button className="w-full text-left p-3 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors">
//               Generate Progress Report
//             </button>
//             <button className="w-full text-left p-3 bg-orange-50 rounded-lg hover:bg-orange-100 transition-colors">
//               Check Reviews
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default DashboardHome

import React from 'react';
import { FaUserGraduate, FaCalendarAlt, FaClipboardCheck, FaChartLine } from 'react-icons/fa';

const DashboardHome = () => {
  const stats = [
    { title: 'Active Mentees', value: '8', icon: <FaUserGraduate /> },
    { title: 'Pending Requests', value: '3', icon: <FaClipboardCheck /> },
    { title: 'Total Sessions', value: '45', icon: <FaCalendarAlt /> },
    { title: 'Success Rate', value: '92%', icon: <FaChartLine /> }
  ];

  const upcomingSessions = [
    { student: 'John Doe', date: 'Jan 15, 2024', time: '10:00 AM', type: 'Resume Review' },
    { student: 'Jane Smith', date: 'Jan 16, 2024', time: '2:00 PM', type: 'Mock Interview' }
  ];

  return (
    <div className="space-y-8">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="flex items-center p-5 rounded-lg shadow-sm bg-gray-50 hover:shadow-md transition"
          >
            <div className="text-3xl mr-4 text-gray-500">{stat.icon}</div>
            <div>
              <p className="text-sm text-gray-600">{stat.title}</p>
              <p className="text-xl font-semibold text-gray-800">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Upcoming Sessions */}
        <div className="bg-gray-50 rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Upcoming Sessions</h3>
          {upcomingSessions.map((session, index) => (
            <div key={index} className="border-b py-4 last:border-b-0 flex justify-between items-center hover:bg-gray-100 rounded transition">
              <div>
                <p className="font-medium text-gray-800">{session.student}</p>
                <p className="text-sm text-gray-500">{session.date} | {session.time}</p>
              </div>
              <span className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded-full">
                {session.type}
              </span>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="bg-gray-50 rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Actions</h3>
          <div className="space-y-3">
            <button className="w-full flex items-center gap-2 p-3 bg-blue-100 text-gray-700 rounded-lg hover:bg-gray-200 transition">
              <FaClipboardCheck /> View Student Requests
            </button>
            <button className="w-full flex items-center gap-2 p-3 bg-blue-100 text-gray-700 rounded-lg hover:bg-gray-200 transition">
              <FaCalendarAlt /> Schedule Session
            </button>
            <button className="w-full flex items-center gap-2 p-3 bg-blue-100 text-gray-700 rounded-lg hover:bg-gray-200 transition">
              <FaChartLine /> Generate Progress Report
            </button>
            <button className="w-full flex items-center gap-2 p-3 bg-blue-100 text-gray-700 rounded-lg hover:bg-gray-200 transition">
              <FaUserGraduate /> Check Reviews
            </button>
          </div>
        </div>
      </div>

      {/* Mentor Achievements */}
      <div className="bg-gray-50 rounded-lg shadow-sm p-6 flex flex-col md:flex-row justify-around items-center gap-6">
        <div className="text-center">
          <p className="text-xl font-semibold text-gray-800">120</p>
          <p className="text-blue-500">Total Students Mentored</p>
        </div>
        <div className="text-center">
          <p className="text-xl font-semibold text-gray-800">98%</p>
          <p className="text-blue-500">Positive Feedback</p>
        </div>
        <div className="text-center">
          <p className="text-xl font-semibold text-gray-800">15</p>
          <p className="text-blue-500">Workshops Conducted</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;


