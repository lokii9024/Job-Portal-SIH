import React from 'react'

const InterviewScheduling = () => {
  const interviews = [
    { id: 1, student: 'John Doe', company: 'Google', date: '2024-01-20', time: '10:00 AM' },
    { id: 2, student: 'Jane Smith', company: 'Microsoft', date: '2024-01-22', time: '2:00 PM' }
  ]

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-2xl font-bold mb-6">Interview Scheduling</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 text-left">ID</th>
              <th className="px-4 py-2 text-left">Student</th>
              <th className="px-4 py-2 text-left">Company</th>
              <th className="px-4 py-2 text-left">Date</th>
              <th className="px-4 py-2 text-left">Time</th>
              <th className="px-4 py-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {interviews.map((interview) => (
              <tr key={interview.id} className="border-b">
                <td className="px-4 py-2">{interview.id}</td>
                <td className="px-4 py-2">{interview.student}</td>
                <td className="px-4 py-2">{interview.company}</td>
                <td className="px-4 py-2">{interview.date}</td>
                <td className="px-4 py-2">{interview.time}</td>
                <td className="px-4 py-2">
                  <button className="text-blue-600 hover:text-blue-800 mr-3">Reschedule</button>
                  <button className="text-red-600 hover:text-red-800">Cancel</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default InterviewScheduling