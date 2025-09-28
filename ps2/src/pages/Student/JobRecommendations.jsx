import React from 'react'

const JobRecommendations = () => {
  const recommendations = [
    { id: 1, company: 'Google', position: 'Frontend Developer', match: '95%', skills: 'React, JavaScript, CSS' },
    { id: 2, company: 'Microsoft', position: 'Software Engineer', match: '88%', skills: 'C#, .NET, SQL' },
    { id: 3, company: 'Amazon', position: 'Backend Developer', match: '82%', skills: 'Node.js, AWS, MongoDB' }
  ]

  const aiTools = [
    { name: 'Placement Predictor', description: 'Check your chances of clearing interviews' },
    { name: 'Job Suggestions', description: 'Get personalized job recommendations' },
    { name: 'Skill Gap Analysis', description: 'Identify skills you need to learn' }
  ]

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-2xl font-bold mb-6">Job Recommendations</h2>
        
        <div className="space-y-4">
          {recommendations.map((job) => (
            <div key={job.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="font-bold text-lg">{job.position}</h3>
                  <p className="text-gray-600">{job.company}</p>
                </div>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                  Match: {job.match}
                </span>
              </div>
              <p className="text-sm text-gray-600 mb-3">Required Skills: {job.skills}</p>
              <div className="flex space-x-2">
                <button className="bg-blue-600 text-white px-4 py-2 rounded text-sm hover:bg-blue-700">
                  Apply Now
                </button>
                <button className="border border-gray-300 px-4 py-2 rounded text-sm hover:bg-gray-50">
                  Save for Later
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-xl font-bold mb-4">AI Career Tools</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {aiTools.map((tool, index) => (
            <div key={index} className="border rounded-lg p-4 text-center hover:shadow-md transition-shadow">
              <h4 className="font-semibold mb-2">{tool.name}</h4>
              <p className="text-sm text-gray-600 mb-3">{tool.description}</p>
              <button className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700">
                Use Tool
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default JobRecommendations


