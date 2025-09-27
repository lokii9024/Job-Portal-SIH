import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Sidebar from '../../components/common/Sidebar'
import Header from '../../components/common/Header'
import DashboardHome from './DashboardHome'
import Applicants from './Applicants'
import AssessmentResults from './AssessmentResults'
import InterviewResults from './InterviewResults'
import InterviewSchedules from './InterviewSchedules'
import ShortlistedCandidates from './ShortListedCandidates'
import CollegeReview from './CollegeReview'

const EmployerDashboard = () => {
  const employerMenu = [
    { path: '', label: 'Dashboard', icon: '🏠' },
    { path: 'applicants', label: 'View Applicants', icon: '👥' },
    { path: 'assessments', label: 'Assessment Results', icon: '📊' },
    { path: 'interview-results', label: 'Interview Results', icon: '✅' },
    { path: 'schedules', label: 'Interview Schedules', icon: '📅' },
    { path: 'shortlisted', label: 'Shortlisted Candidates', icon: '⭐' },
    { path: 'review', label: 'College Review', icon: '💬' }
  ]

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar menuItems={employerMenu} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header userRole="Employer" userName="Google HR" />
        <main className="flex-1 overflow-y-auto p-6">
          <Routes>
            <Route path="" element={<DashboardHome />} />
            <Route path="applicants" element={<Applicants />} />
            <Route path="assessments" element={<AssessmentResults />} />
            <Route path="interview-results" element={<InterviewResults />} />
            <Route path="schedules" element={<InterviewSchedules />} />
            <Route path="shortlisted" element={<ShortlistedCandidates />} />
            <Route path="review" element={<CollegeReview />} />
            <Route path="*" element={<Navigate to="" replace />} />
          </Routes>
        </main>
      </div>
    </div>
  )
}

export default EmployerDashboard