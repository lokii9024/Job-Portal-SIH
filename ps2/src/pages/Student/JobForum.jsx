// import React from 'react'

// const JobForum = () => {
//   const jobPostings = [
//     { id: 1, company: 'Google', position: 'Frontend Developer', type: 'Full-time', posted: '2 hours ago', deadline: '2024-01-20' },
//     { id: 2, company: 'Microsoft', position: 'Software Engineer Intern', type: 'Internship', posted: '5 hours ago', deadline: '2024-01-25' },
//     { id: 3, company: 'Amazon', position: 'Backend Developer', type: 'Full-time', posted: '1 day ago', deadline: '2024-01-30' }
//   ]

//   return (
//     <div className="bg-white rounded-lg shadow p-6">
//       <h2 className="text-2xl font-bold mb-6">Job Forum</h2>
//       <p className="text-gray-600 mb-6">Latest job and internship opportunities posted by the placement cell</p>
      
//       <div className="space-y-4">
//         {jobPostings.map((job) => (
//           <div key={job.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
//             <div className="flex justify-between items-start mb-3">
//               <div>
//                 <h3 className="font-bold text-lg">{job.position}</h3>
//                 <p className="text-gray-600">{job.company}</p>
//               </div>
//               <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
//                 {job.type}
//               </span>
//             </div>
            
//             <div className="flex justify-between items-center text-sm text-gray-500 mb-3">
//               <span>Posted: {job.posted}</span>
//               <span>Deadline: {job.deadline}</span>
//             </div>
            
//             <div className="flex space-x-2">
//               <button className="bg-green-600 text-white px-4 py-2 rounded text-sm hover:bg-green-700">
//                 Apply Now
//               </button>
//               <button className="border border-gray-300 px-4 py-2 rounded text-sm hover:bg-gray-50">
//                 View Details
//               </button>
//               <button className="border border-gray-300 px-4 py-2 rounded text-sm hover:bg-gray-50">
//                 Save Job
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }

// export default JobForum

import React, { useMemo, useState } from "react";

const typeColors = {
  "Full-time": "bg-blue-100 text-blue-800",
  Internship: "bg-emerald-100 text-emerald-800",
  Contract: "bg-purple-100 text-purple-800",
  Parttime: "bg-amber-100 text-amber-800",
};

const JobForum = () => {
  const [query, setQuery] = useState("");
  const [typeFilter, setTypeFilter] = useState("All");
  const [sortKey, setSortKey] = useState("posted"); // posted | deadline | company
  const [page, setPage] = useState(1);
  const pageSize = 5;

  const jobPostings = [
    { id: 1, company: "Google", position: "Frontend Developer", type: "Full-time", posted: "2 hours ago", postedAt: new Date("2024-01-18T08:00:00Z"), deadline: "2024-01-20" },
    { id: 2, company: "Microsoft", position: "Software Engineer Intern", type: "Internship", posted: "5 hours ago", postedAt: new Date("2024-01-18T05:00:00Z"), deadline: "2024-01-25" },
    { id: 3, company: "Amazon", position: "Backend Developer", type: "Full-time", posted: "1 day ago", postedAt: new Date("2024-01-17T08:00:00Z"), deadline: "2024-01-30" },
    { id: 4, company: "Adobe", position: "UI Engineer", type: "Contract", posted: "3 days ago", postedAt: new Date("2024-01-15T08:00:00Z"), deadline: "2024-01-28" },
    { id: 5, company: "Meta", position: "Fullstack Developer", type: "Full-time", posted: "4 days ago", postedAt: new Date("2024-01-14T08:00:00Z"), deadline: "2024-02-02" },
    { id: 6, company: "Netflix", position: "Product Designer", type: "Parttime", posted: "2 days ago", postedAt: new Date("2024-01-16T08:00:00Z"), deadline: "2024-02-05" },
  ];

  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim();
    return jobPostings.filter((j) => {
      const matchesQ =
        j.company.toLowerCase().includes(q) ||
        j.position.toLowerCase().includes(q) ||
        j.type.toLowerCase().includes(q);
      const matchesType = typeFilter === "All" ? true : j.type === typeFilter;
      return matchesQ && matchesType;
    });
  }, [jobPostings, query, typeFilter]);

  const sorted = useMemo(() => {
    const arr = [...filtered];
    if (sortKey === "posted") {
      arr.sort((a, b) => b.postedAt - a.postedAt);
    } else if (sortKey === "deadline") {
      arr.sort((a, b) => new Date(a.deadline) - new Date(b.deadline));
    } else if (sortKey === "company") {
      arr.sort((a, b) => a.company.localeCompare(b.company));
    }
    return arr;
  }, [filtered, sortKey]);

  const totalPages = Math.max(1, Math.ceil(sorted.length / pageSize));
  const current = useMemo(() => {
    const start = (page - 1) * pageSize;
    return sorted.slice(start, start + pageSize);
  }, [sorted, page]);

  const resetToFirstPage = () => setPage(1);

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-2xl font-bold mb-1">Job Forum</h2>
      <p className="text-gray-600 mb-6">
        Latest job and internship opportunities posted by the placement cell.
      </p>

      {/* Controls */}
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between mb-5">
        <div className="flex-1">
          <input
            type="search"
            placeholder="Search by role, company, or type..."
            className="w-full md:max-w-md rounded-md border border-gray-300 px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-100 focus:border-indigo-400"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              resetToFirstPage();
            }}
            aria-label="Search jobs"
          />
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <select
            className="rounded-md border border-gray-300 px-3 py-2 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
            value={typeFilter}
            onChange={(e) => {
              setTypeFilter(e.target.value);
              resetToFirstPage();
            }}
            aria-label="Filter by job type"
          >
            <option>All</option>
            <option>Full-time</option>
            <option>Internship</option>
            <option>Contract</option>
            <option>Parttime</option>
          </select>

          <select
            className="rounded-md border border-gray-300 px-3 py-2 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
            value={sortKey}
            onChange={(e) => {
              setSortKey(e.target.value);
              resetToFirstPage();
            }}
            aria-label="Sort jobs"
          >
            <option value="posted">Newest</option>
            <option value="deadline">Closest deadline</option>
            <option value="company">Company A–Z</option>
          </select>
        </div>
      </div>

      {/* List */}
      <div className="space-y-4">
        {current.length === 0 ? (
          <div className="rounded-md border border-dashed border-gray-300 p-8 text-center text-gray-600">
            No jobs found. Try adjusting filters or search keywords.
          </div>
        ) : (
          current.map((job) => (
            <article
              key={job.id}
              className="border rounded-lg p-4 hover:shadow-md transition-shadow"
            >
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="font-bold text-lg">{job.position}</h3>
                  <p className="text-gray-600">{job.company}</p>
                </div>
                <span
                  className={`px-3 py-1 rounded-full text-sm ${
                    typeColors[job.type] || "bg-gray-100 text-gray-800"
                  }`}
                >
                  {job.type}
                </span>
              </div>

              <div className="flex flex-wrap justify-between items-center text-sm text-gray-500 gap-3 mb-3">
                <span>Posted: {job.posted}</span>
                <span>Deadline: {job.deadline}</span>
              </div>

              <div className="flex flex-wrap gap-2">
                <button className="bg-green-600 text-white px-4 py-2 rounded text-sm hover:bg-green-700">
                  Apply Now
                </button>
                <button className="border border-gray-300 px-4 py-2 rounded text-sm hover:bg-gray-50">
                  View Details
                </button>
                <button className="border border-gray-300 px-4 py-2 rounded text-sm hover:bg-gray-50">
                  Save Job
                </button>
              </div>
            </article>
          ))
        )}
      </div>

      {/* Pagination */}
      <nav className="mt-6 flex items-center justify-between" aria-label="Job pagination">
        <button
          className="px-3 py-1 rounded border border-gray-300 text-gray-700 hover:bg-gray-50 disabled:opacity-50"
          onClick={() => setPage((p) => Math.max(1, p - 1))}
          disabled={page === 1}
        >
          Previous
        </button>
        <div className="text-sm text-gray-600">
          Page {page} of {totalPages}
        </div>
        <button
          className="px-3 py-1 rounded border border-gray-300 text-gray-700 hover:bg-gray-50 disabled:opacity-50"
          onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
          disabled={page === totalPages}
        >
          Next
        </button>
      </nav>
    </div>
  );
};

export default JobForum;
