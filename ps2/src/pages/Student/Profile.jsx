import React from 'react'

const Profile = () => {
  const studentInfo = {
    name: 'John Doe',
    email: 'john.doe@college.edu',
    rollNumber: 'CS2021001',
    department: 'Computer Science',
    year: 'Final Year',
    cgpa: '8.5',
    phone: '+91 9876543210',
    address: '123 College Street, City, State'
  }

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-2xl font-bold mb-6">Student Profile</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-600">Full Name</label>
            <p className="mt-1 text-lg">{studentInfo.name}</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">Email</label>
            <p className="mt-1 text-lg">{studentInfo.email}</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">Roll Number</label>
            <p className="mt-1 text-lg">{studentInfo.rollNumber}</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">Department</label>
            <p className="mt-1 text-lg">{studentInfo.department}</p>
          </div>
        </div>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-600">Academic Year</label>
            <p className="mt-1 text-lg">{studentInfo.year}</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">CGPA</label>
            <p className="mt-1 text-lg">{studentInfo.cgpa}</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">Phone</label>
            <p className="mt-1 text-lg">{studentInfo.phone}</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">Address</label>
            <p className="mt-1 text-lg">{studentInfo.address}</p>
          </div>
        </div>
      </div>
      
      <div className="mt-6">
        <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
          Edit Profile
        </button>
      </div>
    </div>
  )
}

export default Profile