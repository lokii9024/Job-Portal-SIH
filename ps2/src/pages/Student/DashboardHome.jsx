import React from 'react'
import DashboardCard from '../../components/common/DashboardCard'

const DashboardHome = () => {
  const stats = [
    { title: 'Applications Sent', value: '12', color: 'blue' },
    { title: 'Interviews', value: '5', color: 'green' },
    { title: 'Offers', value: '2', color: 'purple' },
    { title: 'Profile Completeness', value: '85%', color: 'orange' }
  ]

  const upcomingEvents = [
    { title: 'Google Interview', date: 'Jan 15, 2024', type: 'Interview' },
    { title: 'Resume Workshop', date: 'Jan 20, 2024', type: 'Workshop' }
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
          <h3 className="text-lg font-semibold mb-4">Upcoming Events</h3>
          {upcomingEvents.map((event, index) => (
            <div key={index} className="border-b py-3 last:border-b-0">
              <div className="flex justify-between items-center">
                <span className="font-medium">{event.title}</span>
                <span className="text-sm text-gray-500">{event.date}</span>
              </div>
              <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                {event.type}
              </span>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
          <div className="space-y-3">
            <button className="w-full text-left p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
              Update Your Resume
            </button>
            <button className="w-full text-left p-3 bg-green-50 rounded-lg hover:bg-green-100 transition-colors">
              Apply for Jobs
            </button>
            <button className="w-full text-left p-3 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors">
              Schedule Mock Interview
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardHome