// import React from 'react'

// const Profile = () => {
//   const studentInfo = {
//     name: 'John Doe',
//     email: 'john.doe@college.edu',
//     rollNumber: 'CS2021001',
//     department: 'Computer Science',
//     year: 'Final Year',
//     cgpa: '8.5',
//     phone: '+91 9876543210',
//     address: '123 College Street, City, State'
//   }

//   return (
//     <div className="bg-white rounded-lg shadow p-6">
//       <h2 className="text-2xl font-bold mb-6">Student Profile</h2>
      
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         <div className="space-y-4">
//           <div>
//             <label className="block text-sm font-medium text-gray-600">Full Name</label>
//             <p className="mt-1 text-lg">{studentInfo.name}</p>
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-600">Email</label>
//             <p className="mt-1 text-lg">{studentInfo.email}</p>
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-600">Roll Number</label>
//             <p className="mt-1 text-lg">{studentInfo.rollNumber}</p>
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-600">Department</label>
//             <p className="mt-1 text-lg">{studentInfo.department}</p>
//           </div>
//         </div>
        
//         <div className="space-y-4">
//           <div>
//             <label className="block text-sm font-medium text-gray-600">Academic Year</label>
//             <p className="mt-1 text-lg">{studentInfo.year}</p>
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-600">CGPA</label>
//             <p className="mt-1 text-lg">{studentInfo.cgpa}</p>
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-600">Phone</label>
//             <p className="mt-1 text-lg">{studentInfo.phone}</p>
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-600">Address</label>
//             <p className="mt-1 text-lg">{studentInfo.address}</p>
//           </div>
//         </div>
//       </div>
      
//       <div className="mt-6">
//         <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
//           Edit Profile
//         </button>
//       </div>
//     </div>
//   )
// }

// export default Profile


import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaUserCircle } from 'react-icons/fa';

const Profile = () => {
  const studentInfo = {
    name: 'John Doe',
    email: 'john.doe@college.edu',
    rollNumber: 'CS2021001',
    department: 'Computer Science',
    year: 'Final Year',
    cgpa: '8.5',
    phone: '+91 9876543210',
    address: '123 College Street, City, State',
    applicationsSent: 12,
    interviews: 5,
    offers: 2,
    profileCompleteness: 85
  };

  return (
    <div className="space-y-6">
      {/* Profile Header */}
      <div className="bg-gradient-to-r from-blue-400 to-indigo-500 rounded-xl shadow-lg p-6 flex flex-col md:flex-row items-center gap-6 text-white">
        <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center text-6xl text-blue-500 overflow-hidden">
          <FaUserCircle />
        </div>
        <div className="flex-1">
          <h2 className="text-3xl font-bold">{studentInfo.name}</h2>
          <p className="text-white/90">{studentInfo.department} - {studentInfo.year}</p>
          <div className="mt-3 bg-white bg-opacity-30 h-3 w-full rounded-full">
            <div
              className="h-3 rounded-full bg-white transition-all"
              style={{ width: `${studentInfo.profileCompleteness}%` }}
            ></div>
          </div>
          <p className="mt-1 text-sm">Profile Completeness: {studentInfo.profileCompleteness}%</p>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white shadow-lg rounded-xl p-4 text-center hover:shadow-xl transition-shadow">
          <h3 className="text-lg font-semibold">Applications Sent</h3>
          <p className="text-2xl font-bold text-blue-600">{studentInfo.applicationsSent}</p>
        </div>
        <div className="bg-white shadow-lg rounded-xl p-4 text-center hover:shadow-xl transition-shadow">
          <h3 className="text-lg font-semibold">Interviews</h3>
          <p className="text-2xl font-bold text-green-600">{studentInfo.interviews}</p>
        </div>
        <div className="bg-white shadow-lg rounded-xl p-4 text-center hover:shadow-xl transition-shadow">
          <h3 className="text-lg font-semibold">Offers</h3>
          <p className="text-2xl font-bold text-purple-600">{studentInfo.offers}</p>
        </div>
      </div>

      {/* Profile Details */}
      <div className="bg-white rounded-xl shadow-lg p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-600">Full Name</label>
            <p className="mt-1 text-lg">{studentInfo.name}</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">Email</label>
            <div className="flex items-center justify-between mt-1">
              <p className="text-lg">{studentInfo.email}</p>
              <button className="text-blue-600 hover:text-blue-800 flex items-center gap-1">
                <FaEnvelope /> Email
              </button>
            </div>
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
            <div className="flex items-center justify-between mt-1">
              <p className="text-lg">{studentInfo.phone}</p>
              <button className="text-green-600 hover:text-green-800 flex items-center gap-1">
                <FaPhoneAlt /> Call
              </button>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">Address</label>
            <p className="mt-1 text-lg">{studentInfo.address}</p>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex justify-end gap-4">
        <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
          Edit Profile
        </button>
        <button className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700">
          Update Resume
        </button>
      </div>
    </div>
  );
};

export default Profile;
