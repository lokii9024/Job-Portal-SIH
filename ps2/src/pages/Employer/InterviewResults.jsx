import React from 'react'

const InterviewResults = () => {
  const interviews = [
    { id: 1, student: 'John Doe', interviewer: 'Sarah Wilson', rating: '4.5/5', feedback: 'Excellent technical skills', date: '2024-01-15', status: 'Passed' },
    { id: 2, student: 'Jane Smith', interviewer: 'Mike Brown', rating: '3.8/5', feedback: 'Good communication skills', date: '2024-01-14', status: 'Under Consideration' },
    { id: 3, student: 'Mike Johnson', interviewer: 'Sarah Wilson', rating: '3.2/5', feedback: 'Needs improvement', date: '2024-01-13', status: 'Failed' }
  ]

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-2xl font-bold mb-6">Interview Results</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 text-left">Student</th>
              <th className="px-4 py-2 text-left">Interviewer</th>
              <th className="px-4 py-2 text-left">Rating</th>
              <th className="px-4 py-2 text-left">Feedback</th>
              <th className="px-4 py-2 text-left">Date</th>
              <th className="px-4 py-2 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {interviews.map((interview) => (
              <tr key={interview.id} className="border-b">
                <td className="px-4 py-2">{interview.student}</td>
                <td className="px-4 py-2">{interview.interviewer}</td>
                <td className="px-4 py-2">
                  <span className={`font-semibold ${
                    parseFloat(interview.rating) >= 4.0 ? 'text-green-600' :
                    parseFloat(interview.rating) >= 3.0 ? 'text-yellow-600' : 'text-red-600'
                  }`}>
                    {interview.rating}
                  </span>
                </td>
                <td className="px-4 py-2">{interview.feedback}</td>
                <td className="px-4 py-2">{interview.date}</td>
                <td className="px-4 py-2">
                  <span className={`px-2 py-1 rounded text-xs ${
                    interview.status === 'Passed' ? 'bg-green-100 text-green-800' :
                    interview.status === 'Under Consideration' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {interview.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default InterviewResults