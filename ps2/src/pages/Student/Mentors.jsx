import React from 'react'

const Mentors = () => {
  const mentors = [
    { id: 1, name: 'Dr. Sarah Wilson', expertise: 'Software Engineering, Interview Preparation', status: 'Active', sessions: 5 },
    { id: 2, name: 'Prof. Mike Johnson', expertise: 'Data Structures, Algorithms', status: 'Active', sessions: 3 },
    { id: 3, name: 'Ms. Emily Davis', expertise: 'Career Guidance, Resume Building', status: 'Completed', sessions: 8 }
  ]

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-2xl font-bold mb-6">Your Mentors</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mentors.map((mentor) => (
          <div key={mentor.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
            <h3 className="font-bold text-lg mb-2">{mentor.name}</h3>
            <p className="text-sm text-gray-600 mb-3">{mentor.expertise}</p>
            <div className="flex justify-between items-center mb-3">
              <span className={`px-2 py-1 rounded text-xs ${
                mentor.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
              }`}>
                {mentor.status}
              </span>
              <span className="text-sm text-gray-600">Sessions: {mentor.sessions}</span>
            </div>
            <div className="space-x-2">
              <button className="bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700">
                Message
              </button>
              <button className="bg-green-600 text-white px-3 py-1 rounded text-sm hover:bg-green-700">
                Schedule Session
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6">
        <button className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700">
          Request New Mentor
        </button>
      </div>
    </div>
  )
}

export default Mentors