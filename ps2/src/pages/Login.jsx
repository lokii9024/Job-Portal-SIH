import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate()

  const handleLogin = (role) => {
    navigate(`/${role}`)
  }

  const loginCards = [
    {
      role: 'student',
      title: 'Student Portal',
      description: 'Access your profile, applications, and career resources',
      bgColor: 'bg-blue-500',
      icon: '🎓'
    },
    {
      role: 'admin',
      title: 'Admin Portal',
      description: 'Manage students, employers, and placement data',
      bgColor: 'bg-green-500',
      icon: '⚙️'
    },
    {
      role: 'mentor',
      title: 'Mentor Portal',
      description: 'Guide students and track their progress',
      bgColor: 'bg-purple-500',
      icon: '👨‍🏫'
    },
    {
      role: 'employer',
      title: 'Employer Portal',
      description: 'Post jobs and manage candidates',
      bgColor: 'bg-orange-500',
      icon: '💼'
    }
  ]

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            College Placement Portal
          </h1>
          <p className="text-xl text-gray-600">
            Choose your portal to get started
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {loginCards.map((card) => (
            <div
              key={card.role}
              className={`${card.bgColor} rounded-2xl shadow-xl transform hover:scale-105 transition-all duration-300 cursor-pointer`}
              onClick={() => handleLogin(card.role)}
            >
              <div className="p-8 text-white">
                <div className="text-6xl mb-4">{card.icon}</div>
                <h3 className="text-2xl font-bold mb-2">{card.title}</h3>
                <p className="opacity-90">{card.description}</p>
                <button className="mt-6 px-6 py-2 bg-white bg-opacity-20 rounded-full font-semibold hover:bg-opacity-30 transition-all">
                  Enter Portal
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Login