import React, { useState } from 'react'

const Resume = () => {
  const [resumeFile, setResumeFile] = useState(null)

  const handleFileUpload = (event) => {
    const file = event.target.files[0]
    if (file) {
      setResumeFile(file)
      alert(`Resume "${file.name}" uploaded successfully!`)
    }
  }

  const aiFeatures = [
    { name: 'Resume ATS Score Checker', description: 'Check how well your resume passes through ATS systems' },
    { name: 'Resume Enhancer', description: 'Get suggestions to improve your resume content' },
    { name: 'Skills Gap Analysis', description: 'Identify missing skills for your target jobs' }
  ]

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-2xl font-bold mb-4">Your Resume/CV</h2>
        
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Upload Your Resume
          </label>
          <input
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={handleFileUpload}
            className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
          />
        </div>

        {resumeFile && (
          <div className="bg-green-50 p-4 rounded-lg">
            <p className="text-green-800">
              Current Resume: <strong>{resumeFile.name}</strong>
            </p>
            <div className="mt-2 space-x-2">
              <button className="text-blue-600 hover:text-blue-800">View</button>
              <button className="text-green-600 hover:text-green-800">Download</button>
              <button className="text-red-600 hover:text-red-800">Delete</button>
            </div>
          </div>
        )}
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-xl font-bold mb-4">AI Resume Tools</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {aiFeatures.map((feature, index) => (
            <div key={index} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
              <h4 className="font-semibold mb-2">{feature.name}</h4>
              <p className="text-sm text-gray-600 mb-3">{feature.description}</p>
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

export default Resume