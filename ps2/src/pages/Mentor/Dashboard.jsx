import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Sidebar from '../../components/common/Sidebar'
import Header from '../../components/common/Header'
import DashboardHome from './DashboardHome'
import StudentRequests from './StudentRequests'
import MenteesList from './MenteesList'
import PlacementReport from './PlacementReport'
import Reviews from './Reviews'

const MentorDashboard = () => {
  const mentorMenu = [
    { path: '', label: 'Dashboard', icon: '🏠' },
    { path: 'requests', label: 'Student Requests', icon: '📨' },
    { path: 'mentees', label: 'Mentees List', icon: '👥' },
    { path: 'placement', label: 'Placement Report', icon: '📊' },
    { path: 'reviews', label: 'Reviews About You', icon: '⭐' }
  ]

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar menuItems={mentorMenu} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header userRole="Mentor" userName="Dr. Sarah Wilson" />
        <main className="flex-1 overflow-y-auto p-6">
          <Routes>
            <Route path="" element={<DashboardHome />} />
            <Route path="requests" element={<StudentRequests />} />
            <Route path="mentees" element={<MenteesList />} />
            <Route path="placement" element={<PlacementReport />} />
            <Route path="reviews" element={<Reviews />} />
            <Route path="*" element={<Navigate to="" replace />} />
          </Routes>
        </main>
      </div>
    </div>
  )
}

export default MentorDashboard