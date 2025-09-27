import React from 'react'

const DashboardCard = ({ title, value, color }) => {
  const colorClasses = {
    blue: 'bg-blue-100 text-blue-800',
    green: 'bg-green-100 text-green-800',
    purple: 'bg-purple-100 text-purple-800',
    orange: 'bg-orange-100 text-orange-800'
  }

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h3 className="text-lg font-semibold text-gray-600">{title}</h3>
      <p className={`text-3xl font-bold mt-2 ${colorClasses[color]}`}>{value}</p>
    </div>
  )
}

export default DashboardCard