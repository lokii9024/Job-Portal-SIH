import React from 'react'

const PlacementData = () => {
  const placements = [
    { id: 1, student: 'John Doe', company: 'Google', package: '₹25 LPA', date: '2024-01-15' },
    { id: 2, student: 'Jane Smith', company: 'Microsoft', package: '₹22 LPA', date: '2024-01-10' }
  ]

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-2xl font-bold mb-6">Placement Data</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 text-left">ID</th>
              <th className="px-4 py-2 text-left">Student</th>
              <th className="px-4 py-2 text-left">Company</th>
              <th className="px-4 py-2 text-left">Package</th>
              <th className="px-4 py-2 text-left">Date</th>
            </tr>
          </thead>
          <tbody>
            {placements.map((placement) => (
              <tr key={placement.id} className="border-b">
                <td className="px-4 py-2">{placement.id}</td>
                <td className="px-4 py-2">{placement.student}</td>
                <td className="px-4 py-2">{placement.company}</td>
                <td className="px-4 py-2">{placement.package}</td>
                <td className="px-4 py-2">{placement.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default PlacementData