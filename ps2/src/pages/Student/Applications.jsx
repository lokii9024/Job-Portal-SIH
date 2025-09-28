

import React, { useState } from 'react';

const Applications = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortAsc, setSortAsc] = useState(true);

  const applications = [
    { id: 1, company: 'Google', position: 'Frontend Developer', appliedDate: '2024-01-10', status: 'Under Review', nextStep: 'Technical Interview' },
    { id: 2, company: 'Microsoft', position: 'Software Engineer', appliedDate: '2024-01-08', status: 'Shortlisted', nextStep: 'HR Round' },
    { id: 3, company: 'Amazon', position: 'Backend Developer', appliedDate: '2024-01-05', status: 'Rejected', nextStep: 'None' },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Shortlisted': return 'bg-green-100 text-green-800';
      case 'Under Review': return 'bg-yellow-100 text-yellow-800';
      case 'Rejected': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  // Filter applications based on search
  const filteredApps = applications
    .filter(app =>
      app.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      app.status.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => sortAsc 
      ? new Date(a.appliedDate) - new Date(b.appliedDate)
      : new Date(b.appliedDate) - new Date(a.appliedDate)
    );

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-4">Your Applications</h2>

      {/* Search and Sort */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 gap-2">
        <input
          type="text"
          placeholder="Search by company or status..."
          className="border rounded px-3 py-2 w-full md:w-1/3 focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          onClick={() => setSortAsc(!sortAsc)}
          className="bg-blue-500 text-white px-3 py-2 rounded hover:bg-blue-600"
        >
          Sort by Date {sortAsc ? '↑' : '↓'}
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 text-left">Company</th>
              <th className="px-4 py-2 text-left">Position</th>
              <th className="px-4 py-2 text-left">Applied Date</th>
              <th className="px-4 py-2 text-left">Status</th>
              <th className="px-4 py-2 text-left">Next Step</th>
              <th className="px-4 py-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredApps.length === 0 ? (
              <tr>
                <td colSpan="6" className="text-center py-6 text-gray-500">No applications found.</td>
              </tr>
            ) : (
              filteredApps.map((app) => (
                <tr key={app.id} className="border-b hover:bg-gray-50 transition-colors">
                  <td className="px-4 py-2 font-medium">{app.company}</td>
                  <td className="px-4 py-2">{app.position}</td>
                  <td className="px-4 py-2">{app.appliedDate}</td>
                  <td className="px-4 py-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getStatusColor(app.status)}`}>
                      {app.status}
                    </span>
                  </td>
                  <td className="px-4 py-2">{app.nextStep}</td>
                  <td className="px-4 py-2 flex gap-2">
                    <button className="text-blue-600 hover:text-blue-800 font-medium">View</button>
                    <button
                      className="text-red-600 hover:text-red-800 font-medium"
                      onClick={() => alert(`Withdrawn application to ${app.company}`)}
                    >
                      Withdraw
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Applications;

