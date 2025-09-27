import React from 'react'

const InterviewSchedules = () => {
  const schedules = [
    { id: 1, student: 'John Doe', position: 'Frontend Developer', date: '2024-01-20', time: '10:00 AM', interviewer: 'Sarah Wilson', status: 'Scheduled' },
    { id: 2, student: 'Jane Smith', position: 'Backend Engineer', date: '2024-01-22', time: '2:00 PM', interviewer: 'Mike Brown', status: 'Scheduled' },
    { id: 3, student: 'Alice Brown', position: 'Fullstack Developer', date: '2024-01-25', time: '11:00 AM', interviewer: 'Sarah Wilson', status: 'Pending' }
  ]

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-2xl font-bold mb-6">Interview Schedules</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 text-left">Student</th>
              <th className="px-4 py-2 text-left">Position</th>
              <th className="px-4 py-2 text-left">Date</th>
              <th className="px-4 py-2 text-left">Time</th>
              <th className="px-4 py-2 text-left">Interviewer</th>
              <th className="px-4 py-2 text-left">Status</th>
              <th className="px-4 py-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {schedules.map((schedule) => (
              <tr key={schedule.id} className="border-b">
                <td className="px-4 py-2">{schedule.student}</td>
                <td className="px-4 py-2">{schedule.position}</td>
                <td className="px-4 py-2">{schedule.date}</td>
                <td className="px-4 py-2">{schedule.time}</td>
                <td className="px-4 py-2">{schedule.interviewer}</td>
                <td className="px-4 py-2">
                  <span className={`px-2 py-1 rounded text-xs ${
                    schedule.status === 'Scheduled' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {schedule.status}
                  </span>
                </td>
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

export default InterviewSchedules