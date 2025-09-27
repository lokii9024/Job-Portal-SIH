import React from 'react'

const Applications = () => {
  const applications = [
    { id: 1, company: 'Google', position: 'Frontend Developer', appliedDate: '2024-01-10', status: 'Under Review', nextStep: 'Technical Interview' },
    { id: 2, company: 'Microsoft', position: 'Software Engineer', appliedDate: '2024-01-08', status: 'Shortlisted', nextStep: 'HR Round' },
    { id: 3, company: 'Amazon', position: 'Backend Developer', appliedDate: '2024-01-05', status: 'Rejected', nextStep: 'None' }
  ]

  const getStatusColor = (status) => {
    switch (status) {
      case 'Shortlisted': return 'bg-green-100 text-green-800'
      case 'Under Review': return 'bg-yellow-100 text-yellow-800'
      case 'Rejected': return 'bg-red-100 text-red-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-2xl font-bold mb-6">Your Applications</h2>
      
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 text-left">Company</th>
              <th className="px-4 py-2 text-left">Position</th>
              <th className="px-4 py-2 text-left">Applied Date</th>
              <th className="px-4 py-2 text-left">Status</th>
              <th className="px-4 py-2 text-left">Next Step</th>
              <th className="px-4 py-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {applications.map((app) => (
              <tr key={app.id} className="border-b">
                <td className="px-4 py-2 font-medium">{app.company}</td>
                <td className="px-4 py-2">{app.position}</td>
                <td className="px-4 py-2">{app.appliedDate}</td>
                <td className="px-4 py-2">
                  <span className={`px-2 py-1 rounded text-xs ${getStatusColor(app.status)}`}>
                    {app.status}
                  </span>
                </td>
                <td className="px-4 py-2">{app.nextStep}</td>
                <td className="px-4 py-2">
                  <button className="text-blue-600 hover:text-blue-800 mr-3">View Details</button>
                  <button className="text-red-600 hover:text-red-800">Withdraw</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Applications