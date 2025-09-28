import React, { useMemo, useState } from "react";

const initialJobs = [
  { id: 1, title: "Frontend Developer", company: "Google", type: "Full-time", applications: 45 },
  { id: 2, title: "Backend Engineer", company: "Microsoft", type: "Internship", applications: 32 },
];

const typeBadge = {
  "Full-time": "bg-blue-100 text-blue-800",
  Internship: "bg-emerald-100 text-emerald-800",
  Contract: "bg-purple-100 text-purple-800",
  "Part-time": "bg-amber-100 text-amber-800",
};

const JobPostings = () => {
  const [jobs, setJobs] = useState(initialJobs);
  const [form, setForm] = useState({ title: "", company: "", type: "Full-time", applications: 0 });
  const [errors, setErrors] = useState({});
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return jobs;
    return jobs.filter(
      (j) =>
        j.title.toLowerCase().includes(q) ||
        j.company.toLowerCase().includes(q) ||
        j.type.toLowerCase().includes(q)
    );
  }, [jobs, query]);

  const validate = () => {
    const e = {};
    if (!form.title.trim()) e.title = "Job title is required";
    if (!form.company.trim()) e.company = "Company is required";
    if (!form.type) e.type = "Job type is required";
    if (form.applications < 0) e.applications = "Applications cannot be negative";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    const nextId = jobs.length ? Math.max(...jobs.map((j) => j.id)) + 1 : 1;
    const newJob = { id: nextId, ...form };
    setJobs((prev) => [newJob, ...prev]);
    setForm({ title: "", company: "", type: "Full-time", applications: 0 });
    setErrors({});
  };

  const handleDelete = (id) => {
    if (!window.confirm("Delete this job posting?")) return;
    setJobs((prev) => prev.filter((j) => j.id !== id));
  };

  return (
    <div className="space-y-8">
      {/* Card 1: Add Job */}
      <section className="bg-white rounded-xl shadow border border-gray-100">
        <header className="px-6 py-5">
          <h2 className="text-xl font-semibold">Add Job Posting</h2>
          <p className="text-sm text-gray-600">
            Create a new role and it will appear in the list below after submitting.
          </p>
        </header>
        <div className="border-t border-gray-100" />
        <div className="p-6">
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-5 gap-3 md:gap-4">
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700">Job Title</label>
              <input
                type="text"
                value={form.title}
                onChange={(e) => setForm((f) => ({ ...f, title: e.target.value }))}
                className={`mt-1 w-full rounded-md border px-3 py-2 outline-none ${
                  errors.title ? "border-red-500 focus:border-red-500" : "border-gray-300 focus:border-indigo-400"
                }`}
                placeholder="e.g., Frontend Developer"
              />
              {errors.title && <p className="text-sm text-red-600 mt-1">{errors.title}</p>}
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700">Company</label>
              <input
                type="text"
                value={form.company}
                onChange={(e) => setForm((f) => ({ ...f, company: e.target.value }))}
                className={`mt-1 w-full rounded-md border px-3 py-2 outline-none ${
                  errors.company ? "border-red-500 focus:border-red-500" : "border-gray-300 focus:border-indigo-400"
                }`}
                placeholder="e.g., Google"
              />
              {errors.company && <p className="text-sm text-red-600 mt-1">{errors.company}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Type</label>
              <select
                value={form.type}
                onChange={(e) => setForm((f) => ({ ...f, type: e.target.value }))}
                className={`mt-1 w-full rounded-md border px-3 py-2 outline-none ${
                  errors.type ? "border-red-500 focus:border-red-500" : "border-gray-300 focus:border-indigo-400"
                }`}
              >
                <option>Full-time</option>
                <option>Internship</option>
                <option>Contract</option>
                <option>Part-time</option>
              </select>
              {errors.type && <p className="text-sm text-red-600 mt-1">{errors.type}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Applications</label>
              <input
                type="number"
                min={0}
                value={form.applications}
                onChange={(e) => setForm((f) => ({ ...f, applications: Number(e.target.value) }))}
                className={`mt-1 w-full rounded-md border px-3 py-2 outline-none ${
                  errors.applications ? "border-red-500 focus:border-red-500" : "border-gray-300 focus:border-indigo-400"
                }`}
              />
              {errors.applications && <p className="text-sm text-red-600 mt-1">{errors.applications}</p>}
            </div>

            <div className="md:col-span-5 flex justify-end">
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-md bg-indigo-600 text-white px-4 py-2 font-semibold hover:bg-indigo-700 transition"
              >
                Add Job
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Card 2: Jobs List */}
      <section className="bg-white rounded-xl shadow border border-gray-100">
        <header className="px-6 py-5">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold">Job Postings</h2>
              <p className="text-sm text-gray-600">Search, edit, or remove job postings.</p>
            </div>
            <div className="w-full max-w-xs">
              <input
                type="search"
                placeholder="Search title, company, or type..."
                className="w-full rounded-md border border-gray-300 px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-100 focus:border-indigo-400"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                aria-label="Search jobs"
              />
            </div>
          </div>
        </header>
        <div className="border-t border-gray-100" />
        <div className="p-6">
          <div className="overflow-auto rounded-lg border border-gray-200">
            <table className="min-w-full table-auto">
              <thead className="bg-gray-100 sticky top-0 z-10">
                <tr>
                  <th className="px-4 py-2 text-left">ID</th>
                  <th className="px-4 py-2 text-left">Job Title</th>
                  <th className="px-4 py-2 text-left">Company</th>
                  <th className="px-4 py-2 text-left">Type</th>
                  <th className="px-4 py-2 text-left">Applications</th>
                  <th className="px-4 py-2 text-left">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {filtered.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="py-10 text-center text-gray-500">
                      No job postings found.
                    </td>
                  </tr>
                ) : (
                  filtered.map((job, idx) => (
                    <tr key={job.id} className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="px-4 py-2">{job.id}</td>
                      <td className="px-4 py-2 font-medium">{job.title}</td>
                      <td className="px-4 py-2">{job.company}</td>
                      <td className="px-4 py-2">
                        <span className={`px-2 py-1 rounded-full text-xs font-semibold ${typeBadge[job.type] || "bg-gray-100 text-gray-800"}`}>
                          {job.type}
                        </span>
                      </td>
                      <td className="px-4 py-2">{job.applications}</td>
                      <td className="px-4 py-2">
                        <div className="flex items-center gap-3">
                          <button className="text-blue-600 hover:text-blue-800 font-medium">Edit</button>
                          <button
                            className="text-red-600 hover:text-red-800 font-medium"
                            onClick={() => handleDelete(job.id)}
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};

export default JobPostings;
