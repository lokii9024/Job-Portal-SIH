// WelcomePage.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { FaUserGraduate, FaChalkboardTeacher, FaBuilding, FaCog } from "react-icons/fa";

const WelcomePage = () => {
  const navigate = useNavigate();
  const currentYear = new Date().getFullYear();

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-6 bg-white shadow-md">
        <div className="text-2xl font-bold text-indigo-600">Job-Portal</div>
        <button
          onClick={() => navigate("/login")}
          className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition"
        >
          Login
        </button>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col justify-center items-center text-center bg-gradient-to-r from-indigo-500 via-blue-500 to-purple-500 text-white py-28 px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fadeIn">
          Empowering Careers, Connecting Opportunities 🚀
        </h1>
        <p className="text-lg md:text-xl mb-6 max-w-2xl animate-fadeIn delay-200">
          Job-Portal bridges the gap between education and employment. Build your resume, connect with mentors,
          and explore career opportunities seamlessly.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={() => navigate("/login")}
            className="px-6 py-3 bg-white text-indigo-600 font-semibold rounded-md shadow hover:bg-gray-100 transition"
          >
            Get Started
          </button>
          <button
            onClick={() => navigate("/about")}
            className="px-6 py-3 border border-white text-white font-semibold rounded-md hover:bg-white hover:text-indigo-600 transition"
          >
            Learn More
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-gray-50">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">What We Offer</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {/* Students */}
          <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition">
            <div className="text-4xl text-indigo-600 mb-4 flex justify-center">
              <FaUserGraduate />
            </div>
            <h3 className="font-semibold text-xl mb-2">For Students</h3>
            <p className="text-gray-600">Build resume, apply jobs, get mentors.</p>
          </div>

          {/* Mentors */}
          <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition">
            <div className="text-4xl text-indigo-600 mb-4 flex justify-center">
              <FaChalkboardTeacher />
            </div>
            <h3 className="font-semibold text-xl mb-2">For Mentors</h3>
            <p className="text-gray-600">Guide students, manage sessions, career advice.</p>
          </div>

          {/* Employers */}
          <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition">
            <div className="text-4xl text-indigo-600 mb-4 flex justify-center">
              <FaBuilding />
            </div>
            <h3 className="font-semibold text-xl mb-2">For Employers</h3>
            <p className="text-gray-600">Post jobs, track applicants, hire talent.</p>
          </div>

          {/* Admin */}
          <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition">
            <div className="text-4xl text-indigo-600 mb-4 flex justify-center">
              <FaCog />
            </div>
            <h3 className="font-semibold text-xl mb-2">For Admin</h3>
            <p className="text-gray-600">Manage users, monitor activity, maintain security.</p>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20 px-6 bg-white text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">About Us</h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Job-Portal is committed to bridging the gap between education and employment. 
          We provide opportunities, guidance, and tools to help students build successful careers
          and connect with mentors and employers efficiently.
        </p>
      </section>

      {/* Footer */}
      <footer className="bg-indigo-900 text-white py-6 mt-auto text-center">
        © {currentYear} Job-Portal. All Rights Reserved.
      </footer>
    </div>
  );
};

export default WelcomePage;




