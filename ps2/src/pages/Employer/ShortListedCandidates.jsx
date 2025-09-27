import React from 'react'

const ShortlistedCandidates = () => {
  const candidates = [
    { id: 1, name: 'John Doe', email: 'john@college.edu', position: 'Frontend Developer', experience: '2 years', skills: 'React, JavaScript', status: 'Final Round' },
    { id: 2, name: 'Jane Smith', email: 'jane@college.edu', position: 'Backend Engineer', experience: '1.5 years', skills: 'Node.js, MongoDB', status: 'Technical Round' },
    { id: 3, name: 'Mike Johnson', email: 'mike@college.edu', position: 'Fullstack Developer', experience: '2.5 years', skills: 'React, Node.js', status: 'HR Round' }
  ]

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-2xl font-bold mb-6">Shortlisted Candidates</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 text-left">Name</th>
              <th className="px-4 py-2 text-left">Email</th>
              <th className="px-4 py-2 text-left">Position</th>
              <th className="px-4 py-2 text-left">Experience</th>
              <th className="px-4 py-2 text-left">Skills</th>
              <th className="px-4 py-2 text-left">Status</th>
              <th className="px-4 py-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {candidates.map((candidate) => (
              <tr key={candidate.id} className="border-b">
                <td className="px-4 py-2">{candidate.name}</td>
                <td className="px-4 py-2">{candidate.email}</td>
                <td className="px-4 py-2">{candidate.position}</td>
                <td className="px-4 py-2">{candidate.experience}</td>
                <td className="px-4 py-2">{candidate.skills}</td>
                <td className="px-4 py-2">
                  <span className={`px-2 py-1 rounded text-xs ${
                    candidate.status === 'Final Round' ? 'bg-green-100 text-green-800' :
                    candidate.status === 'Technical Round' ? 'bg-blue-100 text-blue-800' :
                    'bg-purple-100 text-purple-800'
                  }`}>
                    {candidate.status}
                  </span>
                </td>
                <td className="px-4 py-2">
                  <button className="text-blue-600 hover:text-blue-800 mr-3">View Profile</button>
                  <button className="text-green-600 hover:text-green-800">Schedule Interview</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ShortlistedCandidates