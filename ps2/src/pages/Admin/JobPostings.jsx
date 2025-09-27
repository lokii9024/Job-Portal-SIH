import React from 'react'

const JobPostings = () => {
  const jobs = [
    { id: 1, title: 'Frontend Developer', company: 'Google', type: 'Full-time', applications: 45 },
    { id: 2, title: 'Backend Engineer', company: 'Microsoft', type: 'Internship', applications: 32 }
  ]

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-2xl font-bold mb-6">Job Postings Management</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 text-left">ID</th>
              <th className="px-4 py-2 text-left">Job Title</th>
              <th className="px-4 py-2 text-left">Company</th>
              <th className="px-4 py-2 text-left">Type</th>
              <th className="px-4 py-2 text-left">Applications</th>
              <th className="px-4 py-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {jobs.map((job) => (
              <tr key={job.id} className="border-b">
                <td className="px-4 py-2">{job.id}</td>
                <td className="px-4 py-2">{job.title}</td>
                <td className="px-4 py-2">{job.company}</td>
                <td className="px-4 py-2">{job.type}</td>
                <td className="px-4 py-2">{job.applications}</td>
                <td className="px-4 py-2">
                  <button className="text-blue-600 hover:text-blue-800 mr-3">Edit</button>
                  <button className="text-red-600 hover:text-red-800">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default JobPostings