import React from 'react'
import DashboardCard from '../../components/common/DashboardCard'

const DashboardHome = () => {
  const stats = [
    { title: 'Active Job Postings', value: '8', color: 'blue' },
    { title: 'Total Applicants', value: '156', color: 'green' },
    { title: 'Interviews Scheduled', value: '23', color: 'purple' },
    { title: 'Hire Rate', value: '15%', color: 'orange' }
  ]

  const recentActivities = [
    { activity: 'New application for Frontend Developer', time: '2 hours ago', type: 'Application' },
    { activity: 'Interview scheduled with John Doe', time: '5 hours ago', type: 'Interview' },
    { activity: 'Job posting for Backend Engineer approved', time: '1 day ago', type: 'Job Posting' }
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
          <h3 className="text-lg font-semibold mb-4">Recent Activities</h3>
          {recentActivities.map((activity, index) => (
            <div key={index} className="border-b py-3 last:border-b-0">
              <div className="flex justify-between items-center">
                <span className="font-medium">{activity.activity}</span>
                <span className="text-sm text-gray-500">{activity.time}</span>
              </div>
              <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                {activity.type}
              </span>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
          <div className="space-y-3">
            <button className="w-full text-left p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
              Post New Job
            </button>
            <button className="w-full text-left p-3 bg-green-50 rounded-lg hover:bg-green-100 transition-colors">
              View Applicants
            </button>
            <button className="w-full text-left p-3 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors">
              Schedule Interviews
            </button>
            <button className="w-full text-left p-3 bg-orange-50 rounded-lg hover:bg-orange-100 transition-colors">
              Submit College Review
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardHome