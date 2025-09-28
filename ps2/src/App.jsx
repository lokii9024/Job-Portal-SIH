// import React from 'react'
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
// import Login from './pages/Login'
// import StudentDashboard from './pages/Student/Dashboard'
// import AdminDashboard from './pages/Admin/Dashboard'
// import MentorDashboard from './pages/Mentor/Dashboard'
// import EmployerDashboard from './pages/Employer/Dashboard'

// function App() {
//   return (
//     <Router>
//       <div className="min-h-screen bg-gray-50">
//         <Routes>
//           <Route path="/" element={<Navigate to="/login" replace />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/student/*" element={<StudentDashboard />} />
//           <Route path="/admin/*" element={<AdminDashboard />} />
//           <Route path="/mentor/*" element={<MentorDashboard />} />
//           <Route path="/employer/*" element={<EmployerDashboard />} />
//         </Routes>
//       </div>
//     </Router>
//   )
// }

// export default App


import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import WelcomePage from "./pages/WelcomePage";
import Login from "./pages/Login";
import StudentDashboard from "./pages/Student/Dashboard";
import AdminDashboard from "./pages/Admin/Dashboard";
import MentorDashboard from "./pages/Mentor/Dashboard";
import EmployerDashboard from "./pages/Employer/Dashboard";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Routes>
          {/* Landing Page */}
          <Route path="/" element={<WelcomePage />} />

          {/* Authentication */}
          <Route path="/login" element={<Login />} />

          {/* Dashboards */}
          <Route path="/student/*" element={<StudentDashboard />} />
          <Route path="/admin/*" element={<AdminDashboard />} />
          <Route path="/mentor/*" element={<MentorDashboard />} />
          <Route path="/employer/*" element={<EmployerDashboard />} />

          {/* Redirect unknown paths to landing page */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
