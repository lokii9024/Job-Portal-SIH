import React from 'react'

const PlacementReport = () => {
  const reports = [
    { id: 1, student: 'John Doe', company: 'Google', package: '₹25 LPA', date: '2024-01-15', status: 'Placed' },
    { id: 2, student: 'Jane Smith', company: 'Microsoft', package: '₹22 LPA', date: '2024-01-10', status: 'Placed' },
    { id: 3, student: 'Mike Johnson', company: 'Amazon', package: '₹20 LPA', date: '2024-01-05', status: 'Placed' }
  ]

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-2xl font-bold mb-6">Placement Reports</h2>
      <div className="mb-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-blue-50 p-4 rounded-lg">
          <h3 className="font-semibold text-blue-800">Total Mentees Placed</h3>
          <p className="text-2xl font-bold text-blue-600">12</p>
        </div>
        <div className="bg-green-50 p-4 rounded-lg">
          <h3 className="font-semibold text-green-800">Average Package</h3>
          <p className="text-2xl font-bold text-green-600">₹22 LPA</p>
        </div>
        <div className="bg-purple-50 p-4 rounded-lg">
          <h3 className="font-semibold text-purple-800">Success Rate</h3>
          <p className="text-2xl font-bold text-purple-600">85%</p>
        </div>
      </div>
      
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 text-left">Student</th>
              <th className="px-4 py-2 text-left">Company</th>
              <th className="px-4 py-2 text-left">Package</th>
              <th className="px-4 py-2 text-left">Date</th>
              <th className="px-4 py-2 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {reports.map((report) => (
              <tr key={report.id} className="border-b">
                <td className="px-4 py-2">{report.student}</td>
                <td className="px-4 py-2">{report.company}</td>
                <td className="px-4 py-2">{report.package}</td>
                <td className="px-4 py-2">{report.date}</td>
                <td className="px-4 py-2">
                  <span className="px-2 py-1 rounded text-xs bg-green-100 text-green-800">
                    {report.status}
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

export default PlacementReport