import React from 'react'
import DashboardCard from '../../components/common/DashboardCard'

const DashboardHome = () => {
  const stats = [
    { title: 'Active Mentees', value: '8', color: 'blue' },
    { title: 'Pending Requests', value: '3', color: 'green' },
    { title: 'Total Sessions', value: '45', color: 'purple' },
    { title: 'Success Rate', value: '92%', color: 'orange' }
  ]

  const upcomingSessions = [
    { student: 'John Doe', date: 'Jan 15, 2024', time: '10:00 AM', type: 'Resume Review' },
    { student: 'Jane Smith', date: 'Jan 16, 2024', time: '2:00 PM', type: 'Mock Interview' }
  ]

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <DashboardCard key={index} {...stat} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold mb-4">Upcoming Sessions</h3>
          {upcomingSessions.map((session, index) => (
            <div key={index} className="border-b py-3 last:border-b-0">
              <div className="flex justify-between items-center mb-2">
                <span className="font-medium">{session.student}</span>
                <span className="text-sm text-gray-500">{session.date}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">{session.time}</span>
                <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded">
                  {session.type}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
          <div className="space-y-3">
            <button className="w-full text-left p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
              View Student Requests
            </button>
            <button className="w-full text-left p-3 bg-green-50 rounded-lg hover:bg-green-100 transition-colors">
              Schedule Session
            </button>
            <button className="w-full text-left p-3 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors">
              Generate Progress Report
            </button>
            <button className="w-full text-left p-3 bg-orange-50 rounded-lg hover:bg-orange-100 transition-colors">
              Check Reviews
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardHome