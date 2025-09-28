// import React, { useState } from 'react'

// const Resume = () => {
//   const [resumeFile, setResumeFile] = useState(null)

//   const handleFileUpload = (event) => {
//     const file = event.target.files[0]
//     if (file) {
//       setResumeFile(file)
//       alert(`Resume "${file.name}" uploaded successfully!`)
//     }
//   }

//   const aiFeatures = [
//     { name: 'Resume ATS Score Checker', description: 'Check how well your resume passes through ATS systems' },
//     { name: 'Resume Enhancer', description: 'Get suggestions to improve your resume content' },
//     { name: 'Skills Gap Analysis', description: 'Identify missing skills for your target jobs' }
//   ]

//   return (
//     <div className="space-y-6">
//       <div className="bg-white rounded-lg shadow p-6">
//         <h2 className="text-2xl font-bold mb-4">Your Resume/CV</h2>
        
//         <div className="mb-6">
//           <label className="block text-sm font-medium text-gray-700 mb-2">
//             Upload Your Resume
//           </label>
//           <input
//             type="file"
//             accept=".pdf,.doc,.docx"
//             onChange={handleFileUpload}
//             className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
//           />
//         </div>

//         {resumeFile && (
//           <div className="bg-green-50 p-4 rounded-lg">
//             <p className="text-green-800">
//               Current Resume: <strong>{resumeFile.name}</strong>
//             </p>
//             <div className="mt-2 space-x-2">
//               <button className="text-blue-600 hover:text-blue-800">View</button>
//               <button className="text-green-600 hover:text-green-800">Download</button>
//               <button className="text-red-600 hover:text-red-800">Delete</button>
//             </div>
//           </div>
//         )}
//       </div>

//       <div className="bg-white rounded-lg shadow p-6">
//         <h3 className="text-xl font-bold mb-4">AI Resume Tools</h3>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//           {aiFeatures.map((feature, index) => (
//             <div key={index} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
//               <h4 className="font-semibold mb-2">{feature.name}</h4>
//               <p className="text-sm text-gray-600 mb-3">{feature.description}</p>
//               <button className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700">
//                 Use Tool
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Resume


import React, { useState } from 'react';
import { FaFileAlt, FaCheckCircle, FaDownload, FaTrash, FaEye, FaMagic, FaChartLine } from 'react-icons/fa';

const Resume = () => {
  const [resumeFile, setResumeFile] = useState(null);
  const [atsScore, setAtsScore] = useState(78); // Example ATS score
  const [resumeHistory, setResumeHistory] = useState([]);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setResumeFile(file);
      setResumeHistory([file, ...resumeHistory]); // add to history
      alert(`Resume "${file.name}" uploaded successfully!`);
    }
  };

  const aiFeatures = [
    { name: 'Resume ATS Score Checker', description: 'Check how well your resume passes through ATS systems', icon: <FaChartLine /> },
    { name: 'Resume Enhancer', description: 'Get suggestions to improve your resume content', icon: <FaMagic /> },
    { name: 'Skills Gap Analysis', description: 'Identify missing skills for your target jobs', icon: <FaCheckCircle /> }
  ];

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-400 to-indigo-500 rounded-xl text-white p-6 shadow-lg flex flex-col md:flex-row justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold mb-2">Your Resume</h2>
          <p className="text-white/90">Keep your resume updated and optimized for better opportunities.</p>
        </div>
        {resumeFile && (
          <div className="mt-4 md:mt-0 flex items-center gap-4">
            <FaFileAlt size={40} />
            <div>
              <p className="font-semibold">{resumeFile.name}</p>
              <p>ATS Score: <strong>{atsScore}%</strong></p>
              <div className="w-48 bg-white bg-opacity-30 rounded-full h-2 mt-1">
                <div className="bg-white h-2 rounded-full transition-all" style={{ width: `${atsScore}%` }}></div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Upload Section */}
      <div className="bg-white rounded-xl shadow p-6">
        <h3 className="text-xl font-bold mb-4">Upload Your Resume</h3>
        <input
          type="file"
          accept=".pdf,.doc,.docx"
          onChange={handleFileUpload}
          className="block w-full text-sm text-gray-500 file:mr-4 file:py-3 file:px-6 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
        />
      </div>

      {/* Resume History */}
      {resumeHistory.length > 0 && (
        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="text-xl font-bold mb-4">Resume History</h3>
          <div className="space-y-3">
            {resumeHistory.map((file, index) => (
              <div key={index} className="flex justify-between items-center border-b py-2 last:border-b-0">
                <div className="flex items-center gap-3">
                  <FaFileAlt className="text-blue-500" />
                  <span>{file.name}</span>
                </div>
                <div className="flex gap-2">
                  <button className="text-blue-600 hover:text-blue-800 flex items-center gap-1"><FaEye /> View</button>
                  <button className="text-green-600 hover:text-green-800 flex items-center gap-1"><FaDownload /> Download</button>
                  <button className="text-red-600 hover:text-red-800 flex items-center gap-1" onClick={() => {
                    setResumeHistory(resumeHistory.filter((_, i) => i !== index));
                  }}><FaTrash /> Delete</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* AI Resume Tools */}
      <div className="bg-white rounded-xl shadow p-6">
        <h3 className="text-xl font-bold mb-4">AI Resume Tools</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {aiFeatures.map((feature, index) => (
            <div key={index} className="p-4 rounded-xl bg-gradient-to-br from-purple-400 to-purple-600 text-white flex flex-col justify-between hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-2">
                {feature.icon}
                <h4 className="font-semibold text-lg">{feature.name}</h4>
              </div>
              <p className="text-sm mb-3">{feature.description}</p>
              <button className="w-full bg-white text-purple-600 font-semibold py-2 rounded-md hover:bg-white/90 transition-colors">Use Tool</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Resume;
