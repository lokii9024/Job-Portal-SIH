import React from 'react'

const JobForum = () => {
  const jobPostings = [
    { id: 1, company: 'Google', position: 'Frontend Developer', type: 'Full-time', posted: '2 hours ago', deadline: '2024-01-20' },
    { id: 2, company: 'Microsoft', position: 'Software Engineer Intern', type: 'Internship', posted: '5 hours ago', deadline: '2024-01-25' },
    { id: 3, company: 'Amazon', position: 'Backend Developer', type: 'Full-time', posted: '1 day ago', deadline: '2024-01-30' }
  ]

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-2xl font-bold mb-6">Job Forum</h2>
      <p className="text-gray-600 mb-6">Latest job and internship opportunities posted by the placement cell</p>
      
      <div className="space-y-4">
        {jobPostings.map((job) => (
          <div key={job.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-3">
              <div>
                <h3 className="font-bold text-lg">{job.position}</h3>
                <p className="text-gray-600">{job.company}</p>
              </div>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                {job.type}
              </span>
            </div>
            
            <div className="flex justify-between items-center text-sm text-gray-500 mb-3">
              <span>Posted: {job.posted}</span>
              <span>Deadline: {job.deadline}</span>
            </div>
            
            <div className="flex space-x-2">
              <button className="bg-green-600 text-white px-4 py-2 rounded text-sm hover:bg-green-700">
                Apply Now
              </button>
              <button className="border border-gray-300 px-4 py-2 rounded text-sm hover:bg-gray-50">
                View Details
              </button>
              <button className="border border-gray-300 px-4 py-2 rounded text-sm hover:bg-gray-50">
                Save Job
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default JobForum