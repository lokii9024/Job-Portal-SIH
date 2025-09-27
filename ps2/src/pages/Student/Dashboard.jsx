import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Sidebar from '../../components/common/Sidebar'
import Header from '../../components/common/Header'
import DashboardHome from './DashboardHome'
import Profile from './Profile'
import Resume from './Resume'
import Applications from './Applications'
import Mentors from './Mentors'
import Projects from './Projects'
import JobRecommendations from './JobRecommendations'
import JobForum from './JobForum'
import Reviews from './Reviews'

const StudentDashboard = () => {
  const studentMenu = [
    { path: '', label: 'Dashboard', icon: '🏠' },
    { path: 'profile', label: 'View Profile', icon: '👤' },
    { path: 'resume', label: 'Your Resume/CV', icon: '📄' },
    { path: 'applications', label: 'Your Applications', icon: '📋' },
    { path: 'mentors', label: 'Your Mentors', icon: '👨‍🏫' },
    { path: 'projects', label: 'Projects & Certifications', icon: '🏆' },
    { path: 'recommendations', label: 'Job Recommendations', icon: '💡' },
    { path: 'forum', label: 'Job Forum', icon: '💬' },
    { path: 'reviews', label: 'Your Reviews', icon: '⭐' }
  ]

  const aiFeatures = [
    { label: 'Resume ATS Score Checker', icon: '📊' },
    { label: 'Resume Enhancer', icon: '✨' },
    { label: 'Mock Interview Feedback', icon: '🎤' },
    { label: 'Interview Question Generator', icon: '❓' },
    { label: 'Placement Predictor', icon: '🔮' },
    { label: 'Job Suggestions', icon: '💼' }
  ]

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar menuItems={studentMenu} aiFeatures={aiFeatures} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header userRole="Student" userName="John Doe" />
        <main className="flex-1 overflow-y-auto p-6">
          <Routes>
            <Route path="" element={<DashboardHome />} />
            <Route path="profile" element={<Profile />} />
            <Route path="resume" element={<Resume />} />
            <Route path="applications" element={<Applications />} />
            <Route path="mentors" element={<Mentors />} />
            <Route path="projects" element={<Projects />} />
            <Route path="recommendations" element={<JobRecommendations />} />
            <Route path="forum" element={<JobForum />} />
            <Route path="reviews" element={<Reviews />} />
            <Route path="*" element={<Navigate to="" replace />} />
          </Routes>
        </main>
      </div>
    </div>
  )
}

export default StudentDashboard