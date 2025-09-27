import React, { useState } from 'react'

const Applicants = () => {
  const [applicants, setApplicants] = useState([
    { id: 1, name: 'John Doe', email: 'john@college.edu', job: 'Frontend Developer', status: 'Applied', date: '2024-01-10', resume: 'view' },
    { id: 2, name: 'Jane Smith', email: 'jane@college.edu', job: 'Backend Engineer', status: 'Under Review', date: '2024-01-09', resume: 'view' },
    { id: 3, name: 'Mike Johnson', email: 'mike@college.edu', job: 'Frontend Developer', status: 'Rejected', date: '2024-01-08', resume: 'view' }
  ])

  const handleStatusChange = (id, newStatus) => {
    setApplicants(applicants.map(applicant => 
      applicant.id === id ? { ...applicant, status: newStatus } : applicant
    ))
  }

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-2xl font-bold mb-6">Job Applicants</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 text-left">Name</th>
              <th className="px-4 py-2 text-left">Email</th>
              <th className="px-4 py-2 text-left">Job Position</th>
              <th className="px-4 py-2 text-left">Applied Date</th>
              <th className="px-4 py-2 text-left">Status</th>
              <th className="px-4 py-2 text-left">Resume</th>
              <th className="px-4 py-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {applicants.map((applicant) => (
              <tr key={applicant.id} className="border-b">
                <td className="px-4 py-2">{applicant.name}</td>
                <td className="px-4 py-2">{applicant.email}</td>
                <td className="px-4 py-2">{applicant.job}</td>
                <td className="px-4 py-2">{applicant.date}</td>
                <td className="px-4 py-2">
                  <span className={`px-2 py-1 rounded text-xs ${
                    applicant.status === 'Applied' ? 'bg-blue-100 text-blue-800' :
                    applicant.status === 'Under Review' ? 'bg-yellow-100 text-yellow-800' :
                    applicant.status === 'Shortlisted' ? 'bg-green-100 text-green-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {applicant.status}
                  </span>
                </td>
                <td className="px-4 py-2">
                  <button className="text-blue-600 hover:text-blue-800">View Resume</button>
                </td>
                <td className="px-4 py-2">
                  <select 
                    value={applicant.status}
                    onChange={(e) => handleStatusChange(applicant.id, e.target.value)}
                    className="text-sm border rounded p-1"
                  >
                    <option value="Applied">Applied</option>
                    <option value="Under Review">Under Review</option>
                    <option value="Shortlisted">Shortlisted</option>
                    <option value="Rejected">Rejected</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Applicants