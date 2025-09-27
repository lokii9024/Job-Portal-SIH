import React from 'react'

const Projects = () => {
  const projects = [
    { id: 1, name: 'E-Commerce Website', description: 'Full-stack e-commerce application with React and Node.js', technologies: 'React, Node.js, MongoDB', duration: '3 months' },
    { id: 2, name: 'Machine Learning Model', description: 'Predictive analysis model for stock prices', technologies: 'Python, TensorFlow, Pandas', duration: '2 months' }
  ]

  const certifications = [
    { id: 1, name: 'AWS Cloud Practitioner', issuer: 'Amazon Web Services', date: '2023-12-01' },
    { id: 2, name: 'Google Cloud Associate', issuer: 'Google Cloud', date: '2023-11-15' }
  ]

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-2xl font-bold mb-4">Projects & Certifications</h2>
        
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-4">Your Projects</h3>
          <div className="space-y-4">
            {projects.map((project) => (
              <div key={project.id} className="border rounded-lg p-4">
                <h4 className="font-bold text-lg mb-2">{project.name}</h4>
                <p className="text-gray-600 mb-2">{project.description}</p>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>Technologies: {project.technologies}</span>
                  <span>Duration: {project.duration}</span>
                </div>
                <div className="mt-3 space-x-2">
                  <button className="text-blue-600 hover:text-blue-800">Edit</button>
                  <button className="text-green-600 hover:text-green-800">View Details</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Your Certifications</h3>
          <div className="space-y-3">
            {certifications.map((cert) => (
              <div key={cert.id} className="flex justify-between items-center border-b pb-3">
                <div>
                  <h4 className="font-semibold">{cert.name}</h4>
                  <p className="text-sm text-gray-600">Issued by: {cert.issuer}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-500">Date: {cert.date}</p>
                  <button className="text-blue-600 hover:text-blue-800 text-sm">View Certificate</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 space-x-3">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
            Add Project
          </button>
          <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700">
            Add Certification
          </button>
        </div>
      </div>
    </div>
  )
}

export default Projects