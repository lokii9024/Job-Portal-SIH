import React from 'react'

const EmployerData = () => {
  const employers = [
    { id: 1, name: 'Google', email: 'hr@google.com', jobs: 15, status: 'Active' },
    { id: 2, name: 'Microsoft', email: 'careers@microsoft.com', jobs: 12, status: 'Active' },
    { id: 3, name: 'Amazon', email: 'university@amazon.com', jobs: 8, status: 'Active' }
  ]

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-2xl font-bold mb-6">Employer Data Management</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 text-left">ID</th>
              <th className="px-4 py-2 text-left">Company</th>
              <th className="px-4 py-2 text-left">Email</th>
              <th className="px-4 py-2 text-left">Active Jobs</th>
              <th className="px-4 py-2 text-left">Status</th>
              <th className="px-4 py-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {employers.map((employer) => (
              <tr key={employer.id} className="border-b">
                <td className="px-4 py-2">{employer.id}</td>
                <td className="px-4 py-2">{employer.name}</td>
                <td className="px-4 py-2">{employer.email}</td>
                <td className="px-4 py-2">{employer.jobs}</td>
                <td className="px-4 py-2">
                  <span className="px-2 py-1 rounded text-xs bg-green-100 text-green-800">
                    {employer.status}
                  </span>
                </td>
                <td className="px-4 py-2">
                  <button className="text-blue-600 hover:text-blue-800 mr-3">Edit</button>
                  <button className="text-red-600 hover:text-red-800">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default EmployerData