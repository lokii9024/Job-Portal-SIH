import React from 'react'
import DashboardCard from '../../components/common/DashboardCard'

const DashboardHome = () => {
  const stats = [
    { title: 'Total Students', value: '1,250', color: 'blue' },
    { title: 'Active Employers', value: '85', color: 'green' },
    { title: 'Job Postings', value: '156', color: 'purple' },
    { title: 'Placement Rate', value: '78%', color: 'orange' }
  ]

  const recentActivities = [
    { activity: 'New job posting from Google', time: '2 hours ago', type: 'Job' },
    { activity: '5 students registered today', time: '5 hours ago', type: 'Student' },
    { activity: 'Interview scheduled with Amazon', time: '1 day ago', type: 'Interview' }
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
              Add New Job Posting
            </button>
            <button className="w-full text-left p-3 bg-green-50 rounded-lg hover:bg-green-100 transition-colors">
              Manage Students
            </button>
            <button className="w-full text-left p-3 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors">
              Schedule Interviews
            </button>
            <button className="w-full text-left p-3 bg-orange-50 rounded-lg hover:bg-orange-100 transition-colors">
              Generate Reports
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardHome