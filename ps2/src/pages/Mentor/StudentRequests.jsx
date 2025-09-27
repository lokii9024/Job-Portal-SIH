import React, { useState } from 'react'

const StudentRequests = () => {
  const [requests, setRequests] = useState([
    { id: 1, student: 'John Doe', email: 'john@college.edu', message: 'Need guidance for Google interview', status: 'Pending', date: '2024-01-10' },
    { id: 2, student: 'Jane Smith', email: 'jane@college.edu', message: 'Resume review required', status: 'Pending', date: '2024-01-09' },
    { id: 3, student: 'Mike Johnson', email: 'mike@college.edu', message: 'Career guidance needed', status: 'Pending', date: '2024-01-08' }
  ])

  const handleAccept = (id) => {
    setRequests(requests.map(req => 
      req.id === id ? { ...req, status: 'Accepted' } : req
    ))
  }

  const handleReject = (id) => {
    setRequests(requests.map(req => 
      req.id === id ? { ...req, status: 'Rejected' } : req
    ))
  }

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-2xl font-bold mb-6">Student Mentorship Requests</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 text-left">Student</th>
              <th className="px-4 py-2 text-left">Email</th>
              <th className="px-4 py-2 text-left">Message</th>
              <th className="px-4 py-2 text-left">Date</th>
              <th className="px-4 py-2 text-left">Status</th>
              <th className="px-4 py-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {requests.map((request) => (
              <tr key={request.id} className="border-b">
                <td className="px-4 py-2">{request.student}</td>
                <td className="px-4 py-2">{request.email}</td>
                <td className="px-4 py-2">{request.message}</td>
                <td className="px-4 py-2">{request.date}</td>
                <td className="px-4 py-2">
                  <span className={`px-2 py-1 rounded text-xs ${
                    request.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                    request.status === 'Accepted' ? 'bg-green-100 text-green-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {request.status}
                  </span>
                </td>
                <td className="px-4 py-2">
                  {request.status === 'Pending' && (
                    <>
                      <button 
                        onClick={() => handleAccept(request.id)}
                        className="text-green-600 hover:text-green-800 mr-3"
                      >
                        Accept
                      </button>
                      <button 
                        onClick={() => handleReject(request.id)}
                        className="text-red-600 hover:text-red-800"
                      >
                        Reject
                      </button>
                    </>
                  )}
                  {request.status !== 'Pending' && (
                    <span className="text-gray-500">Action Taken</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default StudentRequests