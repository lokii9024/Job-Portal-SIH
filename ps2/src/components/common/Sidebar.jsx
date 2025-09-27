import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Sidebar = ({ menuItems, aiFeatures }) => {
  const location = useLocation()

  return (
    <div className="w-64 bg-white shadow-lg">
      <div className="p-6">
        <h2 className="text-xl font-bold text-gray-800">Student Portal</h2>
      </div>
      
      <nav className="mt-6">
        <div className="px-4">
          <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
            Navigation
          </h3>
        </div>
        <ul className="mt-2">
          {menuItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`flex items-center px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors ${
                  location.pathname.endsWith(item.path) ? 'bg-blue-50 text-blue-600 border-r-2 border-blue-600' : ''
                }`}
              >
                <span className="text-lg mr-3">{item.icon}</span>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {aiFeatures && (
        <div className="mt-8 px-4">
          <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
            AI Features
          </h3>
          <ul className="mt-2">
            {aiFeatures.map((feature, index) => (
              <li key={index}>
                <button className="flex items-center w-full px-4 py-3 text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors text-left">
                  <span className="text-lg mr-3">{feature.icon}</span>
                  {feature.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default Sidebar