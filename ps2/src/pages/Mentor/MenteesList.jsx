import React from 'react'

const MenteesList = () => {
  const mentees = [
    { id: 1, name: 'Alice Brown', email: 'alice@college.edu', startDate: '2023-09-01', status: 'Active', progress: '85%' },
    { id: 2, name: 'Bob Wilson', email: 'bob@college.edu', startDate: '2023-10-15', status: 'Active', progress: '70%' },
    { id: 3, name: 'Carol Davis', email: 'carol@college.edu', startDate: '2023-08-20', status: 'Completed', progress: '100%' }
  ]

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-2xl font-bold mb-6">Your Mentees</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 text-left">Name</th>
              <th className="px-4 py-2 text-left">Email</th>
              <th className="px-4 py-2 text-left">Start Date</th>
              <th className="px-4 py-2 text-left">Status</th>
              <th className="px-4 py-2 text-left">Progress</th>
              <th className="px-4 py-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {mentees.map((mentee) => (
              <tr key={mentee.id} className="border-b">
                <td className="px-4 py-2">{mentee.name}</td>
                <td className="px-4 py-2">{mentee.email}</td>
                <td className="px-4 py-2">{mentee.startDate}</td>
                <td className="px-4 py-2">
                  <span className={`px-2 py-1 rounded text-xs ${
                    mentee.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                  }`}>
                    {mentee.status}
                  </span>
                </td>
                <td className="px-4 py-2">
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-green-600 h-2 rounded-full" 
                      style={{ width: mentee.progress }}
                    ></div>
                  </div>
                  <span className="text-xs text-gray-600">{mentee.progress}</span>
                </td>
                <td className="px-4 py-2">
                  <button className="text-blue-600 hover:text-blue-800 mr-3">View Progress</button>
                  <button className="text-green-600 hover:text-green-800">Message</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default MenteesList