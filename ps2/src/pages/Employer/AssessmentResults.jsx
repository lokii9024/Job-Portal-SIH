import React from 'react'

const AssessmentResults = () => {
  const results = [
    { id: 1, student: 'John Doe', test: 'Technical Skills', score: '85%', date: '2024-01-15', status: 'Completed' },
    { id: 2, student: 'Jane Smith', test: 'Aptitude Test', score: '92%', date: '2024-01-14', status: 'Completed' },
    { id: 3, student: 'Mike Johnson', test: 'Technical Skills', score: '78%', date: '2024-01-13', status: 'Completed' }
  ]

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-2xl font-bold mb-6">Assessment Results</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 text-left">Student</th>
              <th className="px-4 py-2 text-left">Assessment Type</th>
              <th className="px-4 py-2 text-left">Score</th>
              <th className="px-4 py-2 text-left">Date</th>
              <th className="px-4 py-2 text-left">Status</th>
              <th className="px-4 py-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {results.map((result) => (
              <tr key={result.id} className="border-b">
                <td className="px-4 py-2">{result.student}</td>
                <td className="px-4 py-2">{result.test}</td>
                <td className="px-4 py-2">
                  <span className={`font-semibold ${
                    parseInt(result.score) >= 80 ? 'text-green-600' :
                    parseInt(result.score) >= 60 ? 'text-yellow-600' : 'text-red-600'
                  }`}>
                    {result.score}
                  </span>
                </td>
                <td className="px-4 py-2">{result.date}</td>
                <td className="px-4 py-2">
                  <span className="px-2 py-1 rounded text-xs bg-green-100 text-green-800">
                    {result.status}
                  </span>
                </td>
                <td className="px-4 py-2">
                  <button className="text-blue-600 hover:text-blue-800 mr-3">View Details</button>
                  <button className="text-green-600 hover:text-green-800">Download Report</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default AssessmentResults