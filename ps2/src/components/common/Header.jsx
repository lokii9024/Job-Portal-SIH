import React from 'react'
import { useNavigate } from 'react-router-dom'

const Header = ({ userRole, userName }) => {
  const navigate = useNavigate()

  const handleLogout = () => {
    navigate('/login')
  }

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="flex justify-between items-center px-6 py-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">
            {userRole} Dashboard
          </h1>
          <p className="text-gray-600">Welcome back, {userName}!</p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="text-right">
            <p className="font-semibold">{userName}</p>
            <p className="text-sm text-gray-600">{userRole}</p>
          </div>
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
          >
            Logout
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header