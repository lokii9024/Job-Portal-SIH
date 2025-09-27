import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Sidebar from '../../components/common/Sidebar'
import Header from '../../components/common/Header'
import DashboardHome from './DashboardHome'
import StudentData from './StudentData'
import EmployerData from './EmployerData'
import PlacementData from './PlacementData'
import JobPostings from './JobPostings'
import InterviewScheduling from './InterviewScheduling'

const AdminDashboard = () => {
  const adminMenu = [
    { path: '', label: 'Dashboard', icon: '🏠' },
    { path: 'students', label: 'Student Data', icon: '👥' },
    { path: 'employers', label: 'Employer Data', icon: '🏢' },
    { path: 'placement', label: 'Placement Data', icon: '📊' },
    { path: 'jobs', label: 'Job Postings', icon: '💼' },
    { path: 'interviews', label: 'Interview Scheduling', icon: '📅' }
  ]

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar menuItems={adminMenu} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header userRole="Admin" userName="Admin User" />
        <main className="flex-1 overflow-y-auto p-6">
          <Routes>
            <Route path="" element={<DashboardHome />} />
            <Route path="students" element={<StudentData />} />
            <Route path="employers" element={<EmployerData />} />
            <Route path="placement" element={<PlacementData />} />
            <Route path="jobs" element={<JobPostings />} />
            <Route path="interviews" element={<InterviewScheduling />} />
            <Route path="*" element={<Navigate to="" replace />} />
          </Routes>
        </main>
      </div>
    </div>
  )
}

export default AdminDashboard